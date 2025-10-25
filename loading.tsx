import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="grid place-items-center h-full w-full">
      <Spinner size="xl" />
    </div>
  )
}
