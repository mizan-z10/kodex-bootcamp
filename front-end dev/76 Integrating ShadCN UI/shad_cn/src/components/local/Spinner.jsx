import { cn } from "cn"
import { LoaderIcon } from "lucide-react"

export default function Spinner({ className, ...props }) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-6 animate-spin ", className)}
      {...props}
    />
  )
}


