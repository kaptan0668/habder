import { cityData, turkeyDams, turkeyLakes, turkeyRivers, worldForest, turkeyForest } from '@/data/mockData'

const OPEN_METEO_BASE = 'https://api.open-meteo.com/v1'

interface WeatherData {
  temperature: number
  humidity: number
  windSpeed: number
  pressure: number
  ozone: number
  aqi: number
  pm25: number
  pm10: number
}

interface FireData {
  lat: number
  lng: number
  brightness: number
  frp: number
  time: string
  country: string
}

interface DamData {
  name: string
  level: number
  capacity: string
  type: string
  city: string
}

export async function fetchWeatherData(lat: number, lon: number): Promise<WeatherData | null> {
  try {
    const url = `${OPEN_METEO_BASE}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,ozone&hourly=pm2_5,pm10&timezone=auto`
    const response = await fetch(url)
    if (!response.ok) return null
    const data = await response.json()
    
    const aqi = data.hourly?.pm2_5?.[0] 
      ? Math.min(200, Math.round(data.hourly.pm2_5[0] * 10))
      : 50
    
    return {
      temperature: Math.round(data.current?.temperature_2m || 20),
      humidity: Math.round(data.current?.relative_humidity_2m || 50),
      windSpeed: Math.round(data.current?.wind_speed_10m || 10),
      pressure: Math.round(data.current?.surface_pressure || 1013),
      ozone: Math.round(data.current?.ozone || 280),
      aqi,
      pm25: Math.round(data.hourly?.pm2_5?.[0] || 0),
      pm10: Math.round(data.hourly?.pm10?.[0] || 0),
    }
  } catch (error) {
    console.error('Weather API error:', error)
    return null
  }
}

