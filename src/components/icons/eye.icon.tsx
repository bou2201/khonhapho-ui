const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.722 5.59688C12.2407 2.47656 10.0017 0.90625 7.00009 0.90625C3.99697 0.90625 1.75947 2.47656 0.278215 5.59844C0.218802 5.72425 0.187988 5.86165 0.187988 6.00078C0.187988 6.13991 0.218802 6.27732 0.278215 6.40312C1.75947 9.52344 3.99853 11.0938 7.00009 11.0938C10.0032 11.0938 12.2407 9.52344 13.722 6.40156C13.8423 6.14844 13.8423 5.85469 13.722 5.59688ZM7.00009 9.96875C4.47978 9.96875 2.63447 8.69063 1.3329 6C2.63447 3.30938 4.47978 2.03125 7.00009 2.03125C9.5204 2.03125 11.3657 3.30938 12.6673 6C11.3673 8.69063 9.52197 9.96875 7.00009 9.96875ZM6.93759 3.25C5.41884 3.25 4.18759 4.48125 4.18759 6C4.18759 7.51875 5.41884 8.75 6.93759 8.75C8.45634 8.75 9.68759 7.51875 9.68759 6C9.68759 4.48125 8.45634 3.25 6.93759 3.25ZM6.93759 7.75C5.9704 7.75 5.18759 6.96719 5.18759 6C5.18759 5.03281 5.9704 4.25 6.93759 4.25C7.90478 4.25 8.68759 5.03281 8.68759 6C8.68759 6.96719 7.90478 7.75 6.93759 7.75Z"
        fill="#242526"
        className="dark:fill-primary_text_d"
      />
    </svg>
  );
};

export { EyeIcon };