import clsx from 'clsx';

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('fill-color_l', props.className)}
      {...props}
    >
      <path d="M13.8375 3.59687L12.1734 1.93438C12.0561 1.81647 11.9165 1.72293 11.7629 1.65911C11.6092 1.59529 11.4445 1.56246 11.2781 1.5625C10.9391 1.5625 10.6203 1.69531 10.3813 1.93438L8.59063 3.725C8.47272 3.84238 8.37918 3.98191 8.31536 4.13555C8.25154 4.2892 8.21871 4.45394 8.21875 4.62031C8.21875 4.95938 8.35156 5.27813 8.59063 5.51719L9.9 6.82656C9.59351 7.50213 9.16738 8.1167 8.64219 8.64062C8.11831 9.16709 7.50379 9.59477 6.82813 9.90312L5.51875 8.59375C5.40137 8.47585 5.26184 8.3823 5.1082 8.31849C4.95455 8.25467 4.78981 8.22184 4.62344 8.22188C4.28438 8.22188 3.96563 8.35469 3.72656 8.59375L1.93438 10.3828C1.81633 10.5004 1.7227 10.6402 1.65888 10.7941C1.59506 10.948 1.56231 11.1131 1.5625 11.2797C1.5625 11.6188 1.69531 11.9375 1.93438 12.1766L3.59531 13.8375C3.97656 14.2203 4.50313 14.4375 5.04375 14.4375C5.15781 14.4375 5.26719 14.4281 5.375 14.4094C7.48125 14.0625 9.57031 12.9422 11.2563 11.2578C12.9406 9.575 14.0594 7.4875 14.4109 5.375C14.5172 4.72969 14.3031 4.06562 13.8375 3.59687Z" />
    </svg>
  );
};

export { PhoneIcon };