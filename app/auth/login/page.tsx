"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

export default function LoginPage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

   async function loginHendler() {

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
                {
                    email : email,
                    password :password,
                }
        )

        toast.success(response.data.message)

    } catch (error) {
            const message = axios.isAxiosError<{ message?: string }>(error)
            ? error.response?.data?.message ?? "Unable to log in. Please check your connection and try again."
            : "An unexpected error occurred. Please try again."

        toast.error(message)

    }

}
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-8">
        
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to continue.
          </CardDescription>
        </CardHeader>
        <div>
          <CardContent className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </CardContent>
          <CardFooter className="pt-5">
            <Button type="submit" className="w-full" onClick={
                () => {
                    loginHendler()
                    }}>
              Login
            </Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  )
}
