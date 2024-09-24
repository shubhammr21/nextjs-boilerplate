"use client"

import { useEffect, useState } from "react"

import { VisuallyHidden, useSwitch } from "@nextui-org/react"
import { IconMoon, IconSun } from "@tabler/icons-react"

import useSystemTheme from "@/hooks/use-system-theme"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useSystemTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch({
    isSelected: theme === "light",
    onValueChange: () =>
      theme === "light" ? setTheme("dark") : setTheme("light")
  })
  if (!mounted) return null

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "h-8 w-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200"
            ]
          })}
        >
          {isSelected ? <IconSun /> : <IconMoon />}
        </div>
      </Component>
    </div>
  )
}

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useSystemTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <Switch
//       isSelected={theme === "light"}
//       onValueChange={() =>
//         theme === "light" ? setTheme("dark") : setTheme("light")
//       }
//       size="lg"
//       color="success"
//       startContent={<IconSun />}
//       endContent={<IconMoon />}
//     />
//   )
// }
