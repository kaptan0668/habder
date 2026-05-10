import { createContext, useContext, ReactNode } from 'react'

export interface CityData {
  aqi: number
  temp: number
  wind: number
  ozone: number
  fire: number
  sea: number
  co2: number
  ice: number
}

export interface DataItem {
  label: string
  value: string
  unit?: string
  color?: string
  detail?: string
  warning?: boolean
}

export interface AirItem {
  city: string
  aqi: number
  status: string
}

export interface DamItem {
  name: string
  level: number
  capacity: string
}

export interface ActivityItem {
  icon: string
  title: string
  desc: string
  detail?: string
  btn?: string
  action?: string
}

export interface EpisodeItem {
  num: number
  title: string
  desc: string
  url: string
}

export interface NewsItem {
  id: number
  title: string
  detail: string
  source: string
}

export interface GameItem {
  emoji: string
  name: string
  type: string
}

export interface GameBin {
  icon: string
  name: string
  type: string
  color: string
}

interface DataContextType {
  worldData: DataItem[]
  turkeyData: DataItem[]
  worldAir: AirItem[]
  turkeyAir: AirItem[]
  worldWater: DataItem[]
  turkeyDams: DamItem[]
  worldForest: DataItem[]
  turkeyForest: DataItem[]
  worldIce: DataItem[]
  turkeyClimate: DataItem[]
  worldSoil: DataItem[]
  turkeySoil: DataItem[]
  education: ActivityItem[]
  kidsActivities: ActivityItem[]
  episodes: EpisodeItem[]
  newsList: NewsItem[]
  gameItems: GameItem[]
  gameBins: GameBin[]
  cityData: Record<string, CityData>
  damByCity: Record<string, { name: string; level: number }>
  getAQIColor: (aqi: number) => string
  getAQISTatus: (aqi: number) => string
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const worldData: DataItem[] = [
    { label: 'CO₂', value: '426.8 ppm', unit: 'ppm', color: '#ef4444' },
    { label: 'Küresel Isınma', value: '+1.54°C', unit: '°C', color: '#f97316' },
    { label: 'Deniz Seviyesi', value: '4.2 mm/yıl', unit: 'mm/yıl', color: '#3b82f6' },
    { label: 'Buzul Kaybı', value: '432 Gt/yıl', unit: 'Gt/yıl', color: '#06b6d4' },
  ]

  const turkeyData: DataItem[] = [
    { label: 'Orman Alanı', value: '23.1M ha', unit: 'ha', color: '#22c55e' },
    { label: 'Ağaçlandırma', value: '352M', unit: 'fidan', color: '#16a34a' },
    { label: 'Baraj Kapasitesi', value: '164 milyar m³', unit: 'm³', color: '#3b82f6' },
    { label: 'Milli Park', value: '49', unit: 'adet', color: '#eab308' },
  ]

  const worldAir: AirItem[] = [
    { city: 'Londra', aqi: 45, status: 'İyi' },
    { city: 'Paris', aqi: 78, status: 'Orta' },
    { city: 'Tokyo', aqi: 95, status: 'Orta' },
    { city: 'New York', aqi: 52, status: 'İyi' },
    { city: 'Pekin', aqi: 142, status: 'Hassas' },
    { city: 'Delhi', aqi: 186, status: 'Hassas' },
  ]

  const turkeyAir: AirItem[] = [
    { city: 'İstanbul', aqi: 65, status: 'Orta' },
    { city: 'Ankara', aqi: 72, status: 'Orta' },
    { city: 'İzmir', aqi: 58, status: 'İyi' },
    { city: 'Antalya', aqi: 45, status: 'İyi' },
    { city: 'Bursa', aqi: 82, status: 'Orta' },
    { city: 'Adana', aqi: 91, status: 'Orta' },
  ]

  const worldWater: DataItem[] = [
    { label: 'Akdeniz', value: '28°C', detail: 'Mercan resifleri tehlikede' },
    { label: 'Karadeniz', value: '24°C', detail: 'Normal seviye' },
    { label: 'Pasifik', value: '26°C', detail: 'El Niño etkisi' },
    { label: 'Atlas', value: '22°C', detail: 'Normal seviye' },
  ]

  const turkeyDams: DamItem[] = [
    { name: 'Ömerli', level: 68.5, capacity: '47M m³' },
    { name: 'Çubuk', level: 42.3, capacity: '12M m³' },
    { name: 'Tahtalı', level: 55.2, capacity: '163M m³' },
    { name: 'Oymapınar', level: 78.9, capacity: '300M m³' },
  ]

