import Loading from '@/app/loading';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Đăng tin',
};

const WarehouseCreateDynamic = dynamic(
  () => import('@/common/form').then((res) => res.WarehouseForm),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

const WarehouseCreatePage = () => {
  return <WarehouseCreateDynamic />;
};

export default WarehouseCreatePage;
