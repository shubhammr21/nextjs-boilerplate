"use client"

import { Button, CircularProgress } from "@nextui-org/react"
import { signIn, signOut, useSession } from "next-auth/react"

const AuthButton = () => {
  const { status } = useSession()
  if (status === "loading") {
    return <CircularProgress />
  }
  if (status === "authenticated") {
    return (
      <Button onClick={() => signOut()} color="danger" variant="ghost">
        Sign out
      </Button>
    )
  }
  return (
    <Button onClick={() => signIn("google")} color="danger" variant="ghost">
      Sign in
    </Button>
  )
}

export default AuthButton
