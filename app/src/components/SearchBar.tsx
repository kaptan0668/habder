import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

const popularCities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana']

export default function SearchBar({ onSearch, placeholder = 'Şehir ara...' }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = popularCities.filter(city => 
        city.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleSelect = (city: string) => {
    setQuery(city)
    setIsOpen(false)
    onSearch?.(city)
  }

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-10 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
          aria-label="Şehir arama"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
            aria-label="Temizle"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden z-50"
          >
            {results.map((city, i) => (
              <li key={city}>
                <button
                  onClick={() => handleSelect(city)}
                  className="w-full px-4 py-2 text-left text-sm text-zinc-300 hover:bg-green-400/10 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <Search className="w-3 h-3" />
                  {city}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}