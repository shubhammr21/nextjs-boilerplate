"use client"

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/react"
import { IconBrandGoogle, IconLogout } from "@tabler/icons-react"
import { signIn, signOut, useSession } from "next-auth/react"

const AuthButton = ({ minimal = true }: { minimal?: boolean }) => {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/profile"
    })
  }
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/"
    })
  }

  const { data, status } = useSession()
  if (status === "loading") {
    return <CircularProgress aria-label="Loading..." />
  }
  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button
          onClick={handleSignOut}
          color="danger"
          variant="ghost"
          endContent={<IconLogout />}
        >
          Sign out
        </Button>
      )
    }
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue="profile"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            textValue="Sign Out"
            onClick={handleSignOut}
          >
            <div className="flex justify-between">
              <p>Sign Out</p>
              <IconLogout className="justify-end" />
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
  return (
    <Button
      onClick={handleSignIn}
      color="danger"
      variant="ghost"
      startContent={<IconBrandGoogle />}
    >
      Sign in
    </Button>
  )
}

export default AuthButton
