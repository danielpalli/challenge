import { RouterProvider } from "react-router-dom"
import { router } from "./ui/router/router"

export const ReserveApp = () => {
  return (
    <RouterProvider router={router} />
  )
}
