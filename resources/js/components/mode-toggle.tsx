"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setTheme] = useState<string>("dark")
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Récupérer le thème sauvegardé ou utiliser le thème système
    const savedTheme = localStorage.getItem("theme")
    
    // Détecter le thème système
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    const currentSystemTheme = systemDarkMode.matches ? "dark" : "light"
    setSystemTheme(currentSystemTheme)
    
    if (savedTheme === "system" || !savedTheme) {
      // Utiliser le thème système
      setTheme("system")
      document.documentElement.classList.toggle("dark", currentSystemTheme === "dark")
    } else {
      // Utiliser le thème sauvegardé
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }

    // Écouter les changements du thème système
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light"
      setSystemTheme(newSystemTheme)
      
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", newSystemTheme === "dark")
      }
    }

    systemDarkMode.addEventListener("change", handleSystemThemeChange)

    return () => {
      systemDarkMode.removeEventListener("change", handleSystemThemeChange)
    }
  }, [theme])

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    
    if (newTheme === "system") {
      // Appliquer le thème système actuel
      document.documentElement.classList.toggle("dark", systemTheme === "dark")
    } else {
      // Appliquer le thème choisi
      document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
  }

  // Déterminer le thème effectivement appliqué
  const effectiveTheme = theme === "system" ? systemTheme : theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Changer le thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeTheme("light")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <Sun className="mr-2 h-4 w-4" />
            <span>Clair</span>
          </div>
          {effectiveTheme === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => changeTheme("dark")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <Moon className="mr-2 h-4 w-4" />
            <span>Sombre</span>
          </div>
          {effectiveTheme === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => changeTheme("system")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <Monitor className="mr-2 h-4 w-4" />
            <span>Système</span>
          </div>
          {theme === "system" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}