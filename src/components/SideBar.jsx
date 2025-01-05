import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'person_outline', label: 'Profile', path: '/profile' },
    { icon: 'wallet', label: 'Wallet', path: '/wallet' },
    { icon: 'receipt_long', label: 'Coin Settlements', path: '/coin-settlements' },
    // { icon: 'settings', label: 'Settings', path: '/settings' },
    { icon: 'help_outline', label: 'Help', path: '/help' },
    { icon: 'contact_phone', label: 'Contact Support', path: '/contact' },
    // { icon: 'campaign', label: 'Promotions', path: '/promotions' },
    // { icon: 'question_answer', label: 'FAQs', path: '/faq' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${isSidebarOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Header */}
          <div className="p-5">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://res.cloudinary.com/dwroh4zkk/image/upload/v1735050663/profile_cidlht.png"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Bhavya Kothari</h3>
                <p className="text-sm text-gray-400 flex items-center">
                  <span
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-2 py-1 rounded-md"
                    title="Coins"
                  >
                    💰 259 Coins
                  </span>
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center p-3 rounded-lg hover:bg-purple-500 transition-colors cursor-pointer ${
                    item.path === window.location.pathname ? 'bg-purple-700' : ''
                  }`}
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path);
                    }
                    toggleSidebar();
                  }}
                >
                  <span className="material-icons-outlined text-lg mr-3">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div className="p-3 text-center">
            <button
              className="w-full flex items-center justify-center p-3 bg-red-600 hover:bg-red-700 transition-colors text-white font-medium rounded-lg"
              onClick={handleLogout}
            >
              <span className="material-icons-outlined mr-2">exit_to_app</span>
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
