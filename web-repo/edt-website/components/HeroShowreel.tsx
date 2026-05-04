'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const HERO_BG_SRC = '/videos/edt-showreel-hero.mp4'
const SHOWREEL_SRC = '/videos/edt-showreel-2025.mp4'

export default function HeroShowreel() {
  const [open, setOpen] = useState(false)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  // Esc closes modal
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // On open: try to enter native fullscreen on the video element. If the browser
  // refuses (some require a direct user gesture chain it doesn't recognize here),
  // the modal still works as a 90vh overlay with audio + native controls.
  useEffect(() => {
    if (!open) return
    const v = modalVideoRef.current
    if (!v) return
    const tryFullscreen = () => {
      v.requestFullscreen?.().catch(() => {})
    }
    if (v.readyState >= 1) tryFullscreen()
    else v.addEventListener('loadedmetadata', tryFullscreen, { once: true })
  }, [open])

  // If user exits fullscreen (Esc inside fullscreen, or close button on the
  // fullscreen overlay), also close the modal.
  useEffect(() => {
    if (!open) return
    const onFsChange = () => {
      if (!document.fullscreenElement) setOpen(false)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [open])

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-edt-black">
        {/* Deep fallback: pixel-grid behind everything (visible if video fails) */}
        <div className="absolute inset-0 pixel-grid" />

        {/* Background showreel — autoplay, muted, looped */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_BG_SRC} type="video/mp4" />
        </video>

        {/* Gradient overlay — dark on left for legibility, fades right to reveal showreel */}
        <div className="absolute inset-0 bg-gradient-to-r from-edt-black/85 via-edt-black/55 to-edt-black/10" />

        {/* Decorative blue line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-edt-blue/30 z-10" />

        {/* Content — same wrapper as Navbar so left edges align */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-20 py-32 lg:py-48 min-h-screen flex flex-col justify-center">
          <div className="max-w-full sm:max-w-[70%] lg:max-w-[55%]">
            <div className="mb-8">
              <span className="inline-block border border-edt-blue/40 bg-edt-black/40 backdrop-blur-sm px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-edt-blue">
                Kuala Lumpur · Southeast Asia · Beyond
              </span>
            </div>

            <h1 className="display-md text-white mb-8">
              We Build<br />
              Experiences<br />
              That Can&apos;t Be<br />
              Ignored.
            </h1>

            <p className="font-sans text-[16px] lg:text-[18px] text-edt-grey mb-12 max-w-[560px] leading-relaxed tracking-wider uppercase">
              AR · VR · MR · AI Avatars · Projection Mapping · Immersive Installations
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn-primary"
              >
                ▶ See Showreel
              </button>
              <Link href="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-20" />
      </section>

      {/* Showreel modal — fullscreen-capable, audio on, controls visible */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-label="EDT Showreel"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close showreel"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white text-3xl leading-none hover:text-edt-blue transition-colors z-10"
          >
            ×
          </button>
          <video
            ref={modalVideoRef}
            controls
            autoPlay
            playsInline
            className="w-full h-auto max-w-[1600px] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={SHOWREEL_SRC} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  )
}
