import { v4 } from 'uuid';
import { FC, useEffect, useRef, useState } from 'react';

import places from '../../constant/places';
import DraggableLock from './DraggableLock';

import Lock, { LockProps } from './Lock';

interface DynamicContainerProps {
  bgWidth: number;
  bgHeight: number;
  locks: Array<LockProps>;
  locksOpacity?: number;
  draggableLock?: LockProps;
  placeId: number;
  onAction?(locationX: number, locationY: number): void;
}

const DynamicContainer: FC<DynamicContainerProps> = ({
  bgWidth,
  bgHeight,
  locks,
  locksOpacity,
  draggableLock,
  placeId,
  onAction,
}) => {
  const bgRef = useRef<HTMLElement | null>(null);
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    contentHeight: parseInt(
      ((0.9 * (bgHeight * window.innerWidth)) / bgWidth).toString()
    ),
  });
  const handleResize = () => {
    setResize({
      width: window.innerWidth,
      height: window.innerHeight,
      contentHeight: parseInt(
        ((0.9 * bgHeight * window.innerWidth) / bgWidth).toString()
      ),
    });
  };
  useEffect(() => {
    handleResize();
  }, [bgWidth, bgHeight]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const checkPosition = (locationX: number, locationY: number) => {
    if (
      locks.findIndex(
        (lock) =>
          Math.abs(lock.locationX - locationX) < 2 &&
          Math.abs(lock.locationY - locationY) < 2
      ) >= 0
    ) {
      return false;
    }
    return true;
  };

  const [isSelected, setIsSelected] = useState(false);
  const startDrag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof Element && e?.target?.parentElement?.id === 'svg') {
      setIsSelected(true);
    }
  };
  const endDrag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof Element && e?.target?.parentElement?.id === 'svg') {
      setIsSelected(false);
      //todo : ????????? ?????? ??????????????? ????????????
      if (bgRef && bgRef.current) {
        const x =
          (100 *
            (e.clientX -
              bgRef.current.getBoundingClientRect().left -
              0.025 * resize.width)) /
          Number(bgRef.current.offsetWidth);
        const y =
          (100 *
            (e.clientY -
              bgRef.current.getBoundingClientRect().top -
              0.025 * resize.width)) /
          Number(bgRef.current.offsetHeight);
        if (!checkPosition(x, y)) {
          alert('????????? ???????????? ????????????. ???????????? ???????????????.');
          return;
        }
        const res = window.confirm('???????????? ???????????????????');
        if (res && onAction) {
          onAction(x, y);
        }
      }
    }
  };
  const drag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isSelected) return;
    e.preventDefault();
    const svg = document.querySelector('#svg') as HTMLElement;
    if (bgRef && bgRef.current) {
      const x =
        (100 *
          (e.clientX -
            bgRef.current.getBoundingClientRect().left -
            0.025 * resize.width)) /
        Number(bgRef.current.offsetWidth);
      const y =
        (100 *
          (e.clientY -
            bgRef.current.getBoundingClientRect().top -
            0.025 * resize.width)) /
        Number(bgRef.current.offsetHeight);
      checkPosition(x, y);
      if (svg && x > 2.5 && x < 97.5 && y > 2.5 && y < 97.5) {
        svg.style.left = `${x}%`;
        svg.style.top = `${y}%`;
      }
    }
  };
  return (
    <main
      className={`relative bg-no-repeat bg-cover bg-center border-2 border-black rounded-xl`}
      style={{
        backgroundImage: `url(${
          places.find((place) => place.id === placeId)?.bgImgSrc
        })`,
        width: `calc(${resize.width}px - ${resize.width < 768 ? '1' : '3'}rem)`,
        height: `${resize.contentHeight}px`,
      }}
      ref={bgRef}
      onMouseDown={(e) => startDrag(e)}
      onMouseMove={(e) => drag(e)}
      onMouseUp={(e) => endDrag(e)}
    >
      <div className="absolute text-sm md:text-lg top-1 left-1 md:top-6 md:left-6 bg-white rounded-full px-4 py-1 md:px-8 md:py-2 text-black border-black border">
        {places.find((place) => place.id === placeId)?.name}
      </div>
      {locks.map((lock) => (
        <Lock
          key={v4()}
          lockType={lock.lockType}
          locationY={lock.locationY}
          locationX={lock.locationX}
          lockerTitle={lock.lockerTitle}
          opacity={locksOpacity}
        />
      ))}
      {draggableLock && (
        <DraggableLock
          lockType={draggableLock.lockType}
          locationY={draggableLock.locationY}
          locationX={draggableLock.locationX}
        />
      )}
    </main>
  );
};
export default DynamicContainer;
