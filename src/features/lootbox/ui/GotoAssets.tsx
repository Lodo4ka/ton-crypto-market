export const GotoAssets = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        <img src={'/images/lootbox/inventory/gamepad.svg'} alt="gamepad" className="w-10 h-10" />
      </div>
      <div className="text-[20px] text-white font-bold text-center">There are no assets</div>
      <div className="text-[15px] text-gray text-center">
        You still don’t have any assets. Check the store to get yours!
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Let’s Go!</button>
    </div>
  );
};
