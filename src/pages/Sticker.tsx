import mainImg from '../assets/sticker/main.png';
import thumb2 from '../assets/sticker/thumb2.png';
import thumb3 from '../assets/sticker/thumb3.png';
import { Button } from '../shared/ui/button';

export const Sticker = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Title and Collection */}
      <section className="px-4 flex flex-col gap-4 mt-[8px]">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-[22px] tracking-[0.03em]">The Dye Cut Pack</h1>
          <div className="flex items-center gap-2">
            <span className="text-white text-[16px] font-bold">Armor Collection</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#72C0EC]">
              <span className="block w-2.5 h-2.5 border-2 border-black border-l-0 border-t-0 rotate-[-45deg]"></span>
            </span>
          </div>
        </div>
        <p className="text-[#AFB0B0] text-[17px] leading-[1.2]">
          Limited edition Sticker Pack collection inspired by classic 16-bit gaming.
        </p>
      </section>

      {/* Rarity */}
      <div className="px-4 flex items-center gap-6">
        <span className="text-[#72C0EC] text-[14px] font-bold">COMMON</span>
      </div>

      {/* Main Image */}
      <div className="mx-4 w-[358px] h-[358px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
        <img src={mainImg} alt="sticker" className="w-full h-full object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="px-4 flex items-center gap-2">
        <div className="w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
          <img src={mainImg} alt="thumb" className="w-full h-full object-cover" />
        </div>
        <div className="w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
          <img src={thumb2} alt="thumb" className="w-full h-full object-cover" />
        </div>
        <div className="w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
          <img src={thumb3} alt="thumb" className="w-full h-full object-cover" />
        </div>
        <div className="w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
          <img src={mainImg} alt="thumb" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-2 px-4 pt-2 border-t border-white/10 bg-[#151413]">
        <Button leftText="" rightText="Get Free" icons color="yellow" className="w-[358px] h-[50px]" />
        <div className="h-[34px]" />
      </div>
    </div>
  );
};

export default Sticker;

