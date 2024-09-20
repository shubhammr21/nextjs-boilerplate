"use client"

import { useRouter } from "next/navigation"
import { ReactNode } from "react"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers
