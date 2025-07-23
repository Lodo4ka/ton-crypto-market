import React from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle';
import { TonWallet } from '../shared/ui/TonWallet';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar';

const Profile: React.FC = () => (
  <div className="pt-[30px]">
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
  </div>
);

export default Profile;
