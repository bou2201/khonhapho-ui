import { ModalBooking } from '@/common/modal';
import {
  AlarmIcon,
  BookmarkIcon,
  CopyDocumentIcon,
  NoteIcon,
  PeopleGroup,
} from '@/components/icons';
import { useState } from 'react';
import FormReportPopup from '../popup/form-report';
import ListOfReportsPopup from '../popup/list-of-reports';
import NotePopup from '../popup/note';
import SuitableCustomerPopup from '../popup/suitable-customer';

const PopupGroup = () => {
  const [isShowReportPopup, setIsShowReportPopup] = useState<boolean>(false);

  return (
    <>
      <ListOfReportsPopup
        open={isShowReportPopup}
        onCancel={() => {
          setIsShowReportPopup(false);
        }}
        onOk={() => {
          setIsShowReportPopup(false);
        }}
        setOpen={() => {
          setIsShowReportPopup(false);
        }}
      />
    </>
  );
};
const SuitableCustomer = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="min-w-8 sm:min-w-10 flex gap-1 items-center justify-center hover:bg-background_l_2 rounded-md px-1 sm:px-2 py-2 text-sm dark:text-primary_text_d text-secondary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d relative cursor-pointer"
        onClick={() => {
          setIsShow(true);
        }}
      >
        <PeopleGroup />
        <span className="flex items-center justify-center absolute text-[8px] bg-red-500 text-white rounded-full w-3 h-3 top-0 right-0 select-none">
          10
        </span>
      </div>
      {isShow && (
        <SuitableCustomerPopup
          open
          onCancel={() => {
            setIsShow(false);
          }}
          onOk={() => {
            setIsShow(false);
          }}
          setOpen={() => {
            setIsShow(false);
          }}
        />
      )}
    </>
  );
};
const Booking = () => {
  const [isShowBooking, setIsShowBooking] = useState<boolean>(false);

  return (
    <>
      <div
        className="min-w-8 sm:min-w-10 flex gap-1 items-center justify-center hover:bg-background_l_2 rounded-md px-1 sm:px-2 py-2 text-sm dark:text-primary_text_d text-primary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d cursor-pointer select-none"
        onClick={() => {
          setIsShowBooking(true);
        }}
      >
        <AlarmIcon width={17} height={20} />
        <span className="ms-1">Đặt lịch</span>
      </div>
      {isShowBooking && (
        <ModalBooking
          open
          handleCancel={() => {
            setIsShowBooking(false);
          }}
        />
      )}
    </>
  );
};
const Note = () => {
  const [isShowNotePopup, setIsShowNotePopup] = useState<boolean>(false);

  return (
    <>
      <div className="min-w-8 sm:min-w-10 flex gap-1 items-center justify-center hover:bg-background_l_2 rounded-md px-1 sm:px-2 py-2 text-sm dark:text-primary_text_d text-primary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d cursor-pointer select-none">
        <BookmarkIcon className="fill-[#FF4D4F] scale-90" />
        <span className="ms-1">Lưu</span>
      </div>
      <div
        className="min-w-8 sm:min-w-10 flex gap-1 items-center justify-center hover:bg-background_l_2 rounded-md px-1 sm:px-2 py-2 text-sm dark:text-primary_text_d text-primary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d cursor-pointer select-none"
        onClick={() => setIsShowNotePopup(true)}
      >
        <NoteIcon className="fill-[#FFB547]" />
        <span className="ms-1">Ghi chú</span>
      </div>
      <NotePopup
        open={isShowNotePopup}
        onCancel={() => setIsShowNotePopup(false)}
        onOk={() => {
          setIsShowNotePopup(false);
        }}
        setOpen={() => {
          setIsShowNotePopup(false);
        }}
      />
    </>
  );
};
const NewReport = () => {
  const [isShowReport, setIsShowReport] = useState<boolean>(false);
  return (
    <>
      <div
        className="min-w-8 sm:min-w-10 flex gap-1 items-center justify-center hover:bg-background_l_2 rounded-md px-1 sm:px-2 py-2 text-sm dark:text-primary_text_d text-primary_text_l dark:hover:text-primary_text_d dark:hover:bg-background_d cursor-pointer select-none"
        onClick={() => {
          setIsShowReport(true);
        }}
      >
        <CopyDocumentIcon />
        <span className="ms-1">Báo cáo</span>
      </div>
      <FormReportPopup open={isShowReport} setOpen={setIsShowReport} />
    </>
  );
};
export { Booking, NewReport, Note, SuitableCustomer };
export default PopupGroup;