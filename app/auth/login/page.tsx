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
import { useState } from "react"

export default function LoginPage() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    function login(){
        
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
        <form>
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
                    login()
                    }}>
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
