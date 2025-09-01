import { useNavigate } from 'react-router-dom';

import { ProfileBar } from '../entities/user/ui/ProfileBar.tsx';
import { ProfileTitle } from '../entities/user/ui/ProfileTitle.tsx';
import { SmallPillFillButton } from '../shared/ui/small-pill-fill-button/SmallPillButton.tsx';
import { ProfileCollectionsDropdown } from '../entities/user/ui/ProfileCollectionsDropdown.tsx';
import { TonWallet } from '../shared/ui/TonWallet/TonWallet.tsx';
import { ProgressLevelBar } from '../entities/user/ui/ProgressLevelBar/ProgressLevelBar.tsx';

const Profile = () => {
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
      <div className="mt-[81px] flex flex-col items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
        >
          <circle cx="48" cy="48" r="48" fill="white" fillOpacity="0.15" />
          <g opacity="0.7">
            <path
              d="M47.9952 28.0141V27.2489C47.9952 26.0078 46.9874 25 45.7463 25H22.2581C21.017 25 20.0092 26.0078 20.0092 27.2489V67.8699H76V30.2631C76 29.022 74.9922 28.0141 73.751 28.0141H48.0046H47.9952Z"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M72.0215 31.2617H24.4819C23.3773 31.2617 22.4819 32.1571 22.4819 33.2617V66.2806C22.4819 67.3852 23.3773 68.2806 24.4819 68.2806H72.0215C73.1261 68.2806 74.0215 67.3852 74.0215 66.2806V33.2617C74.0215 32.1571 73.1261 31.2617 72.0215 31.2617Z"
              fill="white"
            />
            <path
              d="M47.1929 35.89L46.3624 38.1949H22.249C21.0078 38.1949 20 39.2028 20 40.4439V69.1296C20 70.3707 21.0078 71.3785 22.249 71.3785H73.7326C74.9737 71.3785 75.9815 70.3707 75.9815 69.1296V36.6552C75.9815 35.4141 74.9737 34.4062 73.7326 34.4062H49.3112C48.3594 34.4062 47.5102 35.0035 47.1929 35.8993V35.89Z"
              fill="#858585"
            />
            <mask
              id="mask0_1269_11039"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="20"
              y="34"
              width="56"
              height="38"
            >
              <path
                d="M47.193 35.89L46.3624 38.1949H22.2491C21.0079 38.1949 20.0001 39.2028 20.0001 40.4439V69.1296C20.0001 70.3707 21.0079 71.3785 22.2491 71.3785H73.7326C74.9738 71.3785 75.9816 70.3707 75.9816 69.1296V36.6552C75.9816 35.4141 74.9738 34.4062 73.7326 34.4062H49.3113C48.3595 34.4062 47.5103 35.0035 47.193 35.8993V35.89Z"
                fill="#858585"
              />
            </mask>
            <g mask="url(#mask0_1269_11039)">
              <rect
                width="67.2948"
                height="67.2948"
                transform="matrix(0.70711 0.707103 -0.70711 0.707103 74.2536 25)"
                fill="white"
                fillOpacity="0.1"
              />
            </g>
          </g>
        </svg>
        <h3 className="mt-[24px] font-russo text-[20px] leading-none">There are no stickers</h3>
        <p className="mt-[10px] text-[#b0b0b0] text-[16px] leading-tight max-w-[320px] leading-tight-[20px]">
          You still don't have any stickers.
          <br /> Check the store to get yours!
        </p>
        <SmallPillFillButton
          label={"Let's go!"}
          color="yellow"
          className="mt-[20px] px-[16px]"
          onClick={() => navigate('/market')}
        />
      </div>
    </div>
  );
};

export default Profile;
