import imgAvatar from '../../../assets/profile/avatar.png';

export const ProfileBar = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <img src={imgAvatar} alt="avatar" className="rounded-full w-[104px] h-[104px] object-cover" />
    </div>
  );
};
