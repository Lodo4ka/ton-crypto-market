import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import profileIcon from '../../../assets/icons/profile.svg';
import gameIcon from '../../../assets/icons/game.svg';
import marketIcon from '../../../assets/icons/market.svg';
import inventoryIcon from '../../../assets/icons/inventory.svg';
import gameIconActive from '../../../assets/icons/game-active.svg';
import marketIconActive from '../../../assets/icons/market-active.svg';
import inventoryIconActive from '../../../assets/icons/inventory-active.svg';
import profileIconActive from '../../../assets/icons/profile-active.svg';

export type BottomNavLink = {
  label: string;
  icon: string; // путь к SVG
  to: string;
  iconActive: string;
};

interface BottomNavbarProps {
  className?: string;
}

const NAV_LINKS: BottomNavLink[] = [
  {
    label: 'Game',
    to: '/game',
    icon: gameIcon,
    iconActive: gameIconActive,
  },
  {
    label: 'Market',
    to: '/market',
    icon: marketIcon,
    iconActive: marketIconActive,
  },
  {
    label: 'My Inventory',
    to: '/inventory',
    icon: inventoryIcon,
    iconActive: inventoryIconActive,
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: profileIcon,
    iconActive: profileIconActive,
  },
];

export const BottomNavbar = ({ className }: BottomNavbarProps) => {
  const location = useLocation();

  return (
    <nav
      className={cn(
        'w-full bg-[#181818] py-2 flex flex-col items-center border-t border-[#232323] fixed bottom-0',
        className,
      )}
    >
      <div className="flex w-full justify-around items-end">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'flex flex-col items-center gap-1 text-sm font-medium cursor-pointer',
                isActive ? 'text-primary-blue' : 'text-gray-400',
              )}
            >
              <span
                className={cn(
                  'mb-1 transition-all duration-200 ease-in-out flex items-center justify-center',
                  isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-70',
                )}
              >
                <img
                  key={isActive ? link.iconActive : link.icon}
                  src={isActive ? link.iconActive : link.icon}
                  alt={link.label}
                  width={32}
                  height={32}
                />
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
      {/* Индикатор свайпа/жестов */}
      <div className="mt-2 w-32 h-2 bg-white/80 rounded-full" />
    </nav>
  );
};
