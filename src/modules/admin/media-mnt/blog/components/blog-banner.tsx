import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type BlogBannerProps = {
  className?: string;
  src?: string;
  onClick?: () => void;
};

const BlogBanner: React.FC<BlogBannerProps> = ({ src, className, onClick }) => {
  if (!src) return null;
  return (
    <div
      className={clsx('w-full aspect-[23/8] overflow-hidden', className)}
      onClick={() => {
        onClick?.();
      }}
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt="Ảnh banner cho sự kiện"
        width={0}
        height={0}
        unoptimized
        loading="lazy"
      />
    </div>
  );
};

export default BlogBanner;