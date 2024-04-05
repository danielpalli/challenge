import { NavLink, Outlet } from 'react-router-dom';
import { menuRoutes } from '../router/router';

export const MainLayout = () => {
  return (
    <main className="flex flex-col place-content-between  h-screen">

      <div className='px-5 py-4'>
      <h3 className='text-sm font-bold text-gray-600'>Title</h3>

        <div className='bg-gray-300 h-4 rounded-[0.2rem]'></div>

        <section className="w-full pt-5 text-gray-700">
          <div className="flex flex-col   border border-gray-300 px-3 py-2">
            <Outlet />
          </div>
        </section>
      </div>

      <div className=''>
        <div className='flex justify-between'>
          <button>boton 1</button>
          <button>boton 2</button>
        </div>
        <nav className="flex justify-center gap-x-6">
          {
            menuRoutes.map((option) => (
              <NavLink key={option.to} to={option.to} className=" text-gray-600">
                <div className='flex flex-col items-center '>
                  <i className="fa-solid fa-mug-hot text-2xl"  />
                  <span className='text-xs font-semibold'>{option.title}</span>
                </div>
                <div className=" bg-gray-700 h-1 my-1.5" /> {/* TODO mostrar solo si esta activo */}
              </NavLink>
            ))
          }
        </nav>
        </div>
    </main>
  );
};
