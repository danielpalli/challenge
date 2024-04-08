import { Navigate, createBrowserRouter } from "react-router-dom";
import { ReservationPage, AppointmentPage } from "../pages";
import { MainLayout } from "../layouts/MainLayout";

export const menuRoutes = [
  {
    to: '/reservar',
    title: 'Reservar',
    icon: 'icon',
    component: <ReservationPage />
  },
  {
    to: '/mis-turnos',
    title: 'Mis turnos',
    icon: 'icon',
    component: <AppointmentPage />
  },

];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      ...menuRoutes.map(route => ({
        path: route.to,
        element: route.component
      })),
      {
        path: '*',
        element: <Navigate to="/reservar" />
      },
      {
        path: '',
        element: <Navigate to="/reservar" />
      },
    ]
  }
])