# HABDER - Teknik Doküman

## Bağımlılıklar

### Üretim Bağımlılıkları
- `react`, `react-dom`: ^18.2.0 - Çekirdek UI kütüphanesi
- `react-router-dom`: ^6.20.0 - Çok sayfalı yönlendirme
- `framer-motion`: ^10.16.0 - Gelişmiş animasyonlar (sayfa geçişleri, kart girişleri)
- `gsap`: ^3.12.0 - Şeritli sayaç animasyonları, scroll trigger
- `@gsap/react`: ^2.1.0 - GSAP React entegrasyonu
- `lucide-react`: ^0.294.0 - Simge kütüphanesi
- `class-variance-authority`: ^0.7.0 - Bileşen varyantları
- `clsx`: ^2.0.0 - Koşullu sınıf birleştirme
- `tailwind-merge`: ^2.0.0 - Tailwind sınıf çakışma çözümü
- `@radix-ui/react-dialog`: ^1.0.5 - Modal/Dialog (shadcn/ui)
- `@radix-ui/react-slot`: ^1.0.2 - Bileşen slotları

### Geliştirme Bağımlılıkları
- `typescript`: ^5.2.0
- `vite`: ^5.0.0
- `@vitejs/plugin-react`: ^4.2.0
- `tailwindcss`: ^3.3.0
- `autoprefixer`: ^10.4.0
- `postcss`: ^8.4.0

## Bileşen Envanteri

### Layout Bileşenleri
| Bileşen | Kaynak | Kullanım |
|---------|--------|----------|
| Navbar | Özel | Tüm sayfalarda sabit navigasyon |
| Footer | Özel | Tüm sayfalarda alt bilgi |
| PageLayout | Özel | Sayfa sarmalayıcı (animasyonlu geçiş) |

### Sayfalar
| Sayfa | Rota | Tanım |
|-------|------|-------|
| HomePage | `/` | Ana kontrol paneli, arama, istatistikler |
| WorldPage | `/world` | Küresel ve Türkiye verileri |
| AirPage | `/air` | Hava kalitesi ve iklim |
| WaterPage | `/water` | Su kaynakları ve barajlar |
| ForestPage | `/forest` | Orman ve ekosistemler |
| IcePage | `/ice` | Buzul ve iklim değişikliği |
| SoilPage | `/soil` | Toprak ve tarım |
| EducationPage | `/education` | Eğitim kaynakları |
| KidsPage | `/kids` | Çocuk köşesi ve oyun |
| CartoonPage | `/cartoon` | Çevre kahramanları |
| NewsPage | `/news` | Çevre haberleri |
| AdminPage | `/admin` | Yönetici girişi |

### Paylaşılan UI Bileşenleri
| Bileşen | Kaynak | Kullanım |
|---------|--------|----------|
| DataCard | Özel | Tüm veri gösterim kartları |
| StatCounter | Özel | Animasyonlu sayaç (GSAP) |
| SectionHeader | Özel | Bölüm başlıkları (üst başlık + başlık) |
| SearchBar | Özel | Şehir arama inputu |
| NewsScroller | Özel | Yatay haber kaydırma |
| ChatWidget | Özel | Yapay zeka sohbet balonu |

### Sayfa-Specifik Bileşenler
| Bileşen | Sayfa | Tanım |
|---------|-------|-------|
| CityDashboard | Home | Şehir bazlı veri panosu |
| GameArea | Kids | Geri dönüşüm sınıflandırma oyunu |
| FireMap | Forest | SVG Türkiye yangın haritası |
| MiniChart | Air | SVG çizgi grafiği |

## Animasyon Uygulama Planı

| Animasyon | Kütüphane | Uygulama | Karmaşıklık |
|-----------|-----------|----------|-------------|
| Şeritli Sayı Sayaçları | GSAP | `gsap.to()` ile translateY, stagger delay | Yüksek |
| Kart Giriş Animasyonları | Framer Motion | `motion.div` + `whileInView`, `variants` | Orta |
| Sayfa Geçişleri | Framer Motion | `AnimatePresence` + `motion.div` exit/enter | Orta |
| Navigasyon Arka Planı | CSS + Scroll Event | Scroll pozisyonuna göre class değişimi | Düşük |
| Grafik Çizimi | Framer Motion | SVG pathLength animasyonu | Orta |
| Yangın Noktası Yanıp Sönme | CSS Keyframes | `@keyframes pulse` | Düşük |
| Haber Kaydırma | CSS Animation | `@keyframes scroll` infinite | Düşük |
| Oyun Sürükle-Bırak | React DnD | HTML5 drag and drop API | Orta |
| Konfeti Efekti | Özel JS | DOM elementleri + CSS animation | Orta |
| Geri Sayım Sayacı | setInterval | Basit sayı geri sayımı | Düşük |
| Hover Efektleri | CSS Transitions | `transition-all duration-300` | Düşük |

## State & Logic Planı

### Router Yapısı
React Router ile 12 sayfa arası yönlendirme. Layout rotası (Navbar + Footer + children).

### Context'ler
- **AppContext**: Mevcut sayfa, şehir seçimi, admin durumu
- **DataContext**: Tüm çevre verileri (statik JSON)

### Veri Akışı
```
DataContext (mock data)
  ├── HomePage → CityDashboard → city-based calculations
  ├── WorldPage → dual-column grids
  ├── AirPage → AQI data + MiniChart
  ├── WaterPage → dam levels + sea temps
  ├── ...
```

### Form Logic
- Admin Login: Basit form validasyonu (username === 'habder', password === 'Habder2025!')
- City Search: Input değeri ile şehir verilerini filtreleme
- Chat Widget: Mesaj geçmişi state'i

### Oyun Logic (KidsPage)
- Atık öğeleri dizisi
- Sürükle-bırak olay yönetimi
- Skor hesaplama (+10 doğru, -5 yanlış)
- 50 puan konfeti tetikleyici

## Diğer Kritik Kararlar

### Görseller
Tüm arka plan görselleri ve varlıklar AI üretimi olacak. Görseller `public/assets/` dizinine yerleştirilecek.

### Responsive Yaklaşım
- Mobil: Tek sütun, hamburger menü
- Tablet: İki sütun
- Desktop: Tam düzen

### Performans Optimizasyonları
- Görseller için lazy loading
- Animasyonlar için `will-change` özelliği
- GSAP animasyonlarında `useGSAP` hook kullanımı

### build Notu
Vite kullanılacak. Statik veriler JSON dosyalarında tutulacak, harici API çağrısı yok.
