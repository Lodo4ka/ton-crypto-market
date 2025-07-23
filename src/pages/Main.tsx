import React from 'react';

import { ProfileBar } from '../entities/user/ui/ProfileBar';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle';

const Profile: React.FC = () => (
  <div className="pt-[30px]">
    <ProfileBar />
    <ProfileTitle className="mt-[8px]" />
  </div>
);

export default Profile;
