'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Segmented as SegmentedAntd } from 'antd';
import { useCallback, useState } from 'react';

type SegmentedProps = {
  options: SegmentedOptionProps[];
  block?: boolean;
  size?: 'small' | 'middle' | 'large';
  children?: React.ReactNode;
  className?: string;
};

type SegmentedOptionProps = {
  label: React.ReactNode | string;
  value: string;
  disabled?: boolean;
  component: React.ReactNode;
};

const useSegmented = (options: SegmentedOptionProps[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const tab = useSearchParams().get('tab');

  const [value, setValue] = useState<string>(tab ?? options[0].value);

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      router.push(pathname + '?tab=' + value);
    },
    [pathname, router],
  );

  return { value, handleChange };
};

const Segmented = ({
  options,
  block = false,
  size = 'middle',
  children,
  className,
}: SegmentedProps) => {
  const { value, handleChange } = useSegmented(options);

  return (
    <>
      <div>
        <SegmentedAntd
          options={options}
          block={block}
          size={size}
          value={value}
          onChange={handleChange}
          className={className}
        />
      </div>
      {children}
      {options.find((option) => option.value === value)?.component}
    </>
  );
};

const SegmentedWithNode = ({
  options,
  block = false,
  size = 'middle',
  children,
  className,
  element,
}: SegmentedProps & { element: React.ReactNode }) => {
  const { value, handleChange } = useSegmented(options);

  return (
    <>
      <div className="flex w-full justify-between">
        <SegmentedAntd
          options={options}
          block={block}
          size={size}
          value={value}
          onChange={handleChange}
          className={className}
        />
        {element}
      </div>
      {children}
      {options.find((option) => option.value === value)?.component}
    </>
  );
};

export {
  Segmented,
  SegmentedWithNode,
  useSegmented,
  type SegmentedProps,
  type SegmentedOptionProps,
};
