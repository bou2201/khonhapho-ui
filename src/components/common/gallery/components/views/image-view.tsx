'use client';

import { Palette } from 'color-thief-react';
import Image from 'next/image';
import React from 'react';
import { PhotoView } from 'react-photo-view';
import MediaViewOverlay from './overlay';

export type AspectRatio = '1/1' | '16/9' | '9/16' | 'auto';

export type ImageViewProps = {
  src?: string;
  className?: string;
  aspect?: AspectRatio;
  visibility?: boolean;
  numberOverlay?: number;
};

// Ảnh logo hiện tại

const ImageView: React.FC<ImageViewProps> = ({
  src,
  aspect = 'square',
  className = '',
  visibility = true,
  numberOverlay = 0,
}) => {
  return (
    <PhotoView key={src} src={src}>
      {visibility ? (
        <div className={`overflow-hidden relative flex justify-center items-center ${className}`}>
          {/* Màu nền theo ảnh */}
          <Palette src={src ?? ''} format="hex">
            {({ data }) => {
              return (
                <div
                  className="absolute z-0 top-0 left-0 right-0 bottom-0"
                  style={{
                    backgroundColor:
                      data?.[0] === '#2c2c2c' && data?.[1] === '#e7e7e7' ? data?.[1] : data?.[0],
                  }}
                ></div>
              );
            }}
          </Palette>
          <Image
            className="w-full max-w-[600px] max-h-[600px] h-full object-cover relative z-10"
            style={{
              aspectRatio: aspect,
            }}
            width={0}
            height={0}
            src={src ?? 'error'}
            alt={src ?? 'error'}
            unoptimized
            placeholder="empty"
            loading="lazy"
            // blurDataURL={BLUR_DATA_URL}
          />
          <MediaViewOverlay number={numberOverlay} />
        </div>
      ) : undefined}
    </PhotoView>
  );
};

export default ImageView;
