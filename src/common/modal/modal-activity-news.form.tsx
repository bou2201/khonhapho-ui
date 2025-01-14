import { UploadInput } from '@/components/common';
import { MsgValidation } from '@/constants/enums';
import useUpload from '@/hooks/use-upload';
import { FieldFormActivityNewsType } from '@/modules/client/activity-news/department';
import { Button, message, Modal, Spin } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TiptapEditor from '../tiptap';

interface ModalActivityNewsFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValue?: FieldFormActivityNewsType;
  onSuccess?: (post: FieldFormActivityNewsType) => void;
  title?: string;
}
const ModalActivityNewsForm = ({
  defaultValue,
  open,
  setOpen,
  onSuccess,
  title,
}: ModalActivityNewsFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string>(defaultValue?.content || '');
  const [contentError, setContentError] = useState<string | undefined>();
  const imagesUpload = useUpload(defaultValue?.images);
  const handleSubmit = () => {
    if (!content) {
      setContentError(MsgValidation.REQUIRED);
      return;
    }
    setLoading(true);
    console.log(imagesUpload.fileList);

    setTimeout(() => {
      setLoading(false);
      message.success(defaultValue?.id ? 'Cập nhật thành công' : 'Thêm thành công');
      onSuccess?.({
        ...defaultValue,
        id: defaultValue?.id || new Date().getTime().toString(),
        content: content,
        images: imagesUpload.fileList.map((item) =>
          item.thumbUrl ? URL.createObjectURL(item.originFileObj as Blob) : (item.url as string),
        ),
      });
      setOpen(false);
    }, 1000);
  };
  return (
    <Modal
      open={open}
      centered
      title={defaultValue?.id ? 'Cập nhật bài viết' : 'Tạo bài viết'}
      classNames={{
        header: 'text-center sm:[&>div]:!text-xl' + (!loading ? '' : ' opacity-30'),
      }}
      width={'100%'}
      onCancel={() => {
        !loading && setOpen(false);
      }}
      onClose={() => {
        !loading && setOpen(false);
      }}
      footer={null}
      maskClosable={false}
      className="max-w-[98vw] sm:max-w-[520px] md:max-w-[680] lg:max-w-[760px]"
    >
      <Spin spinning={loading} size="large">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                className="w-full h-full object-cover rounded-full"
                src={'/images/user-default.jpg'}
                alt={'avatar'}
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col">
              <div className="">
                <Link
                  className="flex gap-1 font-semibold text-primary_text_l dark:text-primary_text_d_2 hover:underline"
                  href={'user/profile'}
                >
                  <span>CV Lương Quang Trọng</span>
                  <span>·</span>
                  <span>NPVN-0000</span>
                </Link>
              </div>
              <div className="text-secondary_text_l dark:text-secondary_text_d">
                {title ?? 'Đăng tin'}
              </div>
            </div>
          </div>
          <div>
            <div
              className={clsx(
                'bg-black/5 dark:bg-white/10 rounded-lg border border-solid',
                contentError ? 'border-error_l dark:border-error_d' : 'border-transparent',
              )}
            >
              <TiptapEditor
                className="p-2 [&>div.tiptap]:min-h-64 w-full"
                config={{ limit: 3000, placeholder: 'Bắt đầu một bài viết...' }}
                content={content}
                onChange={(html) => {
                  setContent(html);
                  if (html) setContentError(undefined);
                }}
                showCount
              />
            </div>
            {contentError && <div className="text-error_l dark:text-error_d">{contentError}</div>}
          </div>
          <div className="flex">
            <div className="me-3">Ảnh</div>
            <div className="flex dark:[&_.ant-upload.ant-upload-select]:!bg-white/10">
              <UploadInput
                {...imagesUpload}
                maxCount={6}
                multiple
                accept=".jpg, .jpeg, .png, .webm, .heic"
              />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              type="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              {defaultValue?.id ? 'Cập nhật' : 'Đăng'}
            </Button>
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export { ModalActivityNewsForm };
export type { ModalActivityNewsFormProps };
