'use client';

import { SectionBody, TabLabelWithBadge } from '@/components/common';
import { CollapseIcon, SearchIcon, XIcon } from '@/components/icons';
import { SegmentedOptionProps } from '@/components/reuse/data-display';
import { useSidebar } from '@/components/reuse/navigation';
import { useDivWidth } from '@/hooks/use-div-width';
import { Button, Segmented, Tooltip } from 'antd';
import clsx from 'clsx';
import { useRouter } from 'next-nprogress-bar';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import DealsApprovedIndex from './deals-approved';
import DealsPendingIndex from './deals-pending';
import DealsRejectIndex from './deals-reject';

type HeaderProps = {
  segmentedValue: string;
  handleSegmentedChange: (value: string) => void;
  searchString?: string;
  onSearchStringChange?: (value: string) => void;
  tabs?: SegmentedOptionProps[];
};

const TAB_INFO = [
  {
    label: 'Chờ duyệt',
    value: 'pending',
    count: 0,
    searchQuery: '',
    component: DealsPendingIndex,
  },
  {
    label: 'Đã duyệt',
    value: 'approved',
    count: 0,
    searchQuery: '',
    component: DealsApprovedIndex,
  },
  {
    label: 'Từ chối',
    value: 'reject',
    count: 0,
    searchQuery: '',
    component: DealsRejectIndex,
  },
];

const Header = ({
  segmentedValue,
  searchString,
  tabs,
  handleSegmentedChange,
  onSearchStringChange,
}: HeaderProps) => {
  const [searchInput, setSearchInput] = useState<string>(searchString ?? '');
  const { divRef: containerRef, width: containerWidth } = useDivWidth({ delay: 50 });
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setSearchInput(searchString ?? '');
  }, [searchString]);
  const containerWidthLessThan768 = containerWidth != 0 && containerWidth < 768;
  return (
    <div
      ref={containerRef}
      className={clsx('flex justify-between w-full', containerWidthLessThan768 ? 'flex-wrap' : '')}
    >
      <div className="w-full overflow-y-auto scrollbar-hide">
        <Segmented
          options={tabs ?? []}
          value={segmentedValue}
          onChange={handleSegmentedChange}
          className={clsx(
            'dark:!bg-background_d !bg-black/5',
            containerWidthLessThan768 ? '[&_.ant-segmented-item]:!px-2' : '',
          )}
          block={containerWidthLessThan768}
        />
      </div>
      <div
        className={clsx(
          'flex bg-white border border-solid border-divider_l dark:border-divider_d rounded-xl overflow-hidden relative dark:bg-black/10 min-h-10 min-w-[280px]',
          containerWidthLessThan768 ? 'min-h-9 mt-2 w-full' : '',
        )}
      >
        <input
          ref={inputRef}
          className="border-none pl-2 focus-visible:outline-none bg-transparent dark:bg-transparent flex-1"
          type="text"
          placeholder="Tìm kiếm"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            if (e.currentTarget.value === '') onSearchStringChange?.('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (searchInput != searchString) onSearchStringChange?.(searchInput);
            }
          }}
        />
        {searchInput && (
          <button
            className="bg-transparent border-none cursor-pointer mt-[2px]"
            onClick={() => {
              setSearchInput('');
              onSearchStringChange?.('');
              inputRef.current?.focus();
            }}
          >
            <XIcon width={12} height={12} />
          </button>
        )}

        <button
          className="bg-transparent border-transparent border-solid py-1 px-3 [&_path]:hover:!fill-color_l cursor-pointer border-l border-l-divider_l dark:border-l-divider_d"
          onClick={() => {
            if (searchInput != searchString) onSearchStringChange?.(searchInput);
          }}
        >
          <SearchIcon className="mt-[2px]" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};
export const DealsIndex = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  //
  const [firstLoaded, setFirstLoaded] = useState<boolean>(false);
  const [tabs, setTabs] = useState(TAB_INFO);
  const [tabString, setTabString] = useState(searchParams.get('tab') || TAB_INFO[0].value);
  const { collapsed, toggleCollapse } = useSidebar();

  //
  const renderTitle = useCallback(() => {
    if (collapsed) {
      return (
        <div className="flex items-center gap-3 h-8">
          <Tooltip title="Mở rộng" placement="bottom">
            <Button
              type="text"
              icon={<CollapseIcon className="rotate-180" />}
              onClick={toggleCollapse}
            />
          </Tooltip>
          <span>Duyệt tin thông báo vụ chốt</span>
        </div>
      );
    }

    return (
      <div className="flex items-center h-8">
        <span>Duyệt tin thông báo vụ chốt</span>
      </div>
    );
  }, [collapsed, toggleCollapse]);

  // Call api hay làm gì đó
  useEffect(() => {
    if (!firstLoaded) {
      setFirstLoaded(true);
      // Đã gọi xong api
      setTimeout(() => {
        setTabs((prev) => {
          return prev.map((tab) => ({
            ...tab,
            count: Math.floor(Math.random() * 100),
            searchQuery: searchParams.get('tab') === tab.value ? searchParams.get('q') || '' : '',
          }));
        });
      }, 200);
    } else {
      const updatedTab = searchParams.get('tab') || TAB_INFO[0].value;
      const updatedQ = searchParams.get('q');
      if (updatedQ)
        setTabs((prev) => {
          return prev.map((tab) =>
            tab.value === updatedTab ? { ...tab, searchQuery: updatedQ } : tab,
          );
        });

      setTabString(updatedTab);
    }
    return () => {};
  }, [searchParams, firstLoaded]);

  const Component = tabs.find((tab) => tab.value === tabString)?.component;
  return (
    <div>
      <div className="mx-2 sm:mx-4 lg:mx-0">
        <SectionBody title={renderTitle()}>
          <Header
            segmentedValue={tabString}
            tabs={tabs.map((tab) => ({
              label: <TabLabelWithBadge title={tab.label} count={tab.count} />,
              value: tab.value,
              component: <tab.component />,
            }))}
            handleSegmentedChange={(value) => {
              // setTabString(value);
              const s = tabs.find((tab) => tab.value === value)?.searchQuery;
              router.push(`?tab=${value}${s ? '&q=' + s : ''}`);
            }}
            searchString={tabs.find((tab) => tab.value === tabString)?.searchQuery}
            onSearchStringChange={(value) => {
              const updatedParams = new URLSearchParams(searchParams.toString());
              if (value) updatedParams.set('q', value);
              else updatedParams.delete('q');
              setTabs((prev) => {
                return prev.map((tab) =>
                  tab.value === tabString ? { ...tab, searchQuery: value } : tab,
                );
              });
              router.push(`?${updatedParams.toString()}`, undefined);
            }}
          />
        </SectionBody>
      </div>
      <div className="mx-0 sm:mx-4 lg:mx-0 rounded-lg mt-5">{Component && <Component />}</div>
    </div>
  );
};
