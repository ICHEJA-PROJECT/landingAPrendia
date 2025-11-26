import  logoApr  from '/img/logo_white.png';
import { HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { useNavigate, useLocation } from 'react-router-dom';

export const HeaderSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/gestion', label: 'Inicio', icon: HomeIcon },
    { path: '/gestion/interesados', label: 'Registros', icon: UserGroupIcon }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className='w-full flex-col items-center flex'>
      <img src={logoApr} alt="" className='w-25 h-25 mb-15'/>

      <nav className='w-full flex flex-col gap-2'>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                active
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Icon className="h-6 w-6 shrink-0" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
