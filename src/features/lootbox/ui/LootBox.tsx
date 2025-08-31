import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import starIcon from '../../../assets/icons/start-border.svg';
import starIconActive from '../../../assets/icons/start-border-active.svg';
import tonIcon from '../../../assets/icons/ton.svg';
import tonIconActive from '../../../assets/icons/ton-active.svg';
import starIconBorderGold from '../../../assets/icons/start-border-gold.svg';
import starIconBorderGray from '../../../assets/icons/start-border-gray.svg';

type LootBoxProps = {
  className?: string;
  price?: number; // price per item
  initialCount?: number;
  min?: number;
  max?: number;
  onChange?: (count: number) => void;
};

type Currency = 'stars' | 'ton';

export const LootBox = ({
  className = '',
  price = 14999,
  initialCount = 1,
  min = 1,
  max = 99,
  onChange,
}: LootBoxProps) => {
  const [count, setCount] = useState<number>(Math.min(Math.max(initialCount, min), max));
  const [currency, setCurrency] = useState<Currency>('stars');

  // underline measure for tabs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLButtonElement | null>(null);
  const tonRef = useRef<HTMLButtonElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const activeNode = currency === 'stars' ? starsRef.current : tonRef.current;
    const container = containerRef.current;
    if (activeNode && container) {
      const nodeRect = activeNode.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderlineStyle({ left: nodeRect.left - containerRect.left, width: nodeRect.width });
    }
  }, [currency]);

  // hold-to-repeat for +/- buttons
  const holdStartTimeout = useRef<number | null>(null);
  const holdInterval = useRef<number | null>(null);

  const applyDelta = useCallback(
    (delta: number) => {
      setCount((c) => {
        const raw = c + delta;
        const next = Math.max(min, Math.min(max, raw));
        if (next !== c) onChange?.(next);
        return next;
      });
    },
    [max, min, onChange],
  );

  const startHold = useCallback(
    (delta: number) => {
      applyDelta(delta);
      if (holdStartTimeout.current) window.clearTimeout(holdStartTimeout.current);
      if (holdInterval.current) window.clearInterval(holdInterval.current);
      holdStartTimeout.current = window.setTimeout(() => {
        holdInterval.current = window.setInterval(() => applyDelta(delta), 80);
      }, 350);
    },
    [applyDelta],
  );

  const stopHold = useCallback(() => {
    if (holdStartTimeout.current) {
      window.clearTimeout(holdStartTimeout.current);
      holdStartTimeout.current = null;
    }
    if (holdInterval.current) {
      window.clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
  }, []);

  const total = useMemo(() => count * price, [count, price]);

  const dec = useCallback(() => {
    setCount((c) => {
      const next = Math.max(min, c - 1);
      if (next !== c) onChange?.(next);
      return next;
    });
  }, [min, onChange]);

  const inc = useCallback(() => {
    setCount((c) => {
      const next = Math.min(max, c + 1);
      if (next !== c) onChange?.(next);
      return next;
    });
  }, [max, onChange]);

  return (
    <div className={`bg-[#1a1a1a] relative w-full rounded-t-[32px] overflow-hidden ${className}`}>
      {/* tabs */}
      <div ref={containerRef} className="relative px-4 pt-3 pb-2 gap-4">
        <div className="flex items-center justify-between">
          <button
            ref={starsRef}
            type="button"
            onClick={() => setCurrency('stars')}
            className={`flex items-center gap-2 text-[15px] font-['Russo_One'] cursor-pointer flex-1 ${
              currency === 'stars' ? 'text-[#72c0ec]' : 'text-[#B0B0B0]'
            }`}
          >
            <img
              src={currency === 'stars' ? starIconActive : starIcon}
              alt="stars"
              className="w-5 h-5"
            />
            <span>Stars</span>
          </button>
          <div className="w-[32px]" />
          <button
            ref={tonRef}
            type="button"
            onClick={() => setCurrency('ton')}
            className={`flex items-center gap-2 text-[15px] font-['Russo_One'] flex-1 cursor-pointer ${
              currency === 'ton' ? 'text-[#72c0ec]' : 'text-[#B0B0B0]'
            }`}
          >
            <img
              src={currency === 'ton' ? tonIconActive : tonIcon}
              alt="ton"
              className="w-[17px] h-[16px]"
            />
            <span>Ton</span>
          </button>
        </div>
        {/* baseline */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-white/10" />
        <span
          className="absolute bottom-0 h-1 bg-[#72c0ec] rounded transition-[left,width] duration-300 ease-out"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        />
      </div>
      <div className="box-border flex items-center justify-between pb-2 pt-4 px-4 w-full">
        {/* counter */}
        <div className="flex items-center h-[50px] w-[164px]">
          <div className="bg-[rgba(0,0,0,0.5)] flex items-center justify-between px-3 rounded-[32px] h-full w-full">
            <button
              type="button"
              aria-label="decrement"
              onClick={dec}
              onMouseDown={() => startHold(-1)}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={() => startHold(-1)}
              onTouchEnd={stopHold}
              onTouchCancel={stopHold}
              disabled={count <= min}
              className="cursor-pointer text-[16px] text-white/60 px-2 transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              −
            </button>
            <div className="text-[16px] text-center text-white font-semibold min-w-8 px-2 transition-opacity">
              {count}
            </div>
            <button
              type="button"
              aria-label="increment"
              onClick={inc}
              onMouseDown={() => startHold(1)}
              onMouseUp={stopHold}
              onMouseLeave={stopHold}
              onTouchStart={() => startHold(1)}
              onTouchEnd={stopHold}
              onTouchCancel={stopHold}
              disabled={count >= max}
              className="cursor-pointer text-[16px] text-[#72c0ec] px-2 transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>

        {/* total */}
        <div className="flex flex-col gap-1 items-end pr-2">
          <div className="flex items-center gap-2.5 transition-colors">
            <span className="text-[15px] font-bold">Total:</span>
            <div className="flex items-center gap-1">
              <img src={starIconBorderGold} alt="star" className="w-[22px] h-[22px]" />
              <span className="text-[15px] font-bold text-[#f3f084]">
                {total.toLocaleString('ru-RU')}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#afb0b0] text-[12px]">
            <span>{count}</span>
            <span>x</span>
            <div className="flex items-center gap-1">
              <img src={starIconBorderGray} alt="star" className="w-[15px] h-[15px]" />
              <span>{price.toLocaleString('ru-RU')}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none border-t border-white/10"
      />
    </div>
  );
};

export default LootBox;
