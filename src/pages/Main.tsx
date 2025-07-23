import React from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle';
import { TonWallet } from '../entities/user/ui/TonWallet';

const Profile: React.FC = () => (
  <div className="pt-[30px]">
    <ProfileBar />
    <ProfileTitle className="mt-[8px]" />
    <TonWallet className="mt-[20px] flex justify-center" />
  </div>
);

export default Profile;
