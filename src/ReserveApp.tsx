import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

export const ReserveApp = () => {
  return (
    <RouterProvider router={router} />
  )
}