'use client';

import { useState } from 'react';
import { DistrictsSchemaType } from './districts.schema';
import useDragScroll from '@/hooks/use-drag-scroll';
import { Button, Popconfirm, Table, type TableProps } from 'antd';
import { PenIcon, TrashIcon } from '@/components/icons';
import { DistrictsForm } from './districts.form';

const data: DistrictsSchemaType = {
  name: 'Hoàn kiếm',
  code: 'hoankiem',
  city: 1,
  slug: 'hoan-kiem',
};

const dataSource: DistrictsSchemaType[] = Array.from({ length: 10 }, () => ({ ...data }));

export const DistrictsTable = () => {
  const [currentState, setCurrentState] = useState<DistrictsSchemaType | undefined>(undefined);

  const dragScrollHandlers = useDragScroll();

  const columns: TableProps<DistrictsSchemaType>['columns'] = [
    {
      title: 'Quận/huyện',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mã',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
    },

    {
      title: 'Hành động',
      key: 'action',
      align: 'center',
      width: 120,
      render: () => (
        <div className="flex justify-center items-center gap-1">
          <Button
            icon={<PenIcon className="fill-link_text_l dark:fill-link_text_d" />}
            type="text"
            onClick={() => setCurrentState(data)}
          />
          <Popconfirm
            title="Bạn có muốn xoá?"
            okText="Có"
            cancelText="Không"
            placement="bottomRight"
          >
            <Button icon={<TrashIcon className="fill-error_l dark:fill-error_d" />} type="text" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        {...dragScrollHandlers}
        className="overflow-x-auto overflow-y-hidden mt-6"
        style={{ cursor: dragScrollHandlers.cursor }}
      >
        <Table
          dataSource={dataSource}
          tableLayout="auto"
          columns={columns}
          size="small"
          pagination={false}
          rowClassName={(_, index) =>
            index % 2 === 0
              ? 'bg-primary_color_l dark:bg-primary_color_d'
              : 'bg-background_l_2 dark:bg-background_d'
          }
        />
      </div>

      <DistrictsForm
        open={Boolean(currentState)}
        onClose={() => setCurrentState(undefined)}
        initialValues={currentState}
      />
    </>
  );
};
