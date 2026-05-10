export const navItems = [
  { id: 1, name: 'Ana Sayfa', icon: '🏠', page: '/', path: '/' },
  { id: 2, name: 'Dünya', icon: '🌍', page: 'dunya', path: '/world' },
  { id: 3, name: 'Hava', icon: '🌤️', page: 'hava', path: '/air' },
  { id: 4, name: 'Su', icon: '💧', page: 'su', path: '/water' },
  { id: 5, name: 'Orman', icon: '🌲', page: 'orman', path: '/forest' },
  { id: 6, name: 'Buzul', icon: '🧊', page: 'buzul', path: '/ice' },
  { id: 7, name: 'Toprak', icon: '🌾', page: 'toprak', path: '/soil' },
  { id: 8, name: 'Eğitim', icon: '📚', page: 'egitim', path: '/education' },
  { id: 9, name: 'Çocuk', icon: '🧒', page: 'cocuk', path: '/kids' },
  { id: 10, name: 'Çizgi', icon: '🎬', page: 'cizgi', path: '/cartoon' },
  { id: 11, name: 'Haberler', icon: '📰', page: 'haberler', path: '/news' },
]

export const worldData = [
  { label: 'CO₂', value: '426.8 ppm', unit: 'ppm', color: '#ef4444' },
  { label: 'Küresel Isınma', value: '+1.54°C', unit: '°C', color: '#f97316' },
  { label: 'Deniz Seviyesi', value: '4.2 mm/yıl', unit: 'mm/yıl', color: '#3b82f6' },
  { label: 'Buzul Kaybı', value: '432 Gt/yıl', unit: 'Gt/yıl', color: '#06b6d4' },
]

export const turkeyData = [
  { label: 'Orman Alanı', value: '23.1M ha', unit: 'ha', color: '#22c55e' },
  { label: 'Ağaçlandırma', value: '352M', unit: 'fidan', color: '#16a34a' },
  { label: 'Baraj Kapasitesi', value: '164 milyar m³', unit: 'm³', color: '#3b82f6' },
  { label: 'Milli Park', value: '49', unit: 'adet', color: '#eab308' },
]

export const worldAir = [
  { city: 'Londra', aqi: 45, status: 'İyi' },
  { city: 'Paris', aqi: 78, status: 'Orta' },
  { city: 'Tokyo', aqi: 95, status: 'Orta' },
  { city: 'New York', aqi: 52, status: 'İyi' },
  { city: 'Pekin', aqi: 142, status: 'Hassas' },
  { city: 'Delhi', aqi: 186, status: 'Hassas' },
]

export const turkeyAir = [
  { city: 'İstanbul', aqi: 65, status: 'Orta' },
  { city: 'Ankara', aqi: 72, status: 'Orta' },
  { city: 'İzmir', aqi: 58, status: 'İyi' },
  { city: 'Antalya', aqi: 45, status: 'İyi' },
  { city: 'Bursa', aqi: 82, status: 'Orta' },
  { city: 'Adana', aqi: 91, status: 'Orta' },
]

export const worldWater = [
  { label: 'Akdeniz', value: '28°C', detail: 'Mercan resifleri tehlikede' },
  { label: 'Karadeniz', value: '24°C', detail: 'Normal seviye' },
  { label: 'Pasifik', value: '26°C', detail: 'El Niño etkisi' },
  { label: 'Atlas', value: '22°C', detail: 'Normal seviye' },
]

export const turkeyDams = [
  { name: 'Ömerli', level: 68.5, capacity: '47M m³' },
  { name: 'Çubuk', level: 42.3, capacity: '12M m³' },
  { name: 'Tahtalı', level: 55.2, capacity: '163M m³' },
  { name: 'Oymapınar', level: 78.9, capacity: '300M m³' },
]

export const worldForest = [
  { label: 'Orman Kaybı', value: '4.7M ha/yıl', warning: true },
  { label: 'Yangın', value: '340 aktif', warning: true },
  { label: 'Amazon', value: '%25 kayıp', warning: true },
  { label: 'Ağaçlandırma', value: '1.9M ha/yıl', warning: false },
]

export const turkeyForest = [
  { label: 'Orman Alanı', value: '23.1M ha', warning: false },
  { label: 'Ağaçlandırma', value: '352M fidan', warning: false },
  { label: 'Yangın', value: '2 aktif', warning: true },
  { label: 'Milli Park', value: '49 adet', warning: false },
]

