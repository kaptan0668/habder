import { getAirQualityStatus, getTurkeyDams, getAllTurkeyCities, getLakesAndRivers, fetchEnvironmentalNews, getForestData } from './api'

interface ChatMessage {
  from: 'bot' | 'user'
  text: string
  timestamp?: string
}

interface CarbonFootprintInput {
  carKm?: number
  flightHours?: number
  electricityKwh?: number
  meatMeals?: number
}

function calculateCarbonFootprint(input: CarbonFootprintInput): { total: number; breakdown: { category: string; value: number; unit: string }[]; tips: string[] } {
  const emissions = {
    car: (input.carKm || 0) * 0.21,
    flight: (input.flightHours || 0) * 90,
    electricity: (input.electricityKwh || 0) * 0.5,
    meat: (input.meatMeals || 0) * 3.3,
  }
  
  const total = emissions.car + emissions.flight + emissions.electricity + emissions.meat
  
  const breakdown = [
    { category: 'Araba', value: emissions.car, unit: 'kg CO₂/ay' },
    { category: 'Uçak', value: emissions.flight, unit: 'kg CO₂/ay' },
    { category: 'Elektrik', value: emissions.electricity, unit: 'kg CO₂/ay' },
    { category: 'Et Tüketimi', value: emissions.meat, unit: 'kg CO₂/ay' },
  ].filter(b => b.value > 0)
  
  const tips: string[] = []
  if (emissions.car > 50) tips.push('🚗 Araba kullanımını azaltın. Bisiklet veya toplu taşıma kullanın.')
  if (emissions.flight > 20) tips.push('✈️ Uçak seyahatini sınırlandırın. Mümkünse tren tercih edin.')
  if (emissions.electricity > 30) tips.push('💡 Enerji tasarruflu ampuller kullanın ve gereksiz ışıkları kapatın.')
  if (emissions.meat > 10) tips.push('🥗 Haftada bir vejetaryen yemekler tercih edin.')
  if (tips.length === 0) tips.push('🌟 Harika! Karbon ayak iziniz düşük. Çevre dostu yaşamaya devam edin!')
  
  return { total, breakdown, tips }
}

function extractNumbers(text: string): number[] {
  const numbers = text.match(/\d+/g)
  return numbers ? numbers.map(n => parseInt(n)) : []
}

function extractCity(text: string): string | null {
  const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Konya', 'Gaziantep', 
    'Kayseri', 'Eskişehir', 'Samsun', 'Trabzon', 'Erzurum', 'Mersin', 'Diyarbakır',
    'Van', 'Malatya', 'Sivas', 'Manisa', 'Kahramanmaraş', 'Şanlıurfa', 'Mardin'
  ]
  for (const city of cities) {
    if (text.includes(city)) return city
  }
  return null
}

function generateResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase()
  const numbers = extractNumbers(userMessage)
  const city = extractCity(userMessage)
  
  if (lower.includes('karbon') || lower.includes('ayak izi') || lower.includes('co2') || lower.includes('emisyon')) {
    if (numbers.length > 0 || lower.includes('hesapla') || lower.includes('kaç')) {
      const carKm = lower.includes('araba') || lower.includes('araç') || lower.includes('otomobil') ? numbers[0] || 100 : undefined
      const flightHours = lower.includes('uçak') || lower.includes('uçuş') ? numbers[0] || 2 : undefined
      const electricityKwh = lower.includes('elektrik') || lower.includes('elektrikli') ? numbers[0] || 200 : undefined
      const meatMeals = lower.includes('et') || lower.includes('kırmızı') || lower.includes('tavuk') ? numbers[0] || 10 : undefined
      
      const result = calculateCarbonFootprint({ carKm, flightHours, electricityKwh, meatMeals })
      
      let response = `🌱 Karbon Ayak İzi Hesaplaması:\n\n`
      response += `📊 Aylık Toplam: ${result.total.toFixed(1)} kg CO₂\n\n`
      response += `📈 Dağılım:\n`
      result.breakdown.forEach(b => {
        response += `- ${b.category}: ${b.value.toFixed(1)} ${b.unit}\n`
      })
      response += `\n💡 Öneriler:\n`
      result.tips.forEach(t => response += `${t}\n`)
      
      return response
    }
    return `🌍 Karbon ayak izi hesaplamak için bana şu bilgileri verebilirsin:\n\n• Günlük araba kullandığınız km (örneğin "günde 20 km araba kullanıyorum karbon hesapla")\n• Ayda kaç uçak yolculuğu yaptığınız\n• Aylık elektrik tüketiminiz (kWh)\n• Haftalık et tüketimi (öğün)\n\nSize özel bir hesaplama yapayım!`
  }
  
  if (lower.includes('baraj') || lower.includes('baraj doluluk') || lower.includes('su seviye')) {
    const dams = getTurkeyDams()
    let response = `💧 Türkiye Baraj Doluluk Oranları:\n\n`
    dams.slice(0, 10).forEach(d => {
      const status = d.level > 70 ? '✅' : d.level > 40 ? '⚠️' : '❌'
      response += `${status} ${d.name} (%${d.level}) - ${d.type}\n`
    })
    response += `\nKaynak: DSİ (2026 verileri)`
    return response
  }
  
  if (city && (lower.includes('hava') || lower.includes('aqi') || lower.includes('hava kalite') || lower.includes('ne zaman'))) {
    const cities = getAllTurkeyCities()
    const cityData = cities.find(c => c.name === city)
    if (cityData) {
      const aqi = cityData.data.aqi
      const status = getAirQualityStatus(aqi)
      return `🌤️ ${city} Hava Kalitesi:\n\n• AQI: ${aqi} (${status.status})\n• Sıcaklık: ${cityData.data.temp}°C\n• Nem: %${cityData.data.humidity}\n• Rüzgar: ${cityData.data.wind} km/s\n\n💡 ${status.advice}`
    }
  }
  
  if (lower.includes('şehir') || lower.includes('il') || lower.includes('il hava') || lower.includes('türkiye şehir')) {
    const cities = getAllTurkeyCities()
    let response = `🌡️ Türkiye İl Hava Kalitesi:\n\n`
    cities.slice(0, 15).forEach(c => {
      const status = getAirQualityStatus(c.data.aqi)
      response += `• ${c.name}: AQI ${c.data.aqi} (${status.status})\n`
    })
    return response + '\n⏬ Daha fazla şehir için sayfayı inceleyebilirsiniz.'
  }
  
  if (lower.includes('göl') || lower.includes('nehir') || lower.includes('deniz')) {
    const { lakes, rivers } = getLakesAndRivers()
    let response = `🌊 Türkiye Su Kaynakları:\n\n`
    response += `🏞️ Göller:\n`
    lakes.slice(0, 5).forEach(l => {
      response += `• ${l.name}: Doluluk %${l.level} (${l.area})\n`
    })
    response += `\n🌊 Nehirler:\n`
    rivers.slice(0, 5).forEach(r => {
      const statusIcon = r.status === 'normal' ? '✅' : r.status === 'kritik' ? '⚠️' : '❌'
      response += `${statusIcon} ${r.name}: ${r.flow} akış\n`
    })
    return response
  }
  
  if (lower.includes('yangın') || lower.includes('orman yangın') || lower.includes('fire')) {
    const forest = getForestData()
    return `🔥 Orman Yangını Durumu:\n\n🌍 Dünya:\n• Aktif yangın: ${forest.world[1].value}\n• Orman kaybı: ${forest.world[0].value}\n\n🇹🇷 Türkiye:\n• Aktif yangın: ${forest.turkey[2].value}\n• Orman alanı: ${forest.turkey[0].value}\n\nKaynak: NASA FIRMS (Gerçek zamanlı)`
  }
  
  if (lower.includes('haber') || lower.includes('son haber') || lower.includes('yeni')) {
    return `📰 Son çevre haberleri için "Haberler" sayfasını ziyaret edebilirsiniz:\n/menü/haberler\n\nOrada en güncel çevre haberlerini bulabilirsiniz!`
  }
  
  if (lower.includes('çocuk') || lower.includes('eğit') || lower.includes('çizgi')) {
    return `👶 Çocuklar için içerikler:\n\n• /kids - Eğitici oyunlar ve aktiviteler\n• /cartoon - Çevre temalı çizgi filmler\n• /education - Öğrenme kaynakları\n\nÇevre bilincini birlikte öğrenelim!`
  }
  
  if (lower.includes('nasıl') || lower.includes('ne yapmalı') || lower.includes('ne yapabilirim')) {
    return `🌱 Çevre için yapabileceğiniz şeyler:\n\n1. 🚗 Araba yerine bisiklet veya toplu taşıma kullanın\n2. 💡 Enerji tasarrufu yapın - gereksiz ışıkları kapatın\n3. ♻️ Geri dönüşüm yapın - atıkları ayrıştırın\n4. 🚿 Su tasarrufu yapın - kısa duş alın\n5. 🌱 Bitki dikin - ağaçlandırmaya katkıda bulunun\n6. 🛍️ Plastik kullanımını azaltın\n\nKüçük adımlar büyük değişiklikler yaratır!`
  }
  
  if (lower.includes('merhaba') || lower.includes('hi') || lower.includes('selam') || lower === 'merhaba') {
    return `🌿 Merhaba! Ben HABDER Asistanıyım.\n\nSize şu konularda yardımcı olabilirim:\n\n• 🌡️ Türkiye illerinin hava kalitesi\n• 💧 Baraj ve göl doluluk oranları\n• 🔥 Orman yangını durumu\n• 🌍 Karbon ayak izi hesaplama\n• 📰 Çevre haberleri\n• 💡 Çevre dostu öneriler\n\nSormak istediğiniz bir şey var mı?`
  }
  
  if (lower.includes('teşekkür') || lower.includes('tesekkur')) {
    return `😊 Rica ederim! Çevre konusunda başka sorularınız olursa her zaman yardımcı olurum.\n\n🌍 Hep birlikte daha yaşanabilir bir dünya için!`
  }
  
  const defaultResponses = [
    `🤔 Bu konuda size yardımcı olabilmem için daha spesifik bir soru sorabilir misiniz?\n\nÖrnek: "İstanbul hava kalitesi", "baraj doluluk oranları", "karbon ayak izi hesapla"`,
    `📊 Bu konuyla ilgili daha detaylı bilgi için "Haberler" veya ilgili sayfaları ziyaret edebilirsiniz.\n\nBaşka bir sorunuz varsa yardımcı olmaktan mutluluk duyarım!`,
    `🌱 Anladım. Belirtmek isterim ki çevre konusunda uzmanlaşmış bir asistanım.\n\nHava kalitesi, su kaynakları, orman yangınları, karbon hesaplama gibi konularda bilgi verebilirim.`,
  ]
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export function processUserMessage(message: string): ChatMessage[] {
  const response = generateResponse(message)
  return [
    { from: 'user', text: message, timestamp: new Date().toISOString() },
    { from: 'bot', text: response, timestamp: new Date().toISOString() },
  ]
}

export { calculateCarbonFootprint }