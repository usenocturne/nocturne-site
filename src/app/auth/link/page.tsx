'use client'

import { Mark } from '@/components/logo'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AuthLinkPage() {
    const searchParams = useSearchParams()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const deviceId = searchParams.get('deviceId')
    const salt = searchParams.get('salt')
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

    useEffect(() => {
        if (!deviceId || !salt || !baseUrl) {
            setErrorMessage('Missing required parameters')
            return
        }

        if (window.history.replaceState) {
            window.history.replaceState('', '', window.location.href)
        }
    }, [deviceId, salt, baseUrl])

    async function encryptData(text: string, deviceId: string) {
        const encoder = new TextEncoder()
        const data = encoder.encode(text)

        const keyMaterial = await window.crypto.subtle.importKey(
            'raw',
            encoder.encode(deviceId),
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        )

        const iv = window.crypto.getRandomValues(new Uint8Array(12))

        const key = await window.crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: encoder.encode(salt!),
                iterations: 100000,
                hash: 'SHA-256',
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt']
        )

        const encrypted = await window.crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            key,
            data
        )

        const encryptedArray = new Uint8Array(iv.length + encrypted.byteLength)
        encryptedArray.set(iv)
        encryptedArray.set(new Uint8Array(encrypted), iv.length)

        return btoa(String.fromCharCode(...encryptedArray))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isSubmitting) return
        if (!deviceId || !salt || !baseUrl) {
            setErrorMessage('Missing required parameters')
            return
        }

        setIsSubmitting(true)
        setErrorMessage('')

        try {
            const form = e.currentTarget
            const clientId = (form.elements.namedItem('clientId') as HTMLInputElement).value.trim()
            const clientSecret = (form.elements.namedItem('clientSecret') as HTMLInputElement).value.trim()

            if (!clientId || !clientSecret) {
                throw new Error('Please fill in all fields')
            }

            const credentials = JSON.stringify({ clientId, clientSecret })
            const encryptedData = await encryptData(credentials, deviceId)

            await fetch(`${baseUrl}/v1/auth/store-secret/${deviceId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ encryptedData }),
            })

            const redirectUri = encodeURIComponent(`${baseUrl}/v1/auth/callback`)
            const scopes =
                'user-read-recently-played user-read-private user-top-read user-read-playback-state user-modify-playback-state user-read-currently-playing user-library-read user-library-modify playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private'

            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&state=${deviceId}`
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!deviceId || !salt || !baseUrl) {
        return (
            <div className="h-screen bg-black">
                <div className="h-screen bg-black p-6 flex flex-col sm:items-center pt-24">
                    <div className="w-full max-w-md">
                        <Mark className="h-14 mb-8 w-auto sm:mx-auto fill-[#CBCBCB] [&>path:last-child]:fill-white" />
                        <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg">
                            Missing required parameters
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen bg-black">
            <div className="h-screen bg-black p-6 flex flex-col sm:items-center pt-24">
                <div className="w-full max-w-md">
                    <Mark className="h-14 mb-8 w-auto sm:mx-auto fill-[#CBCBCB] [&>path:last-child]:fill-white" />

                    <h1 className="text-4xl font-bold text-white mb-8 mt-4 sm:text-center">
                        Enter Spotify Credentials
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="clientId"
                            placeholder="Client ID"
                            className="w-full px-4 py-3 bg-black/10 ring-1 ring-inset focus:ring-2 focus:ring-white/20 ring-white/10 rounded-lg text-white placeholder-white/40"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="clientSecret"
                                placeholder="Client Secret"
                                className="w-full pr-12 px-4 py-3 bg-black/10 ring-1 ring-inset focus:ring-2 focus:ring-white/20 ring-white/10 rounded-lg text-white placeholder-white/40"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {errorMessage && (
                            <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-white/10 px-6 py-4 text-lg font-semibold text-white shadow-sm disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting...' : 'Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
