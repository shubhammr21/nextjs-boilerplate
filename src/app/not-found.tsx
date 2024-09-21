import { Card, CardBody } from "@nextui-org/react"
import { IconFileUnknown } from "@tabler/icons-react"

const NotFound = () => {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <p className="al flex items-center justify-center gap-2 text-2xl">
          <IconFileUnknown />
          This page could not be found.
        </p>
      </CardBody>
    </Card>
  )
}

export default NotFound