export const worldIce = [
  { label: 'Isınma', value: '+1.54°C' },
  { label: 'Buzul Kaybı', value: '432 Gt' },
  { label: 'Deniz Seviyesi', value: '4.2 mm' },
  { label: 'Arktik', value: 'Eriyor' },
]

export const turkeyClimate = [
  { label: 'Sıcaklık Artışı', value: '1.8°C', trend: 'up' },
  { label: 'Kar Yağışı', value: 'Azalıyor', trend: 'down' },
  { label: 'Kuraklık', value: 'Yüksek', trend: 'up' },
  { label: 'Su Stresi', value: 'Artıyor', trend: 'up' },
]

export const worldSoil = [
  { label: 'Toprak Kaybı', value: '24M ton/yıl' },
  { label: 'Çölleşme', value: '%33 küresel' },
  { label: 'Erozyon', value: 'Kritik', warning: true },
  { label: 'Tarım', value: '4.9M km²', warning: false },
]

export const turkeySoil = [
  { label: 'Toprak Kaybı', value: '500M ton/yıl' },
  { label: 'Erozyon Alanı', value: '%64' },
  { label: 'Tarım', value: '22.3M ha' },
  { label: 'Ağaçlandırma', value: 'Devam ediyor' },
]

export const education = [
  { icon: '📖', title: 'İklim Değişikliği', desc: 'Karbon ayak izini azalt', detail: 'Güneş enerjisi kullan, geri dönüşüm yap, toplu taşıma tercih et. Küresel ısınmayı durdurmak için bireysel eylemler önemlidir.' },
  { icon: '♻️', title: 'Sıfır Atık', desc: 'Atıkları ayrıştır', detail: 'Cam, kağıt, plastik ve metal atıkları ayrı kutulara at. Kompost yaparak organik atıkları değerlendirin.' },
  { icon: '🌞', title: 'Yeşil Enerji', desc: 'Yenilenebilir enerji', detail: 'Güneş ve rüzgar enerjisi temiz ve sınırsızdır. Evinize güneş paneli kurarak karbon ayak izinizi azaltabilirsiniz.' },
  { icon: '📊', title: 'AQI Rehberi', desc: 'Hava kalitesi nedir?', detail: 'AQI 0-50 İyi, 51-100 Orta, 101-150 Hassas, 151-200 Sağlıksız, 201+ Tehlikeli. Hava kalitesini düzenli takip edin.' },
]

export const kidsActivities = [
  { icon: '🎨', title: 'Boyama', desc: 'Çevre temalı boyama sayfaları', btn: 'İndir', action: 'boyama' },
  { icon: '🔬', title: 'Deneyler', desc: 'Su döngüsü, bitki büyütme', btn: 'Dene', detail: 'Su döngüsü, bitki büyütme, filtre yapımı deneyleri ile doğayı keşfedin!' },
  { icon: '💧', title: 'Su Tasarrufu', desc: 'Su tasarrufu takibi', btn: 'Başla', detail: 'Duş sürenizi kısaltın, diş fırçalarken musluğu kapatın. Her damla değerlidir!' },
  { icon: '🐝', title: 'Arılar', desc: 'Arıların önemi', btn: 'Öğren', detail: 'Arılar çiçeklerin tozlaşmasını sağlar, besin zinciri için hayati önem taşır.' },
]

