import { useEffect, useRef, useState } from 'react'

export const useScrollParallax = () => {
    const ref = useRef(null)
    const [parallaxValues, setParallaxValues] = useState({
        imageScale: 1,
        imageOpacity: 1,
        textOpacity: 1,
        imageY: 0,
        imageX: 0,
    })

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return

            // Obtener posición del elemento
            const rect = ref.current.getBoundingClientRect()
            const elementTop = rect.top
            const elementHeight = rect.height
            const windowHeight = window.innerHeight

            // Calcular progreso: cuándo la sección entra en viewport y sale
            // Cuando elementTop === windowHeight (entra desde abajo) = progress 0
            // Cuando elementTop === -elementHeight (sale por arriba) = progress 1
            const totalDistance = windowHeight + elementHeight
            const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / totalDistance))

            // Efectos progresivos más agresivos
            const imageScale = 1 + progress * 0.5 // Crece hasta 1.5x
            const imageOpacity = Math.max(0, 1 - progress * 1.2) // Se desvanece más rápido
            const textOpacity = Math.max(0, 1 - progress * 1.5) // El texto se desvanece muy rápido
            const imageY = progress * -60 // Se mueve hacia arriba más
            const imageX = Math.abs(progress - 0.5) * 20 // Se centra (hacia el centro de pantalla)

            setParallaxValues({
                imageScale,
                imageOpacity,
                textOpacity,
                imageY,
                imageX,
            })
        }

        // Llamar una vez al montar para evitar saltos
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { ref, parallaxValues }
}
