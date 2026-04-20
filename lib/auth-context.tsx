"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
interface User {
  email: string | null
}

// Admin email whitelist - only these emails can access admin panel
const ADMIN_EMAILS = ["mi6062610@gmail.com"]

interface AuthContextType {
  user: User | null
  loading: boolean
  isAdmin: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isAdmin = document.cookie.includes("is_admin=true")
    if (isAdmin) {
      setUser({ email: ADMIN_EMAILS[0] })
    } else {
      setUser(null)
    }
    setLoading(false)
  }, [])

  const isAdmin = user ? ADMIN_EMAILS.includes(user.email || "") : false

  const signIn = async (email: string, password: string) => {
    // Check if email is in admin whitelist before allowing sign in
    if (!ADMIN_EMAILS.includes(email)) {
      throw new Error("Access denied. You are not authorized to access the admin panel.")
    }
    if (!password) {
      throw new Error("Password is required.")
    }
    setUser({ email })
  }

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" })
    setUser(null)
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login"
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
