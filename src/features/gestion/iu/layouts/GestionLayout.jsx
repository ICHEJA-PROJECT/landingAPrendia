import { Outlet } from 'react-router-dom';
import { Sidebar, Header } from '../components/organisms';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../login/services/authService';

export const GestionLayout = ({
  title = 'Gestión',
  breadcrumbs = [],
  adminName = 'Admin',
  adminEmail = 'admin@example.com',
  notificationCount = 0,
  onNotificationClick
}) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        activeSection="interesados"
        onNavigate={(path) => navigate(path)}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          title={title}
          breadcrumbs={breadcrumbs}
          adminName={adminName}
          adminEmail={adminEmail}
          notificationCount={notificationCount}
          onNotificationClick={onNotificationClick}
        />

        {/* Content Area - Outlet para las vistas */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
