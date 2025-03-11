"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Mock photos data
const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Landscape photo",
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Portrait photo",
    width: 400,
    height: 600,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=600",
    alt: "Wide landscape photo",
    width: 600,
    height: 300,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=500&width=500",
    alt: "Square photo",
    width: 500,
    height: 500,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Portrait photo",
    width: 400,
    height: 600,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Landscape photo",
    width: 600,
    height: 400,
  },
]

export default function PhotosPage() {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Distribute photos into columns for masonry layout
  const photoColumns = Array.from({ length: columns }, () => [])
  photos.forEach((photo, index) => {
    photoColumns[index % columns].push(photo)
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Photos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((photo) => (
                <div
                  key={photo.id}
                  className="relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

