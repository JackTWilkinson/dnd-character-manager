"use client"

import { signIn } from "next-auth/react"
import { SubmitButton } from "@/components/submit-button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid email or password")
    } else {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form action={handleSubmit} className="w-full max-w-md space-y-4 p-8">
        <h1 className="text-2xl font-bold">Login</h1>

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <SubmitButton>Sign In</SubmitButton>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}