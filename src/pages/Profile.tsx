import { useState } from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle';
import { TonWallet } from '../shared/ui/TonWallet';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import { OneTimeTask } from '../features/user/ui/OneTimeTask';
import { DailyTask } from '../features/user/ui/DailyTask';
import { Referrals } from '../features/user/ui/Referrals';
import { InviteReferrals } from '../features/user/ui/InviteReferrals';
import { History } from '../features/user/ui/History';
import { Settings } from '../features/user/ui/Settings';
import type { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';
import { LootboxOverlay } from '../entities/lootbox/ui/LootboxOverlay';
import { closeLootbox } from '../entities/lootbox/lib/visibilityLootboxSlice';

const TABS: Tab[] = [
  { label: 'Tasks', value: 'tasks' },
  { label: 'Referrals', value: 'referrals' },
  { label: 'History', value: 'history' },
  { label: 'Settings', value: 'settings' },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  const { isOpen, props } = useAppSelector((state: RootState) => state.overlay);
  const dispatch = useAppDispatch();

  const onClickCloseLootbox = () => {
    dispatch(closeLootbox());
  };

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
      {activeTab === 'tasks' && (
        <>
          <OneTimeTask className="mt-[24px]" />
          <DailyTask className="mt-[40px]" />
        </>
      )}
      {activeTab === 'referrals' && (
        <>
          <Referrals className="mt-[24px]" />
          <InviteReferrals className="mt-[24px]" />
        </>
      )}
      {activeTab === 'history' && <History className="mt-[24px]" />}
      {activeTab === 'settings' && <Settings className="mt-[24px]" />}
      {isOpen && props && (
        <LootboxOverlay
          {...props}
          onClose={onClickCloseLootbox}
          open={isOpen}
          icon={props.icon as string}
        />
      )}
    </div>
  );
};

export default Profile;
