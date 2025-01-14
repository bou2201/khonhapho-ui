'use client';

import { TextSeeMore } from '@/components/common';
import {
  MessengerImage,
  MessengerKNPImage,
  PhoneImage,
  ZaloImage,
} from '@/components/common/image-components';
import { BlueEyeIcon, HeartRedIcon } from '@/components/icons';
import {
  Comment,
  CommentTypes,
  ImageGrid,
  ModalCommentList,
} from '@/components/reuse/data-display';
import LikeShareComment from '@/components/reuse/data-display/post/like-share-comment';
import { ThreeDot, ThreeDotEventProps } from '@/components/reuse/data-display/post/three-dot';
import { Routes } from '@/constants/enums';
import { convertYouTubeLinksToIframe } from '@/utilities/func.text';
import { getTimeAgo } from '@/utilities/func.time';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LibNhaPhoTypes } from './lib.types';

type PostDetailTypesProps = {
  post?: LibNhaPhoTypes;
  classNames?: {
    root?: string;
  };
  className?: string;
  threeDot?: boolean;
  threeDotEvents?: ThreeDotEventProps;
  isCompanyPost?: boolean;
  conHashtagClick?: (hashtag?: string) => void;
};

const LibNhaPhoPost = ({
  post,
  threeDotEvents,
  className,
  isCompanyPost,
  conHashtagClick,
}: PostDetailTypesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isOpenModalComment, setIsOpenModalComment] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(post?.like_count || 0);
  const [comments, setComments] = useState<CommentTypes[]>();
  const [postWidth, setPostWidth] = useState<number>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setLikeCount(post?.like_count || 0);
    setComments(post?.comments);
  }, [post]);
  useEffect(() => {
    const handleResize = () => {
      setPostWidth(rootRef.current?.clientWidth || 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [post, rootRef]);
  const commentCount = post?.comments?.length || 0;
  const imagesCount = post?.images?.length || 0;

  const contentReplaceYoutube = convertYouTubeLinksToIframe(post?.content || '');
  return (
    <>
      <div
        ref={rootRef}
        className={clsx(
          'bg-white dark:bg-primary_color_d w-full sm:rounded-lg rounded-none py-2 sm:py-4',
          commentCount === 0 ? '!pb-0' : '',
          className,
        )}
      >
        <div className="w-full px-3 sm:px-4">
          <div className="flex justify-between items-end relative">
            <div className="flex">
              <div>
                <Image
                  className="w-10 h-10 rounded-full mr-3"
                  width={40}
                  height={40}
                  src="/images/user-default.jpg"
                  alt="User"
                />
              </div>
              <div>
                <Link
                  className="font-semibold text-primary_text_l dark:text-primary_text_d sm:text-base"
                  href={Routes.User + '/' + 'id'}
                >
                  Nhà Phố Việt Nam
                </Link>
                <div className="[&_span]:text-sm text-secondary_text_l dark:text-primary_text_d flex gap-[10px]">
                  <span className={clsx('gap-[10px] flex')}>
                    <span>{getTimeAgo(post?.created_at)}</span>
                    <span>•</span>
                    <span>{post?.category}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className={clsx('absolute top-0 right-0')}>
              <ThreeDot threeDotEvents={threeDotEvents} />
            </div>
          </div>
          <div className="mt-2 font-semibold text-base">{post?.title}</div>
          <div className="">
            <TextSeeMore _html={contentReplaceYoutube} maxLine={3} className="[&_p]:mb-[2px]" />
          </div>
          <div className={clsx('mt-2', imagesCount)}>
            <div className={'flex-wrap gap-2 flex'}>
              {post?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-link_text_l cursor-pointer hover:underline lowercase"
                  onClick={() => {
                    if (conHashtagClick) conHashtagClick(tag);
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={clsx('mt-2', imagesCount > 0 ? '' : 'hidden')}>
          <div>
            <ImageGrid images={post?.images || []} />
          </div>
        </div>
        <div className="w-full px-3 sm:px-4">
          <div className={clsx(imagesCount > 0 ? 'mt-1' : 'mt-2', 'mb-2')}>
            <div className="flex justify-between">
              <div className="flex gap-3">
                {post?.view_count && post?.view_count > 0 && (
                  <div className="flex gap-1 items-center dark:text-primary_text_d">
                    <BlueEyeIcon />
                    <span className="text-sm">{post?.view_count}</span>
                  </div>
                )}
                {likeCount > 0 && (
                  <div className="flex gap-1 items-center dark:text-primary_text_d">
                    <HeartRedIcon />
                    <span className="text-sm">{likeCount}</span>
                  </div>
                )}
              </div>
              <div className={clsx('flex gap-0', isCompanyPost ? 'hidden' : 'flex')}>
                <a
                  href="https://www.facebook.com/messages/t/100010636721382"
                  target="_blank"
                  className="flex gap-1 items-center hover:bg-background_l_2 rounded-md px-2 py-2 text-sm dark:text-primary_text_d text-secondary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d"
                >
                  <MessengerKNPImage className="w-4 h-4" />
                  <span
                    className={clsx('inline-block text-nowrap', postWidth < 480 ? 'hidden' : '')}
                  >
                    Chat
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/messages/t/100010636721382"
                  target="_blank"
                  className="flex gap-1 items-center hover:bg-background_l_2 rounded-md px-2 py-2 text-sm dark:text-primary_text_d text-secondary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d"
                >
                  <MessengerImage className="w-4 h-4" />
                  <span
                    className={clsx('inline-block text-nowrap', postWidth < 480 ? 'hidden' : '')}
                  >
                    Messenger
                  </span>
                </a>
                <a
                  href="https://zalo.me/0389619050"
                  target="_blank"
                  className="flex gap-1 items-center hover:bg-background_l_2 rounded-md px-2 py-2 text-sm dark:text-primary_text_d text-secondary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d"
                >
                  <ZaloImage className="w-4 h-4" />
                  <span
                    className={clsx('inline-block text-nowrap', postWidth < 480 ? 'hidden' : '')}
                  >
                    Zalo
                  </span>
                </a>

                <a
                  href="tel:0389619050"
                  className="flex gap-1 items-center hover:bg-background_l_2 rounded-md px-2 py-2 text-sm dark:text-primary_text_d text-secondary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d"
                >
                  <div className="w-4 h-4">
                    <PhoneImage />
                  </div>
                  <span
                    className={clsx('inline-block text-nowrap', postWidth < 480 ? 'hidden' : '')}
                  >
                    Điện thoại
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full h-[1px] bg-divider_l dark:bg-divider_d"></div>
            <LikeShareComment setLikeCount={setLikeCount} liked={isLiked} setLiked={setIsLiked} />
            {commentCount > 0 && (
              <div className="w-full h-[1px] bg-divider_l dark:bg-divider_d"></div>
            )}
          </div>
          {commentCount > 0 && (
            <div className="mt-4">
              <div className="w-full flex flex-col gap-2">
                {comments?.[0] && (
                  <Comment
                    comment={comments?.[0]}
                    onClick={() => {
                      setIsOpenModalComment(true);
                    }}
                    onReplyClick={() => {
                      setIsOpenModalComment(true);
                      return true;
                    }}
                    isPreview
                  />
                )}
              </div>
            </div>
          )}
          {commentCount > 0 && (
            <div className="mt-4 max-[640px]:hidden">
              <div className="flex justify-between items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image width={40} height={40} src="/images/user-default.jpg" alt="" />
                </div>
                <div className="relative flex-1 bg-black/5 dark:bg-[#151E2F] rounded-2xl py-[2px] px-3">
                  <div
                    className="w-full h-9 bg-transparent focus:outline-none border-none outline-none flex items-center"
                    onClick={() => {
                      setIsOpenModalComment(true);
                    }}
                  >
                    <span className="select-none opacity-60">Viết bình luận ...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isOpenModalComment && <ModalCommentList open onClose={() => setIsOpenModalComment(false)} />}
    </>
  );
};
export { LibNhaPhoPost };
export type { PostDetailTypesProps };
