import { Outlet } from 'react-router-dom';
import { MenuItems } from '../components';

export const MainLayout = () => {
  return (
    <main className="flex flex-col place-content-between h-screen">
      <section className="h-full">
        <Outlet />
      </section>

      <nav className="flex justify-center gap-x-6">
        <MenuItems />
      </nav>
    </main>
  );
};
