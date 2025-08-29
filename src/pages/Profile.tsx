import { useState } from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar.tsx';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle.tsx';
import { TonWallet } from '../shared/ui/TonWallet.tsx';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar.tsx';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs.tsx';
import { OneTimeTask } from '../features/user/ui/OneTimeTask.tsx';
import { DailyTask } from '../features/user/ui/DailyTask.tsx';
import { Referrals } from '../features/user/ui/Referrals.tsx';
import { InviteReferrals } from '../features/user/ui/InviteReferrals.tsx';
import { History } from '../features/user/ui/History.tsx';
import { Settings } from '../features/user/ui/Settings.tsx';
import type { RootState } from '../app/store.ts';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';
import { LootboxOverlay } from '../entities/lootbox/ui/LootboxOverlay.tsx';
import { closeLootbox } from '../entities/lootbox/lib/visibilityLootboxSlice.ts';

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
