import { useNavigate } from 'react-router-dom';

import { ProfileBar } from '../entities/user/ui/ProfileBar.tsx';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle.tsx';
import { ProfileCollectionsDropdown } from '../entities/user/ui/ProfileCollectionsDropdown.tsx';
import { TonWallet } from '../shared/ui/TonWallet/TonWallet.tsx';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar/ProgressLevelBar.tsx';
import { ProfileNoStickers } from '../entities/user/ui/ProfileNoStickers/ProfileNoStickers.tsx';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props.ts';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs.tsx';
import { useState } from 'react';
import { OneTimeTask } from '../features/user/ui/OneTimeTask.tsx';
import { DailyTask } from '../features/user/ui/DailyTask.tsx';
import { Referrals } from '../features/user/ui/Referrals.tsx';
import { InviteReferrals } from '../features/user/ui/InviteReferrals.tsx';
import { History } from '../features/user/ui/History.tsx';
import { Settings } from '../features/user/ui/Settings.tsx';

const TABS: Tab[] = [
  { label: 'Tasks', value: 'tasks' },
  { label: 'Referrals', value: 'referrals' },
  { label: 'History', value: 'history' },
  { label: 'Settings', value: 'settings' },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileBar />
      <ProfileTitle className="mt-[16px]" />
      <div className="mt-[20px] flex justify-center">
        <TonWallet />
      </div>
      <ProgressLevelBar
        className="mt-[20px] px-[16px]"
        currentLevel={1}
        maxLevel={10}
        progressPercent={50}
        marks={[0, 25, 50, 75, 100]}
      />
      <div className="mt-[16px] px-[16px]">
        <ProfileCollectionsDropdown />
      </div>
      <NavbarTabs
        tabs={TABS}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        className="mt-[20px]"
      />
      <div className="mt-[24px]">
        {activeTab === 'tasks' && (
          <>
            <OneTimeTask />
            <DailyTask />
          </>
        )}
        {activeTab === 'referrals' && (
          <>
            <Referrals />
            <InviteReferrals />
          </>
        )}
        {activeTab === 'history' && <History />}
        {activeTab === 'settings' && <Settings />}
      </div>

      <ProfileNoStickers className="mt-[81px]" />
    </div>
  );
};

export default Profile;
