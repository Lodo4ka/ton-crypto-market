import { useState } from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle';
import { TonWallet } from '../shared/ui/TonWallet';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import { OneTimeTask } from '../features/user/OneTimeTask';
import { DailyTask } from '../features/user/DailyTask';

type Tab = {
  label: string;
  value: string;
};

const TABS: Tab[] = [
  { label: 'Tasks', value: 'tasks' },
  { label: 'Referrals', value: 'referrals' },
  { label: 'History', value: 'history' },
  { label: 'Settings', value: 'settings' },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="">
      <ProfileBar />
      <ProfileTitle className="mt-[8px]" />
      <TonWallet className="mt-[20px] flex justify-center" />
      <ProgressLevelBar
        className="mt-[20px] flex justify-center"
        currentLevel={1}
        maxLevel={10}
        progressPercent={50}
        marks={[0, 25, 50, 75, 100]}
      />
      <NavbarTabs
        tabs={TABS}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        className="mt-[20px]"
      />
      <OneTimeTask className="mt-[24px]" />
      <DailyTask className="mt-[40px]" />
    </div>
  );
};

export default Profile;
