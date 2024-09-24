import { CircularProgress } from "@nextui-org/react"

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center">
      <CircularProgress
        aria-label="Loading page..."
        strokeWidth={4}
        classNames={{
          svg: "w-36 h-36",
          indicator: "stroke-black dark:stroke-white",
          track: "stroke-black/10 dark:stroke-white/10"
        }}
      />
    </div>
  )
}

export default Loading
