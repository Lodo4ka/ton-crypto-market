import { useState } from 'react';

interface PageProps {
  onNavigate: (pageName: string) => void;
}

function ProfilePage({ onNavigate }: PageProps) {
  // Получаем user ID напрямую из Telegram WebApp API или используем заглушку
  const getTelegramUserId = () => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp?.initDataUnsafe?.user?.id) {
      return window.Telegram.WebApp.initDataUnsafe.user.id;
    }
    return 88888888; // Заглушка для разработки
  };

  const userId = getTelegramUserId();
  const [isCollectionExpanded, setIsCollectionExpanded] = useState(false);

  const handleToggle = () => {
    setIsCollectionExpanded(!isCollectionExpanded);
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <button 
            onClick={() => onNavigate('home')}
            className="close-button"
          >
            <img src='/close_icon.svg' />
            <span>Close</span>
          </button>
        </div>
        
        <button className="header-right">
            <img src="/collection-arrow-down.svg" alt="" />
            <img src='/navbutton_dots.svg'/>
        </button>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-avatar">
            <img 
              src='/profile_photo.png'
              alt="Profile"
              className="avatar-image"
            />
        </div>
        
        <h1 className="profile-name">Collector888</h1>
        
        <div className="profile-id">
          <span>ID {userId}</span>
          <img src='/eye-id-profile.svg'/>
        </div>
      </div>

      {/* Collection Section */}
      <div className="collection-section">
        <button className="collection-header" onClick={handleToggle}>
          <div className="collection-info">
            <div className="collection-icon">
              <img src='/ava-icon.png'/>
            </div>
            <div className="collection-title">
              <span className="collection-name">Armor Collection</span>
              <div className="verified-badge">
                <img src='/verification_Icon.svg'></img>
              </div>
            </div>
          </div>
          <div className="collection-count">
            <span>2</span>
            <img 
              src='/collection-arrow-down.svg'
              style={{ 
                transform: `rotate(${isCollectionExpanded ? 0 : -90}deg)`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              alt="Toggle collection"
            />
          </div>
        </button>

        {/* Collection Items */}
        <div 
          className="collection-grid"
          style={{
            maxHeight: isCollectionExpanded ? '400px' : '0',
            opacity: isCollectionExpanded ? '1' : '0',
            transform: isCollectionExpanded ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
          }}
        >
          {/* Item 1 */}
          <div className="collection-item">
            <div className="item-image item-bg-blue">
                <img src='/Paintball6.png'/>
            </div>
            <div className="item-info">
              <h3 className="item-name">The Dye Cut...</h3>
              <p className="item-rarity uncommon">UNCOMMON</p>
              <p className="item-number">#18 327</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="collection-item">
            <div className="item-image item-bg-orange">
              <img src='/Mask-v2.png'/>
            </div>
            <div className="item-info">
              <h3 className="item-name">The Dye Cut...</h3>
              <p className="item-rarity legendary">LEGENDARY</p>
              <p className="item-number">#348 327</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-items">
          <button className="nav-item">
            <div className="nav-icon">
              <img src='/market-nav.svg'/>
            </div>
            <span className="nav-label inactive">Market</span>
          </button>
          <button className="nav-item">
            <div className="nav-icon active">
              <img src='/profile-nav.svg'/>
            </div>
            <span className="nav-label active">Profile</span>
          </button>
        </div>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default ProfilePage;