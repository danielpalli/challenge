import { NavLink, useLocation } from 'react-router-dom';
import { menuRoutes } from '../../router/router';

export const MenuItems = () => {
  const location = useLocation();

  return (
    <>
      {
        menuRoutes.map(({ to, title }) => {
          const isActive = location.pathname === to;

          return (
            <NavLink key={to} to={to} className={isActive ? 'text-violet-600' : 'text-gray-600'}>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-mug-hot text-2xl" />
                <span className="text-xs font-semibold">{title}</span>
              </div>
              <div className={`h-1 ${isActive ? 'bg-violet-600' : 'bg-gray-600'}`} />
            </NavLink>
          );
        })
      }
    </>
  );
};