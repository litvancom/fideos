import React, { FC } from 'react';

const Comment: FC<{ imgSrc: string; date: string }> = ({ imgSrc, date }) => {
  return (
    <div className='flex flex-row w-full gap-2 '>
      <img className='w-14 h-14' src={imgSrc} alt='avatar' />
      <div className='w-full flex-col flex justify-between gap-2'>
        <div className='flex flex-row justify-between gap-4'>
          <div>Mike</div>
          <div>{date}</div>
        </div>
        <p className='text-xs text-gray-300'>
          ancient Greek civilization, the period following Mycenaean civilization, which ended about 1200 bce, to the
          death of Alexander the Great, in 323 bce.
        </p>
      </div>
    </div>
  );
};

export default Comment;
