const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M12.5 2.1792H10.375L9.86875 0.760449C9.83377 0.663368 9.76968 0.579452 9.68522 0.520164C9.60077 0.460876 9.50006 0.429108 9.39688 0.429199H4.60313C4.39219 0.429199 4.20312 0.562012 4.13281 0.760449L3.625 2.1792H1.5C0.809375 2.1792 0.25 2.73857 0.25 3.4292V10.5542C0.25 11.2448 0.809375 11.8042 1.5 11.8042H12.5C13.1906 11.8042 13.75 11.2448 13.75 10.5542V3.4292C13.75 2.73857 13.1906 2.1792 12.5 2.1792ZM12.625 10.5542C12.625 10.6229 12.5688 10.6792 12.5 10.6792H1.5C1.43125 10.6792 1.375 10.6229 1.375 10.5542V3.4292C1.375 3.36045 1.43125 3.3042 1.5 3.3042H4.41719L4.68437 2.55732L5.04219 1.5542H8.95625L9.31406 2.55732L9.58125 3.3042H12.5C12.5688 3.3042 12.625 3.36045 12.625 3.4292V10.5542ZM7 4.3042C5.61875 4.3042 4.5 5.42295 4.5 6.8042C4.5 8.18545 5.61875 9.3042 7 9.3042C8.38125 9.3042 9.5 8.18545 9.5 6.8042C9.5 5.42295 8.38125 4.3042 7 4.3042ZM7 8.3042C6.17188 8.3042 5.5 7.63232 5.5 6.8042C5.5 5.97607 6.17188 5.3042 7 5.3042C7.82812 5.3042 8.5 5.97607 8.5 6.8042C8.5 7.63232 7.82812 8.3042 7 8.3042Z"
        fill="#344142"
      />
    </svg>
  );
};

export { CameraIcon };
