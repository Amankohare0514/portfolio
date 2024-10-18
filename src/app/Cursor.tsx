'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

interface CursorProps {
  baseColor?: string
  accentColor?: string
  size?: number
  ringSize?: number
  trailCount?: number
}

const Cursor = ({
  baseColor = '#3b82f6',
  accentColor = '#f472b6',
  size = 20,
  ringSize = 40,
  trailCount = 5,
}: CursorProps) => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [lastClick, setLastClick] = useState({ x: 0, y: 0 })

  const updateCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  const updatePointerStatus = useCallback((e: MouseEvent) => {
    if (typeof window !== 'undefined') {  // Check if window is available
      setIsPointer(window.getComputedStyle(e.target as Element).cursor === 'pointer')
    }
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    setIsClicking(true)
    setLastClick({ x: e.clientX, y: e.clientY })
    setTimeout(() => setIsClicking(false), 300)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure it only runs on the client

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mouseover', updatePointerStatus)
    window.addEventListener('mousedown', handleClick)
    window.addEventListener('mouseup', () => setIsClicking(false))

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mouseover', updatePointerStatus)
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('mouseup', () => setIsClicking(false))
    }
  }, [updateCursor, updatePointerStatus, handleClick])

  const trails = useMemo(() => {
    return [...Array(trailCount)].map((_, i) => {
      const trailSize = size * (1 - (i / trailCount) * 0.5)
      const trailOpacity = 0.5 - (i / trailCount) * 0.4
      return { size: trailSize, opacity: trailOpacity }
    })
  }, [size, trailCount])

  const colorMix = useTransform(
    [cursorXSpring, cursorYSpring],
    ([latestX, latestY]) => {
      if (typeof window === 'undefined') return baseColor; // Avoid window access on the server

      const distanceFromCenter = Math.sqrt(
        Math.pow((latestX as number) - window.innerWidth / 2, 2) +
        Math.pow((latestY as number) - window.innerHeight / 2, 2)
      )
      const maxDistance = Math.sqrt(
        Math.pow(window.innerWidth / 2, 2) +
        Math.pow(window.innerHeight / 2, 2)
      )
      const ratio = distanceFromCenter / maxDistance
      return `linear-gradient(${ratio * 360}deg, ${baseColor}, ${accentColor})`
    }
  )

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
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            width: trail.size,
            height: trail.size,
            opacity: trail.opacity,
            background: colorMix,
            transition: `width 0.2s, height 0.2s, opacity 0.2s`,
          }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: size,
          height: size,
          background: colorMix,
          boxShadow: `0 0 10px ${baseColor}, 0 0 20px ${accentColor}`,
          scale: isClicking ? 0.8 : 1,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s, scale 0.1s',
        }}
      />
      {isPointer && (
        <motion.div
          className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-40 mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            width: ringSize,
            height: ringSize,
            borderColor: accentColor,
            opacity: 0.5,
            scale: isClicking ? 0.9 : 1,
            transition: 'width 0.2s, height 0.2s, opacity 0.2s, scale 0.1s',
          }}
        />
      )}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed rounded-full pointer-events-none z-40"
            style={{
              x: lastClick.x - ringSize / 2,
              y: lastClick.y - ringSize / 2,
              width: ringSize,
              height: ringSize,
              borderColor: accentColor,
              borderWidth: 2,
              opacity: 0,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Cursor