  const worldForest: DataItem[] = [
    { label: 'Orman Kaybı', value: '4.7M ha/yıl', warning: true },
    { label: 'Yangın', value: '340 aktif', warning: true },
    { label: 'Amazon', value: '%25 kayıp', warning: true },
    { label: 'Ağaçlandırma', value: '1.9M ha/yıl', warning: false },
  ]

  const turkeyForest: DataItem[] = [
    { label: 'Orman Alanı', value: '23.1M ha', warning: false },
    { label: 'Ağaçlandırma', value: '352M fidan', warning: false },
    { label: 'Yangın', value: '2 aktif', warning: true },
    { label: 'Milli Park', value: '49 adet', warning: false },
  ]

  const worldIce: DataItem[] = [
    { label: 'Isınma', value: '+1.54°C' },
    { label: 'Buzul Kaybı', value: '432 Gt' },
    { label: 'Deniz Seviyesi', value: '4.2 mm' },
    { label: 'Arktik', value: 'Eriyor' },
  ]

  const turkeyClimate: DataItem[] = [
    { label: 'Sıcaklık Artışı', value: '1.8°C' },
    { label: 'Kar Yağışı', value: 'Azalıyor' },
    { label: 'Kuraklık', value: 'Yüksek' },
    { label: 'Su Stresi', value: 'Artıyor' },
  ]

  const worldSoil: DataItem[] = [
    { label: 'Toprak Kaybı', value: '24M ton/yıl' },
    { label: 'Çölleşme', value: '%33 küresel' },
    { label: 'Erozyon', value: 'Kritik', warning: true },
    { label: 'Tarım', value: '4.9M km²', warning: false },
  ]

  const turkeySoil: DataItem[] = [
    { label: 'Toprak Kaybı', value: '500M ton/yıl' },
    { label: 'Erozyon Alanı', value: '%64' },
    { label: 'Tarım', value: '22.3M ha' },
    { label: 'Ağaçlandırma', value: 'Devam ediyor' },
  ]

  const education: ActivityItem[] = [
    { icon: '📖', title: 'İklim Değişikliği', desc: 'Karbon ayak izini azalt', detail: 'Güneş enerjisi kullan, geri dönüşüm yap, toplu taşıma tercih et. Küresel ısınmayı durdurmak için bireysel eylemler önemlidir.' },
    { icon: '♻️', title: 'Sıfır Atık', desc: 'Atıkları ayrıştır', detail: 'Cam, kağıt, plastik ve metal atıkları ayrı kutulara at. Kompost yaparak organik atıkları değerlendirin.' },
    { icon: '🌞', title: 'Yeşil Enerji', desc: 'Yenilenebilir enerji', detail: 'Güneş ve rüzgar enerjisi temiz ve sınırsızdır. Evinize güneş paneli kurarak karbon ayak izinizi azaltabilirsiniz.' },
    { icon: '📊', title: 'AQI Rehberi', desc: 'Hava kalitesi nedir?', detail: 'AQI 0-50 İyi, 51-100 Orta, 101-150 Hassas, 151-200 Sağlıksız, 201+ Tehlikeli. Hava kalitesini düzenli takip edin.' },
  ]

  const kidsActivities: ActivityItem[] = [
    { icon: '🎨', title: 'Boyama', desc: 'Çevre temalı boyama sayfaları', btn: 'İndir', action: 'boyama' },
    { icon: '🔬', title: 'Deneyler', desc: 'Su döngüsü, bitki büyütme', btn: 'Dene', detail: 'Su döngüsü, bitki büyütme, filtre yapımı deneyleri ile doğayı keşfedin!' },
    { icon: '💧', title: 'Su Tasarrufu', desc: 'Su tasarrufu takibi', btn: 'Başla', detail: 'Duş sürenizi kısaltın, diş fırçalarken musluğu kapatın. Her damla değerlidir!' },
    { icon: '🐝', title: 'Arılar', desc: 'Arıların önemi', btn: 'Öğren', detail: 'Arılar çiçeklerin tozlaşmasını sağlar, besin zinciri için hayati önem taşır.' },
  ]