export const episodes = [
  { num: 1, title: '🌿 Ormanın Kalbi', desc: 'Ormanlar neden önemli?', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
  { num: 2, title: '♻️ Plastik Canavarı', desc: 'Plastik kirliliği', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
  { num: 3, title: '💧 Su Damlası', desc: 'Su tasarrufu', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
  { num: 4, title: '🐝 Arı Maya', desc: 'Arılar ve doğa', url: 'https://www.youtube.com/embed/6xG5Tm6kH3Y' },
]

export const newsList = [
  { id: 1, title: '🌍 Ozon Deliği Küçülüyor', detail: 'NASA: Montreal Protokolü sayesinde ozon tabakası her yıl iyileşiyor. 2066\'da tamamen kapanması bekleniyor.', source: 'NASA - 9 Mayıs 2025' },
  { id: 2, title: '🇹🇷 Ağaçlandırma Rekoru', detail: 'Tarım Bakanlığı: 2024\'te 352 milyon fidan dikildi. 2025 hedefi 500 milyon fidan.', source: 'Tarım Bakanlığı - 8 Mayıs 2025' },
  { id: 3, title: '🌊 Akdeniz Isınıyor', detail: 'Copernicus: Deniz suyu sıcaklığı 28°C\'yi aştı. Mercan resifleri tehlikede.', source: 'Copernicus - 7 Mayıs 2025' },
  { id: 4, title: '🔥 Amazon Yangınları Azaldı', detail: 'Brezilya: Koruma önlemleriyle yangınlar %45 azaldı.', source: 'INPE - 6 Mayıs 2025' },
  { id: 5, title: '♻️ AB Sıfır Atık Hedefi', detail: 'Avrupa Birliği 2030\'a kadar atık üretimini %50 azaltma hedefi koydu.', source: 'EC - 5 Mayıs 2025' },
  { id: 6, title: '🌱 Türkiye Rüzgar Enerjisi', detail: 'Enerji Bakanlığı: Rüzgar santrali kapasitesi 12 GW\'a ulaştı.', source: 'ETKB - 4 Mayıs 2025' },
]

export const gameItems = [
  { emoji: '🥤', name: 'Plastik Şişe', type: 'plastic' },
  { emoji: '📰', name: 'Gazete', type: 'paper' },
  { emoji: '🍾', name: 'Cam Şişe', type: 'glass' },
  { emoji: '🥫', name: 'Konserve', type: 'metal' },
  { emoji: '🍌', name: 'Muz Kabuğu', type: 'organic' },
]

export const gameBins = [
  { icon: '♻️', name: 'Plastik', type: 'plastic', color: '#f59e0b' },
  { icon: '📄', name: 'Kağıt', type: 'paper', color: '#3b82f6' },
  { icon: '🥤', name: 'Cam', type: 'glass', color: '#10b981' },
  { icon: '🔩', name: 'Metal', type: 'metal', color: '#ef4444' },
  { icon: '🌱', name: 'Organik', type: 'organic', color: '#22c55e' },
]

export const cityData: Record<string, { aqi: number; temp: number; wind: number; ozone: number; fire: number; sea: number; co2: number; ice: number; humidity: number; pressure: number }> = {
  'İstanbul': { aqi: 65, temp: 22, wind: 18, ozone: 310, fire: 0, sea: 20, co2: 426, ice: 432, humidity: 72, pressure: 1013 },
  'Ankara': { aqi: 72, temp: 19, wind: 22, ozone: 295, fire: 1, sea: 0, co2: 426, ice: 432, humidity: 45, pressure: 1015 },
  'İzmir': { aqi: 58, temp: 26, wind: 14, ozone: 305, fire: 0, sea: 23, co2: 426, ice: 432, humidity: 65, pressure: 1012 },
  'Antalya': { aqi: 45, temp: 30, wind: 10, ozone: 315, fire: 0, sea: 27, co2: 426, ice: 432, humidity: 55, pressure: 1011 },
  'Bursa': { aqi: 82, temp: 21, wind: 12, ozone: 290, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 68, pressure: 1014 },
  'Adana': { aqi: 91, temp: 32, wind: 15, ozone: 300, fire: 1, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1010 },
  'Konya': { aqi: 55, temp: 18, wind: 20, ozone: 280, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 35, pressure: 1016 },
  'Gaziantep': { aqi: 78, temp: 25, wind: 16, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 42, pressure: 1013 },
  'Kayseri': { aqi: 62, temp: 17, wind: 14, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1015 },
  'Eskişehir': { aqi: 58, temp: 16, wind: 18, ozone: 290, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1014 },
  'Samsun': { aqi: 48, temp: 20, wind: 12, ozone: 295, fire: 0, sea: 22, co2: 426, ice: 432, humidity: 75, pressure: 1012 },
  'Trabzon': { aqi: 42, temp: 21, wind: 10, ozone: 300, fire: 0, sea: 24, co2: 426, ice: 432, humidity: 78, pressure: 1011 },
  'Erzurum': { aqi: 35, temp: 8, wind: 16, ozone: 275, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1017 },
  'Mersin': { aqi: 52, temp: 28, wind: 12, ozone: 305, fire: 0, sea: 25, co2: 426, ice: 432, humidity: 62, pressure: 1011 },
  'Diyarbakır': { aqi: 85, temp: 24, wind: 14, ozone: 295, fire: 1, sea: 0, co2: 426, ice: 432, humidity: 38, pressure: 1014 },
  'Elazığ': { aqi: 68, temp: 19, wind: 12, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 50, pressure: 1015 },
  'Malatya': { aqi: 72, temp: 20, wind: 10, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 45, pressure: 1015 },
  'Sivas': { aqi: 55, temp: 12, wind: 15, ozone: 280, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 52, pressure: 1016 },
  'Manisa': { aqi: 65, temp: 24, wind: 12, ozone: 300, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 58, pressure: 1013 },
  'Kahramanmaraş': { aqi: 75, temp: 23, wind: 14, ozone: 292, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1014 },
  'Şanlıurfa': { aqi: 88, temp: 27, wind: 18, ozone: 298, fire: 2, sea: 0, co2: 426, ice: 432, humidity: 32, pressure: 1013 },
  'Mardin': { aqi: 80, temp: 22, wind: 12, ozone: 290, fire: 1, sea: 0, co2: 426, ice: 432, humidity: 40, pressure: 1014 },
  'Van': { aqi: 45, temp: 10, wind: 14, ozone: 278, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1016 },
  'Ağrı': { aqi: 38, temp: 5, wind: 12, ozone: 270, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1017 },
  'Çorum': { aqi: 52, temp: 14, wind: 10, ozone: 282, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 58, pressure: 1015 },
  'Hatay': { aqi: 78, temp: 26, wind: 14, ozone: 302, fire: 0, sea: 24, co2: 426, ice: 432, humidity: 65, pressure: 1012 },
  'Kocaeli': { aqi: 82, temp: 23, wind: 16, ozone: 305, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 70, pressure: 1013 },
  'Sakarya': { aqi: 68, temp: 21, wind: 14, ozone: 298, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 72, pressure: 1013 },
  'Tekirdağ': { aqi: 55, temp: 18, wind: 20, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1014 },
  'Balıkesir': { aqi: 58, temp: 20, wind: 14, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1013 },
  'Aydın': { aqi: 62, temp: 25, wind: 12, ozone: 308, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1012 },
  'Muğla': { aqi: 48, temp: 24, wind: 10, ozone: 312, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 58, pressure: 1011 },
  'Denizli': { aqi: 65, temp: 22, wind: 12, ozone: 300, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 50, pressure: 1013 },
  'Afyon': { aqi: 52, temp: 15, wind: 12, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 52, pressure: 1014 },
  'Uşak': { aqi: 55, temp: 17, wind: 10, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1014 },
  'Kütahya': { aqi: 58, temp: 14, wind: 12, ozone: 282, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1014 },
  'Bilecik': { aqi: 52, temp: 16, wind: 10, ozone: 290, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1014 },
  'Düzce': { aqi: 55, temp: 19, wind: 12, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 75, pressure: 1013 },
  'Bolu': { aqi: 45, temp: 14, wind: 10, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 72, pressure: 1014 },
  'Yalova': { aqi: 58, temp: 20, wind: 12, ozone: 300, fire: 0, sea: 22, co2: 426, ice: 432, humidity: 75, pressure: 1012 },
  'Karabük': { aqi: 42, temp: 16, wind: 8, ozone: 290, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1014 },
  'Bartın': { aqi: 38, temp: 17, wind: 10, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 72, pressure: 1013 },
  'Zonguldak': { aqi: 45, temp: 18, wind: 14, ozone: 298, fire: 0, sea: 22, co2: 426, ice: 432, humidity: 78, pressure: 1012 },
  'Karaman': { aqi: 52, temp: 16, wind: 14, ozone: 282, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 42, pressure: 1015 },
  'Aksaray': { aqi: 58, temp: 17, wind: 12, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 45, pressure: 1015 },
  'Niğde': { aqi: 55, temp: 14, wind: 12, ozone: 280, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1015 },
  'Nevşehir': { aqi: 52, temp: 15, wind: 10, ozone: 282, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 50, pressure: 1015 },
  'Kırşehir': { aqi: 55, temp: 16, wind: 12, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 52, pressure: 1015 },
  'Kırıkkale': { aqi: 58, temp: 17, wind: 14, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1015 },
  'Çankırı': { aqi: 48, temp: 12, wind: 12, ozone: 280, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1015 },
  'Kastamonu': { aqi: 35, temp: 13, wind: 8, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 72, pressure: 1014 },
  'Sinop': { aqi: 38, temp: 17, wind: 12, ozone: 295, fire: 0, sea: 22, co2: 426, ice: 432, humidity: 75, pressure: 1012 },
  'Amasya': { aqi: 45, temp: 16, wind: 10, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1014 },
  'Tokat': { aqi: 48, temp: 15, wind: 10, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 62, pressure: 1014 },
  'Ordu': { aqi: 42, temp: 18, wind: 10, ozone: 298, fire: 0, sea: 23, co2: 426, ice: 432, humidity: 75, pressure: 1012 },
  'Giresun': { aqi: 40, temp: 19, wind: 8, ozone: 300, fire: 0, sea: 24, co2: 426, ice: 432, humidity: 78, pressure: 1011 },
  'Rize': { aqi: 35, temp: 20, wind: 8, ozone: 305, fire: 0, sea: 24, co2: 426, ice: 432, humidity: 80, pressure: 1011 },
  'Artvin': { aqi: 32, temp: 18, wind: 6, ozone: 302, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 75, pressure: 1013 },
  'Gümüşhane': { aqi: 38, temp: 12, wind: 8, ozone: 282, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1015 },
  'Bayburt': { aqi: 35, temp: 8, wind: 10, ozone: 275, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 58, pressure: 1016 },
  'Tunceli': { aqi: 42, temp: 14, wind: 8, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1015 },
  'Bingöl': { aqi: 52, temp: 16, wind: 10, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 52, pressure: 1015 },
  'Muş': { aqi: 48, temp: 10, wind: 12, ozone: 275, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 60, pressure: 1016 },
  'Bitlis': { aqi: 45, temp: 12, wind: 10, ozone: 278, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 58, pressure: 1016 },
  'Hakkari': { aqi: 38, temp: 8, wind: 12, ozone: 270, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1017 },
  'Şırnak': { aqi: 55, temp: 18, wind: 14, ozone: 285, fire: 1, sea: 0, co2: 426, ice: 432, humidity: 45, pressure: 1015 },
  'Siirt': { aqi: 58, temp: 20, wind: 10, ozone: 288, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1014 },
  'Batman': { aqi: 68, temp: 22, wind: 12, ozone: 292, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 42, pressure: 1014 },
  'Kilis': { aqi: 72, temp: 24, wind: 14, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 40, pressure: 1013 },
  'Iğdır': { aqi: 42, temp: 16, wind: 10, ozone: 285, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1015 },
  'Yozgat': { aqi: 52, temp: 13, wind: 12, ozone: 280, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 55, pressure: 1015 },
  'Kırklareli': { aqi: 48, temp: 16, wind: 16, ozone: 292, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 68, pressure: 1014 },
  'Edirne': { aqi: 52, temp: 17, wind: 18, ozone: 295, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 65, pressure: 1014 },
  'Çanakkale': { aqi: 45, temp: 18, wind: 16, ozone: 300, fire: 0, sea: 22, co2: 426, ice: 432, humidity: 70, pressure: 1012 },
  'Burdur': { aqi: 52, temp: 20, wind: 12, ozone: 305, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 48, pressure: 1013 },
  'Isparta': { aqi: 55, temp: 18, wind: 14, ozone: 298, fire: 0, sea: 0, co2: 426, ice: 432, humidity: 52, pressure: 1014 },
}

export const damByCity: Record<string, { name: string; level: number; capacity: string; type: string }> = {
  'İstanbul': { name: 'Ömerli Barajı', level: 68.5, capacity: '47M m³', type: 'içme suyu' },
  'Ankara': { name: 'Çubuk Barajı', level: 42.3, capacity: '12M m³', type: 'içme suyu' },
  'İzmir': { name: 'Tahtalı Barajı', level: 55.2, capacity: '163M m³', type: 'içme suyu' },
  'Antalya': { name: 'Oymapınar Barajı', level: 78.9, capacity: '300M m³', type: 'hidroelektrik' },
  'Bursa': { name: 'Ulubat Barajı', level: 62.4, capacity: '35M m³', type: 'sulama' },
  'Adana': { name: 'Seyhan Barajı', level: 85.2, capacity: '578M m³', type: 'hidroelektrik' },
  'Konya': { name: 'Altınapa Barajı', level: 45.8, capacity: '15M m³', type: 'sulama' },
  'Gaziantep': { name: 'Karkamış Barajı', level: 52.3, capacity: '169M m³', type: 'hidroelektrik' },
  'Kayseri': { name: 'Yamula Barajı', level: 48.7, capacity: '137M m³', type: 'hidroelektrik' },
  'Samsun': { name: 'Altınkaya Barajı', level: 71.2, capacity: '51M m³', type: 'sulama' },
  'Trabzon': { name: 'Çoruh Barajı', level: 58.5, capacity: '93M m³', type: 'hidroelektrik' },
  'Erzurum': { name: 'Kargı Barajı', level: 38.2, capacity: '28M m³', type: 'sulama' },
  'Mersin': { name: 'Aslantaş Barajı', level: 65.8, capacity: '114M m³', type: 'hidroelektrik' },
  'Diyarbakır': { name: 'Kralkızı Barajı', level: 55.4, capacity: '55M m³', type: 'hidroelektrik' },
  'Elazığ': { name: 'Karaçalı Barajı', level: 72.3, capacity: '95M m³', type: 'içme suyu' },
  'Malatya': { name: 'Atatürk Barajı', level: 88.5, capacity: '8.48B m³', type: 'hidroelektrik' },
  'Sivas': { name: 'Hafik Barajı', level: 35.6, capacity: '22M m³', type: 'sulama' },
  'Manisa': { name: 'Gördes Barajı', level: 48.2, capacity: '35M m³', type: 'içme suyu' },
  'Kahramanmaraş': { name: 'Çatalca Barajı', level: 62.8, capacity: '48M m³', type: 'sulama' },
  'Şanlıurfa': { name: 'Birecik Barajı', level: 78.4, capacity: '120M m³', type: 'hidroelektrik' },
  'Mardin': { name: 'Dicle Barajı', level: 68.9, capacity: '213M m³', type: 'hidroelektrik' },
  'Van': { name: 'Van Barajı', level: 42.5, capacity: '65M m³', type: 'içme suyu' },
  'Kocaeli': { name: 'Sapanca Barajı', level: 58.3, capacity: '38M m³', type: 'içme suyu' },
  'Sakarya': { name: 'Gölpazarı Barajı', level: 45.7, capacity: '25M m³', type: 'hidroelektrik' },
  'Tekirdağ': { name: 'Sarıyar Barajı', level: 52.1, capacity: '180M m³', type: 'hidroelektrik' },
  'Balıkesir': { name: 'Manyas Barajı', level: 48.9, capacity: '32M m³', type: 'sulama' },
  'Aydın': { name: 'Bafa Barajı', level: 35.2, capacity: '37M m³', type: 'sulama' },
  'Muğla': { name: 'Geyik Barajı', level: 55.8, capacity: '43M m³', type: 'içme suyu' },
  'Denizli': { name: 'Kaleköy Barajı', level: 62.4, capacity: '85M m³', type: 'hidroelektrik' },
  'Zonguldak': { name: 'Karaca Barajı', level: 68.5, capacity: '28M m³', type: 'içme suyu' },
}

export const turkeyLakes = [
  { name: 'Van Gölü', level: 75.2, area: '3.713 km²', depth: '451m', type: 'tuzlu' },
  { name: 'Tuz Gölü', level: 45.8, area: '1.500 km²', depth: '2m', type: 'tuzlu' },
  { name: 'Beyşehir Gölü', level: 62.3, area: '650 km²', depth: '10m', type: 'tatlı' },
  { name: 'Eğirdir Gölü', level: 55.4, area: '473 km²', depth: '14m', type: 'tatlı' },
  { name: 'Köyceğiz Gölü', level: 68.2, area: '52 km²', depth: '7m', type: 'tatlı' },
  { name: 'Sapanca Gölü', level: 72.5, area: '47 km²', depth: '35m', type: 'tatlı' },
  { name: 'Iznik Gölü', level: 58.7, area: '298 km²', depth: '8m', type: 'tatlı' },
  { name: 'Manyas Gölü', level: 48.3, area: '166 km²', depth: '6m', type: 'tatlı' },
]

export const turkeyRivers = [
  { name: 'Fırat', length: '2.833 km', flow: '351 m³/s', status: 'normal' },
  { name: 'Dicle', length: '1.850 km', flow: '400 m³/s', status: 'düşük' },
  { name: 'Kızılırmak', length: '1.355 km', flow: '230 m³/s', status: 'normal' },
  { name: 'Sakarya', length: '824 km', flow: '180 m³/s', status: 'normal' },
  { name: 'Büyük Menderes', length: '548 km', flow: '120 m³/s', status: 'kritik' },
  { name: 'Aras', length: '1.072 km', flow: '85 m³/s', status: 'düşük' },
  { name: 'Yeşilırmak', length: '519 km', flow: '150 m³/s', status: 'normal' },
  { name: 'Çoruh', length: '442 km', flow: '170 m³/s', status: 'normal' },
]
