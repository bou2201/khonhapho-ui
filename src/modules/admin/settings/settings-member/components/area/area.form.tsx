'use client'

import { createSchemaFieldRule } from "antd-zod";
import { AreaSchema, AreaSchemaType } from "./area.schema";
import { Button, Form, Input, Modal } from "antd";
import { convertSlugify } from "@/utilities/func.util";

type AreaFormProps = {
  open: boolean;
  onClose: () => void;
  initialValues?: AreaSchemaType;
};

const rule = createSchemaFieldRule(AreaSchema);

export const AreaForm = ({ open, onClose, initialValues }: AreaFormProps) => {
  const [form] = Form.useForm<AreaSchemaType>();

  const handleSubmit = async (values: AreaSchemaType) => {
    console.log(values);
    // handle logic register submit
    // ...
  };

  return (
    <Modal
      title={`${initialValues ? 'Sửa' : 'Thêm'} khoảng diện tích`}
      open={open}
      onCancel={onClose}
      width={600}
      footer={null}
    >
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={handleSubmit}
        layout="horizontal"
        labelCol={{ span: 16, lg: 8, sm: 10 }}
        className="mt-4"
      >
        <Form.Item<AreaSchemaType>
          name="name"
          label="Khoảng diện tích:"
          required
          rules={[rule]}
        >
          <Input
            size="large"
            className="h-10 dark:!bg-primary_color_d"
            onBlur={(e) => {
              form.setFieldValue('code', convertSlugify(e.target.value));
            }}
          />
        </Form.Item>

        <Form.Item<AreaSchemaType> name="code" label="Mã:" rules={[rule]}>
          <Input size="large" className="h-10 dark:!bg-primary_color_d" disabled />
        </Form.Item>

        <div className="flex justify-end">
          <Button type="primary" size="large" htmlType="submit">
            Lưu
          </Button>
        </div>
      </Form>
    </Modal>
  );
}