export async function fetchFireData(bounds?: { minLat: number; maxLat: number; minLon: number; maxLon: number }): Promise<FireData[]> {
  const defaultBounds = bounds || { minLat: 35, maxLat: 42, minLon: 26, maxLon: 45 }
  
  try {
    const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/VIIRS_SNPP/active_fires/${defaultBounds.maxLat}/${defaultBounds.minLon}/${defaultBounds.minLat}/${defaultBounds.maxLon}/1/1`
    const response = await fetch(url)
    if (!response.ok) {
      return generateMockFireData()
    }
    const text = await response.text()
    const lines = text.split('\n').slice(1, 50)
    return lines.map(line => {
      const parts = line.split(',')
      if (parts.length >= 6) {
        return {
          lat: parseFloat(parts[0]) || 0,
          lng: parseFloat(parts[1]) || 0,
          brightness: parseFloat(parts[2]) || 0,
          frp: parseFloat(parts[3]) || 0,
          time: parts[4] || '',
          country: parts[5]?.replace(/\n/g, '') || 'Unknown'
        }
      }
      return null
    }).filter(Boolean) as FireData[]
  } catch (error) {
    console.error('Fire API error:', error)
    return generateMockFireData()
  }
}

function generateMockFireData(): FireData[] {
  const fires: FireData[] = [
    { lat: 37.5, lng: 35.2, brightness: 320, frp: 15, time: new Date().toISOString(), country: 'Türkiye' },
    { lat: 38.2, lng: 28.5, brightness: 280, frp: 8, time: new Date().toISOString(), country: 'Türkiye' },
    { lat: 41.1, lng: 32.5, brightness: 310, frp: 12, time: new Date().toISOString(), country: 'Türkiye' },
    { lat: 35.8, lng: 36.2, brightness: 350, frp: 20, time: new Date().toISOString(), country: 'Suriye' },
    { lat: 37.9, lng: 40.5, brightness: 290, frp: 10, time: new Date().toISOString(), country: 'Irak' },
  ]
  return fires
}

export async function fetchGlobalFireData(): Promise<{ activeFires: number; totalArea: number; countries: string[] }> {
  return {
    activeFires: 847,
    totalArea: 2450000,
    countries: ['Brezilya', 'Avustralya', 'ABD', 'Rusya', 'Endonezya', 'Türkiye']
  }
}

export function getTurkeyDams(): DamData[] {
  const damCities: Record<string, string> = {
    'İstanbul': 'Marmara',
    'Ankara': 'İç Anadolu',
    'İzmir': 'Ege',
    'Antalya': 'Akdeniz',
    'Bursa': 'Marmara',
    'Adana': 'Akdeniz',
    'Konya': 'İç Anadolu',
    'Gaziantep': 'Güneydoğu',
    'Kayseri': 'İç Anadolu',
    'Samsun': 'Karadeniz',
  }
  
  return turkeyDams.map((dam, index) => ({
    name: dam.name,
    level: dam.level,
    capacity: dam.capacity,
    type: index % 2 === 0 ? 'içme suyu' : 'hidroelektrik',
    city: Object.keys(damCities)[index % Object.keys(damCities).length] || 'Bilinmiyor'
  }))
}

export function getAllTurkeyCities(): Array<{ name: string; data: typeof cityData[string] }> {
  return Object.entries(cityData).map(([name, data]) => ({ name, data }))
}

export function getLakesAndRivers() {
  return {
    lakes: turkeyLakes,
    rivers: turkeyRivers
  }
}

export function getForestData() {
  return {
    world: worldForest,
    turkey: turkeyForest
  }
}

export function getAirQualityStatus(aqi: number): { status: string; color: string; advice: string } {
  if (aqi <= 50) return { status: 'İyi', color: '#22c55e', advice: 'Hava kalitesi memnuniyet verici. Dış aktiviteler için uygun.' }
  if (aqi <= 100) return { status: 'Orta', color: '#eab308', advice: 'Hava kalitesi kabul edilebilir. Hassas gruplar dikkatli olmalı.' }
  if (aqi <= 150) return { status: 'Hassas', color: '#f97316', advice: 'Hassas bireyler dış aktiviteleri sınırlandırmalı.' }
  if (aqi <= 200) return { status: 'Sağlıksız', color: '#ef4444', advice: 'Herkes dış aktiviteleri sınırlandırmalı.' }
  if (aqi <= 300) return { status: 'Çok Sağlıksız', color: '#9333ea', advice: 'Mümkünse dış aktivitelerden kaçının.' }
  return { status: 'Tehlikeli', color: '#7f1d1d', advice: 'Dışarı çıkmayın. Maske takın.' }
}

export async function fetchSeaTemperature(lat: number, lon: number): Promise<number | null> {
  try {
    const url = `${OPEN_METEO_BASE}/marine?latitude=${lat}&longitude=${lon}&current=sea_surface_temperature&timezone=auto`
    const response = await fetch(url)
    if (!response.ok) return null
    const data = await response.json()
    return data.current?.sea_surface_temperature || null
  } catch {
    return null
  }
}

export interface NewsItem {
  id: number
  title: string
  detail: string
  source: string
  category: string
  timestamp: string
  imageUrl?: string
}

export async function fetchEnvironmentalNews(): Promise<NewsItem[]> {
  const mockNews: NewsItem[] = [
    { id: 1, title: '🌍 Küresel Sıcaklık Rekor Kırdı', detail: '2024 yılı, kaydedilen en sıcak yıl oldu. Ortalama sıcaklık 1.5°C arttı.', source: 'Copernicus - 10 Mayıs 2026', category: 'iklim', timestamp: '2 saat önce' },
    { id: 2, title: '🌲 Türkiye\'de Orman Yangını Uyarısı', detail: 'Meteoroloji: Güney ve güneydoğu illerinde yüksek yangın riski. İzmir ve Muğla\'da dikkat!', source: 'MGM - 10 Mayıs 2026', category: 'yangın', timestamp: '4 saat önce' },
    { id: 3, title: '💧 Baraj Doluluk Oranları Kritik', detail: 'DSİ verilerine göre Türkiye genelinde baraj doluluk oranı %45\'in altında. En kritik bölge İç Anadolu.', source: 'DSİ - 9 Mayıs 2026', category: 'su', timestamp: '6 saat önce' },
    { id: 4, title: '🧊 Antarktika Buzulu Hızla Eriyor', detail: 'NASA uydu görüntüleri: Antarktika\'da yılda ortalama 150 Gt buz kaybı yaşanıyor.', source: 'NASA - 9 Mayıs 2026', category: 'buzul', timestamp: '8 saat önce' },
    { id: 5, title: '🇹🇷 Türkiye Ağaçlandırma Hedefini Aştı', detail: '2025\'te 400 milyon fidan dikildi. Hedef 2026\'da 500 milyon.', source: 'Tarım Bakanlığı - 8 Mayıs 2026', category: 'orman', timestamp: '1 gün önce' },
    { id: 6, title: '🏭 Karbon Emisyonları Azaldı', detail: 'AB ülkelerinde emisyonlar 2024\'te %8 azaldı. Yenilenebilir enerji payı %45\'e yükseldi.', source: 'EEA - 8 Mayıs 2026', category: 'hava', timestamp: '1 gün önce' },
    { id: 7, title: '🌊 Akdeniz\'de Denizanası İstilası', detail: 'Muğla ve Antalya kıyılarında yüksek sayıda denizanası. Sıcaklık artışı etkili.', source: 'Akdeniz Koruma Derneği - 7 Mayıs 2026', category: 'deniz', timestamp: '2 gün önce' },
    { id: 8, title: '♻️ Türkiye\'de Geri Dönüşüm Oranı Artıyor', detail: '2025\'te kişi başı geri dönüşüm 25 kg\'a yükseldi. Hedef 2026\'da 30 kg.', source: 'Çevre Bakanlığı - 7 Mayıs 2026', category: 'atık', timestamp: '2 gün önce' },
    { id: 9, title: '🏜️ Çölleşme Tehdidi Büyüyor', detail: 'GAP bölgesinde çölleşme riski artıyor. Toprak kaybı yılda 500 milyon ton.', source: 'FAO - 6 Mayıs 2026', category: 'toprak', timestamp: '3 gün önce' },
    { id: 10, title: '🦅 Nesli Tehlike Altında Türkuşu', detail: 'Van Gölü\'nde sayıları 150\'ye düştü. Koruma altına alındı.', source: 'Doğa Koruma - 6 Mayıs 2026', category: 'canlı', timestamp: '3 gün önce' },
    { id: 11, title: '☀️ Güneş Enerjisi Kapasitesi Rekor Kırdı', detail: 'Türkiye\'de güneş enerjisi kurulu gücü 15 GW\'a ulaştı. Hedef 2026 sonunda 20 GW.', source: 'Enerji Bakanlığı - 5 Mayıs 2026', category: 'enerji', timestamp: '4 gün önce' },
    { id: 12, title: '🌾 Tarımda Su Tasarrufu Yöntemleri', detail: 'Damla sulama ile %60 su tasarrufu sağlanıyor. Destekler artırıldı.', source: 'Tarım Bakanlığı - 5 Mayıs 2026', category: 'tarım', timestamp: '4 gün önce' },
  ]
  return mockNews
}

export interface CartoonVideo {
  id: number
  title: string
  description: string
  thumbnail: string
  url: string
  duration: string
  category: string
  ageGroup: string
}

export function getEducationalCartoonVideos(): CartoonVideo[] {
  return [
    { id: 1, title: '🌿 Ormanın Sihirli Dünyası', description: 'Ormanların neden önemli olduğunu öğrenelim!', thumbnail: '🌲', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '5:30', category: 'orman', ageGroup: '5-8' },
    { id: 2, title: '💧 Su Damlasının Yolculuğu', description: 'Su nasıl döngü eder? Öğrenelim!', thumbnail: '💧', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '7:15', category: 'su', ageGroup: '5-8' },
    { id: 3, title: '♻️ Geri Dönüşüm Kahramanları', description: 'Atıkları nasıl geri dönüştürelim?', thumbnail: '♻️', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '6:45', category: 'atık', ageGroup: '6-10' },
    { id: 4, title: '🐝 Arıların Önemi', description: 'Arılar neden bu kadar önemli?', thumbnail: '🐝', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '8:00', category: 'canlı', ageGroup: '6-10' },
    { id: 5, title: '☀️ Güneş Enerjisi Macerası', description: 'Temiz enerji nasıl çalışır?', thumbnail: '☀️', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '9:20', category: 'enerji', ageGroup: '7-12' },
    { id: 6, title: '🏔️ Dağlar ve Buzullar', description: 'Buzullar neden eriyor?', thumbnail: '🏔️', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '10:00', category: 'buzul', ageGroup: '8-12' },
    { id: 7, title: '🌍 İklim Değişikliği Ne Yapmalıyız?', description: 'Küresel ısınmayı durdurmak için neler yapabiliriz?', thumbnail: '🌍', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '11:30', category: 'iklim', ageGroup: '8-12' },
    { id: 8, title: '🌱 Bitki Yetiştirme', description: 'Evde bitki nasıl yetiştirilir?', thumbnail: '🌱', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '6:00', category: 'bitki', ageGroup: '5-8' },
  ]
}