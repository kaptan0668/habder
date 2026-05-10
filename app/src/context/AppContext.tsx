import { createContext, useContext, useState, ReactNode } from 'react'

type AdminState = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

type AppContextType = {
  currentPage: string
  setCurrentPage: (page: string) => void
  selectedCity: string
  setSelectedCity: (city: string) => void
  admin: AdminState
}

const defaultAdmin: AdminState = {
  isAuthenticated: localStorage.getItem('habder_admin_auth') === 'true',
  login: () => {},
  logout: () => {},
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('/')
  const [selectedCity, setSelectedCity] = useState('İstanbul')
  const [adminState, setAdminState] = useState(defaultAdmin)

  const admin: AdminState = {
    isAuthenticated: adminState.isAuthenticated,
    login: () => {
      setAdminState(prev => ({ ...prev, isAuthenticated: true }))
      localStorage.setItem('habder_admin_auth', 'true')
    },
    logout: () => {
      setAdminState(prev => ({ ...prev, isAuthenticated: false }))
      localStorage.removeItem('habder_admin_auth')
    },
  }

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage, selectedCity, setSelectedCity, admin }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}