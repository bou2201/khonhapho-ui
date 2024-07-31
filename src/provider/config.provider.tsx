'use client';

import { sfProPlayFont } from '@/configs/font.config';
import { StyleProvider } from '@ant-design/cssinjs';
import { type ThemeConfig, theme as themeAntd, ConfigProvider as ConfigProviderAntd } from 'antd';
import { useTheme } from 'next-themes';
import locale from 'antd/locale/vi_VN';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

dayjs.locale('vi');

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#3FB44B',
    fontFamily: sfProPlayFont.style.fontFamily,
  },
};

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ConfigProviderAntd
      theme={{
        ...themeConfig,
        algorithm: theme === 'dark' ? themeAntd.darkAlgorithm : themeAntd.defaultAlgorithm,
      }}
      locale={locale}
    >
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProviderAntd>
  );
};