  const episodes: EpisodeItem[] = [
    { num: 1, title: '🌿 Ormanın Kalbi', desc: 'Ormanlar neden önemli?', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
    { num: 2, title: '♻️ Plastik Canavarı', desc: 'Plastik kirliliği', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
    { num: 3, title: '💧 Su Damlası', desc: 'Su tasarrufu', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
    { num: 4, title: '🐝 Arı Maya', desc: 'Arılar ve doğa', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
  ]

  const newsList: NewsItem[] = [
    { id: 1, title: '🌍 Ozon Deliği Küçülüyor', detail: 'NASA: Montreal Protokolü sayesinde ozon tabakası her yıl iyileşiyor. 2066\'da tamamen kapanması bekleniyor.', source: 'NASA - 9 Mayıs 2025' },
    { id: 2, title: '🇹🇷 Ağaçlandırma Rekoru', detail: 'Tarım Bakanlığı: 2024\'te 352 milyon fidan dikildi. 2025 hedefi 500 milyon fidan.', source: 'Tarım Bakanlığı - 8 Mayıs 2025' },
    { id: 3, title: '🌊 Akdeniz Isınıyor', detail: 'Copernicus: Deniz suyu sıcaklığı 28°C\'yi aştı. Mercan resifleri tehlikede.', source: 'Copernicus - 7 Mayıs 2025' },
    { id: 4, title: '🔥 Amazon Yangınları Azaldı', detail: 'Brezilya: Koruma önlemleriyle yangınlar %45 azaldı.', source: 'INPE - 6 Mayıs 2025' },
    { id: 5, title: '♻️ AB Sıfır Atık Hedefi', detail: 'Avrupa Birliği 2030\'a kadar atık üretimini %50 azaltma hedefi koydu.', source: 'EC - 5 Mayıs 2025' },
    { id: 6, title: '🌱 Türkiye Rüzgar Enerjisi', detail: 'Enerji Bakanlığı: Rüzgar santrali kapasitesi 12 GW\'a ulaştı.', source: 'ETKB - 4 Mayıs 2025' },
  ]

  const gameItems: GameItem[] = [
    { emoji: '🥤', name: 'Plastik Şişe', type: 'plastic' },
    { emoji: '📰', name: 'Gazete', type: 'paper' },
    { emoji: '🍾', name: 'Cam Şişe', type: 'glass' },
    { emoji: '🥫', name: 'Konserve', type: 'metal' },
    { emoji: '🍌', name: 'Muz Kabuğu', type: 'organic' },
  ]

  const gameBins: GameBin[] = [
    { icon: '♻️', name: 'Plastik', type: 'plastic', color: '#f59e0b' },
    { icon: '📄', name: 'Kağıt', type: 'paper', color: '#3b82f6' },
    { icon: '🥤', name: 'Cam', type: 'glass', color: '#10b981' },
    { icon: '🔩', name: 'Metal', type: 'metal', color: '#ef4444' },
    { icon: '🌱', name: 'Organik', type: 'organic', color: '#22c55e' },
  ]

  const cityData: Record<string, CityData> = {
    'İstanbul': { aqi: 65, temp: 22, wind: 18, ozone: 310, fire: 0, sea: 20, co2: 426, ice: 432 },
    'Ankara': { aqi: 72, temp: 19, wind: 22, ozone: 295, fire: 1, sea: 0, co2: 426, ice: 432 },
    'İzmir': { aqi: 58, temp: 26, wind: 14, ozone: 305, fire: 0, sea: 23, co2: 426, ice: 432 },
    'Antalya': { aqi: 45, temp: 30, wind: 10, ozone: 315, fire: 0, sea: 27, co2: 426, ice: 432 },
    'Bursa': { aqi: 82, temp: 21, wind: 12, ozone: 290, fire: 0, sea: 0, co2: 426, ice: 432 },
    'Adana': { aqi: 91, temp: 32, wind: 15, ozone: 300, fire: 1, sea: 0, co2: 426, ice: 432 },
  }

  const damByCity: Record<string, { name: string; level: number }> = {
    'İstanbul': { name: 'Ömerli Barajı', level: 68.5 },
    'Ankara': { name: 'Çubuk Barajı', level: 42.3 },
    'İzmir': { name: 'Tahtalı Barajı', level: 55.2 },
    'Antalya': { name: 'Oymapınar Barajı', level: 78.9 },
  }

  const getAQIColor = (aqi: number): string => {
    if (aqi <= 50) return '#22c55e'
    if (aqi <= 100) return '#eab308'
    if (aqi <= 150) return '#f97316'
    if (aqi <= 200) return '#ef4444'
    return '#dc2626'
  }

  const getAQISTatus = (aqi: number): string => {
    if (aqi <= 50) return 'İyi'
    if (aqi <= 100) return 'Orta'
    if (aqi <= 150) return 'Hassas'
    if (aqi <= 200) return 'Sağlıksız'
    return 'Tehlikeli'
  }

  return (
    <DataContext.Provider value={{
      worldData,
      turkeyData,
      worldAir,
      turkeyAir,
      worldWater,
      turkeyDams,
      worldForest,
      turkeyForest,
      worldIce,
      turkeyClimate,
      worldSoil,
      turkeySoil,
      education,
      kidsActivities,
      episodes,
      newsList,
      gameItems,
      gameBins,
      cityData,
      damByCity,
      getAQIColor,
      getAQISTatus,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}