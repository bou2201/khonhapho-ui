'use client';

import { MsgValidation } from '@/constants/enums';
import useFetchLocation from '@/hooks/use-fetch-location';
import { Form, FormProps, Input, Modal, Select } from 'antd';
import { ModalProps } from 'antd/lib';
import { Dispatch, SetStateAction, useEffect } from 'react';
interface IProps extends ModalProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  value?: ModalUrgentlyType;
  isUpdate?: boolean;
}
type ModalUrgentlyType = {
  city?: string;
  districts?: string;
  price?: string;
  area?: string;
  request?: string;
};

const CustomModal = ({
  open = false,
  onClose,
  onCancel,
  setOpen,
  onOk,
  value,
  isUpdate,
}: IProps) => {
  const [form] = Form.useForm<ModalUrgentlyType>();

  const { cities, districts, fetchCities, fetchDistricts } = useFetchLocation();
  const onFinish: FormProps<ModalUrgentlyType>['onFinish'] = (values) => {
    console.log('Success:', values);
    setOpen && setOpen(false);
    //
  };

  const onFinishFailed: FormProps<ModalUrgentlyType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);
  useEffect(() => {
    const a = form.getFieldValue('city');
    console.log(a);
  }, [cities, form]);
  useEffect(() => {
    if (value) form.setFieldsValue(value);
  }, [value, form]);

  const customCity = Form.useWatch('city', form);
  const customDistricts = Form.useWatch('districts', form);
  return (
    <div>
      <Modal
        title={isUpdate ? 'Chỉnh sử bài viết' : 'Tạo bài viết'}
        centered
        okText="Lưu"
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        open={open}
        className="dark:bg-background_d dark:text-primary_text_d dark:[&_.ant-modal-close-icon_svg]:fill-white p-0 my-5 max-w-[760px]"
        classNames={{
          content: 'dark:bg-background_d dark:text-primary_text_d !px-0 !py-3',
          header:
            'text-center dark:bg-background_d dark:[&>div]:!text-primary_text_d [&>div]:!text-lg !px-3',
          mask: 'dark:!fill-white',
        }}
        onClose={(e) => {
          onClose && onClose(e);
          setOpen && setOpen(false);
        }}
        onCancel={(e) => {
          onCancel && onCancel(e);
          setOpen && setOpen(false);
        }}
        onOk={(e) => {
          onOk && onOk(e);
          setOpen && setOpen(false);
        }}
        width={'100%'}
      >
        <div className="w-full">
          <Form
            name="report"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
            layout="vertical"
          >
            <div className="w-full h-[1px] bg-black/5 dark:bg-divider_d"></div>
            <div className="w-full px-5 flex flex-col mt-3">
              <Form.Item<ModalUrgentlyType>
                label="Thành phố"
                name="city"
                rules={[{ required: true, message: MsgValidation.REQUIRED }]}
              >
                <Select
                  className="h-9 w-full"
                  placeholder="Tỉnh/Thành phố"
                  onChange={(value) => {
                    const id = cities.find((item) => item.code === value)?.id;
                    if (id) fetchDistricts(id);
                  }}
                  value={form.getFieldValue('city')}
                  fieldNames={{ label: 'name', value: 'code' }}
                  options={cities}
                  showSearch
                ></Select>
              </Form.Item>
              <Form.Item<ModalUrgentlyType>
                label="Quận/Huyện"
                name="districts"
                rules={[{ required: true, message: MsgValidation.REQUIRED }]}
              >
                <Select
                  className="h-9 w-full"
                  placeholder="Quận/Huyện"
                  disabled={!customCity || customCity === '-1'}
                  loading={!!customCity && customCity !== '-1' && !districts.length}
                  allowClear
                  value={form.getFieldValue('districts')}
                  fieldNames={{ label: 'name', value: 'code' }}
                  options={districts}
                ></Select>
              </Form.Item>
              <div className="flex gap-2">
                <Form.Item<ModalUrgentlyType>
                  className="flex-1"
                  label="Tài chính"
                  name="price"
                  rules={[{ required: true, message: MsgValidation.REQUIRED }]}
                >
                  <Input className="py-2 w-full" placeholder="10-13 tỷ" />
                </Form.Item>
                <Form.Item<ModalUrgentlyType>
                  className="flex-1"
                  label="Diện tích"
                  name="area"
                  rules={[{ required: true, message: MsgValidation.REQUIRED }]}
                >
                  <Input className="py-2 w-full" placeholder="102m²" />
                </Form.Item>
              </div>

              <Form.Item<ModalUrgentlyType>
                className="flex-1"
                label="Yêu cầu"
                name="request"
                rules={[{ required: true, message: MsgValidation.REQUIRED }]}
              >
                <Input.TextArea rows={4} placeholder="Nhập yêu cầu" />
              </Form.Item>
            </div>
            <div className="flex justify-center mt-3 px-6">
              <button className="w-[45%] cursor-pointer border-none py-1 rounded-md text-white bg-color_l">
                {isUpdate ? 'Cập nhật' : 'Đăng'}
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
const ModalUrgently = ({ open = false, onClose, onCancel, setOpen, value, isUpdate }: IProps) => {
  return (
    <>
      {open ? (
        <CustomModal
          open={open}
          onClose={onClose}
          onCancel={onCancel}
          setOpen={setOpen}
          value={value}
          isUpdate={isUpdate}
        />
      ) : null}
    </>
  );
};
export { ModalUrgently };
export type { ModalUrgentlyType };
