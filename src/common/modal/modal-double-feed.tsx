import { SearchIcon } from '@/components/icons';
import { Empty, Input, Modal } from 'antd';
import { memo } from 'react';

/**
 * Modal Double Feed - Modal Nhân bản tin đăng (thêm/sửa tin trong kho)
 *
 * @property {boolean} [open]
 * @property {() => void} [handleCancel]
 * @returns {JSX.Element}
 */
export const ModalDoubleFeed = memo(
  ({ open, handleCancel }: { open: boolean; handleCancel: () => void }): JSX.Element => {
    return (
      <Modal
        title="Tin của bạn"
        open={open}
        onCancel={handleCancel}
        width={500}
        footer={null}
        centered
      >
        <div className="flex justify-end my-3">
          <Input
            size="large"
            placeholder="Nhập đc, SĐT, seri sổ"
            prefix={<SearchIcon className="w-4 h-4" />}
            className="w-[300px] border-0 shadow-btn dark:bg-background_d rounded-xl"
          />
        </div>
        <Empty description="Không có kết quả nào trên hệ thống!" className="mt-5 mb-2" />
      </Modal>
    );
  },
);

ModalDoubleFeed.displayName = ModalDoubleFeed.name;
