import cn from 'classnames';
import { useRef, useLayoutEffect, useState } from 'react';

/**
 * NavbarTabs component
 * @param tabs - массив объектов { label: string, value: string }
 * @param activeTab - value активного таба
 * @param onTabClick - обработчик клика по табу
 */
type Tab = {
  label: string;
  value: string;
};

interface NavbarTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (value: string) => void;
  className?: string;
}

const NavbarTabs = ({ tabs, activeTab, onTabClick, className }: NavbarTabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const idx = tabs.findIndex((tab) => tab.value === activeTab);
    const node = tabRefs.current[idx];
    const container = containerRef.current;
    if (node && container) {
      const nodeRect = node.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderlineStyle({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
      });
    }
  }, [activeTab, tabs]);

  return (
    <nav ref={containerRef} className={cn('relative bg-black py-2 overflow-visible', className)}>
      <div className="relative flex gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide overflow-visible line-height-[3]">
        {tabs.map((tab, i) => {
          const isActive = tab.value === activeTab;
          return (
            <button
              key={tab.value}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[i] = el;
              }}
              className={
                'relative text-2xl font-medium transition-colors duration-150 cursor-pointer leading-[2] ' +
                (isActive ? 'text-white' : 'text-gray-500 hover:text-white')
              }
              onClick={() => onTabClick(tab.value)}
            >
              {tab.label}
            </button>
          );
        })}
        <span
          className="absolute bottom-0 h-1 bg-blue-500 rounded transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>
    </nav>
  );
};

export default NavbarTabs;
