'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent, type ReactNode } from 'react'

type ThankYouType = 'contact' | 'lead' | 'partner' | 'newsletter'

export default function FormspreeForm({
  endpoint,
  thankYouType,
  className,
  children,
}: {
  endpoint: string
  thankYouType: ThankYouType
  className?: string
  children: ReactNode
}) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)

    const formEl = e.currentTarget
    const data = new FormData(formEl)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        router.push(`/thank-you?type=${thankYouType}`)
        return
      }

      const json = await res.json().catch(() => null)
      const message =
        json?.errors?.[0]?.message ||
        'Submission failed. Please try again later.'
      setError(message)
      setSubmitting(false)
    } catch {
      setError('Network error. Please try again later.')
      setSubmitting(false)
    }
  }

  return (
    <form
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      className={className}
      aria-busy={submitting}
    >
      <fieldset disabled={submitting} className="contents">
        {children}
      </fieldset>
      {error && (
        <p role="alert" className="text-red-400 text-sm mt-2">
          {error}
        </p>
      )}
    </form>
  )
}
