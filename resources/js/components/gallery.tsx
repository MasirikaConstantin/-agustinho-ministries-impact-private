"use client"

import * as React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

export interface GalleryItem {
  id: number
  src: string
  title: string
  description: string
  category?: string
  date?: string
}

interface GalleryProps {
  items: GalleryItem[]
  columns?: number
}

export default function Gallery({ items, columns = 4 }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedItem(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedItem(items[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedItem(items[newIndex])
  }

  // Gestion des touches du clavier
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  // Classes responsives pour les colonnes
  const gridClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  }[columns]

  return (
    <>
      <div className={`grid ${gridClasses} gap-4`}>
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            className="overflow-hidden cursor-pointer group"
            onClick={() => openModal(item, index)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedItem && (
            <div className="relative">
              {/* Bouton fermer */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Contenu du modal */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                    
                    {(selectedItem.category || selectedItem.date) && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        {selectedItem.category && (
                          <div>
                            <span className="font-semibold">Catégorie:</span> {selectedItem.category}
                          </div>
                        )}
                        {selectedItem.date && (
                          <div>
                            <span className="font-semibold">Date:</span> {selectedItem.date}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="text-sm text-muted-foreground">
                      {currentIndex + 1} / {items.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}