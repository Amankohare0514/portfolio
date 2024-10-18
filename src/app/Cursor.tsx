'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, useAnimation, useMotionValue, AnimatePresence } from 'framer-motion'

interface CursorProps {
  primaryColor?: string
  secondaryColor?: string
  glowColor?: string
  size?: number
}

 function Cursor({
  primaryColor = '#3b82f6',
  secondaryColor = '#60a5fa',
  glowColor = 'rgba(59, 130, 246, 0.5)',
  size = 20,
}: CursorProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const cursorControls = useAnimation()
  const rippleControls = useAnimation()

  const updateCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  const magneticEffect = useCallback((element: Element) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = Math.sqrt(
      Math.pow(centerX - cursorX.get(), 2) + Math.pow(centerY - cursorY.get(), 2)
    )

    if (distance < 100) {
      const angle = Math.atan2(centerY - cursorY.get(), centerX - cursorX.get())
      const force = (100 - distance) / 3
      cursorX.set(cursorX.get() + Math.cos(angle) * force)
      cursorY.set(cursorY.get() + Math.sin(angle) * force)
    }
  }, [cursorX, cursorY])

  useEffect(() => {
    window.addEventListener('mousemove', updateCursor)

    const handleMouseEnter = (e: MouseEvent) => {
      setIsHovering(true)
      setIsPointer(getComputedStyle(e.target as Element).cursor === 'pointer')
    }
    const handleMouseLeave = () => {
      setIsHovering(false)
      setIsPointer(false)
    }
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
      el.addEventListener('mousemove', () => magneticEffect(el))
    })

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        el.removeEventListener('mousemove', () => magneticEffect(el))
      })
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [updateCursor, magneticEffect])

  useEffect(() => {
    cursorControls.start({
      scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    })

    if (isClicking) {
      rippleControls.start({
        scale: [0, 3],
        opacity: [0.5, 0],
        transition: { duration: 0.5 }
      })
    }
  }, [isHovering, isClicking, cursorControls, rippleControls])

  return (
    <>
      <style jsx global>{`
        body * {
          cursor: none;
        }
        body *::selection {
          cursor: text;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: size,
          height: size,
        }}
        animate={cursorControls}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 0 20px 2px ${glowColor}`,
          }}
        />
        {isPointer && (
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: secondaryColor }}
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          />
        )}
      </motion.div>
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-40"
            style={{
              x: cursorX,
              y: cursorY,
              width: size * 2,
              height: size * 2,
              backgroundColor: secondaryColor,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={rippleControls}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-40"
          style={{
            x: cursorX,
            y: cursorY,
            width: size * (1 - i * 0.2),
            height: size * (1 - i * 0.2),
            backgroundColor: secondaryColor,
            opacity: 0.2 - i * 0.04,
          }}
          animate={{
            x: cursorX,
            y: cursorY,
            transition: {
              type: 'spring',
              stiffness: 500 - i * 100,
              damping: 25 - i * 5,
              mass: 0.5,
            },
          }}
        />
      ))}
    </>
  )
}

export default Cursor