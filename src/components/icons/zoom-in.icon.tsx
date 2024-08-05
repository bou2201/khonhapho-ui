const ZoomInIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'fill-primary_text_l dark:fill-primary_text_d ' + props.className}
      {...props}
    >
      <path
        d="M210,191c0.723,2.762.279,2.237,3,3,0.723,2.762.279,2.237,3,3v2c3.392,1.971,5.322,5.322,8,8l17,16,7,8c0.094,6.122-1.062,7.835-2,12-3.861,1.756-5.767,2.984-12,3-1.721-2-2.323-.843-4-2l-2-3-6-5-12-13-26-25c-4.083-4.083-12.994-16.185-19-17-1.613,2.492-3.517,2.343-6,4q-0.5,1-1,2l-3,1v1h-2v1l-6,2v1h-3v1l-4,1v1l-7,1v1h-3v1l-14,1v1c-5.158,1.438-15.37.028-19-1H89v-1H84v-1H80v-1l-7-1v-1H71v-1l-9-3v-1H60v-1H58v-1H56l-1-2H53l-1-2H50l-1-2H47l-5-6H40l-4-5-2-1v-2l-5-4v-2l-3-2v-2l-2-1v-2l-2-1v-2H21v-2H20v-2H19v-2H18l-1-4H16l-1-6H14v-2H13v-4H12v-5c-3.8-12.149-3.865-29.851,0-42V78h1V75h1V72h1V69h1V66h1l2-6h1V58h1l1-4,2-1V51h1l1-3,2-1V45l5-4V39l7-6,1-2h2l3-4h2l2-3,3-1,1-2,6-2V18h2V17h2V16l6-2V13l10-2c20.613-6.871,49.524-3.814,67,4v1l4,1v1l4,1,1,2h2l1,2h2l1,2h2l3,4c15.89,11.441,25.9,27.765,33,48v4c3.457,10.66,4.455,29.319,1,41q-0.5,5-1,10h-1v2h-1q-0.5,3.5-1,7h-1q-1,3-2,6h-1v2h-1q-0.5,2-1,4l-2,1v2l-2,1v2l-2,1v2h-1c-0.924,1.365-.692,1.762-1,4l19,18C204.611,186.61,205.839,189.867,210,191ZM96,29c-2.568,2.2-7.452.68-11,2v1H83v1H79v1H77v1l-4,1C55.43,45.372,43.093,59.131,35,78v3H34v3H33v4H32v6H31c-1.615,5.724.638,26.166,2,30h1v3h1l1,6h1l2,6h1l1,4,2,1v2l2,1v2l4,3v2l7,6,1,2h2l2,3h2l1,2,3,1v1l4,1,1,2h3v1l4,1v1h4v1h3v1h3v1l14,1c1.372,0.221,2.482,1.628,5,1v-1h9v-1h6v-1h4v-1h3v-1h3v-1h2v-1h3v-1h2v-1h2q0.5-1,1-2l4-1q0.5-1,1-2h2l2-3h2l3-4,8-7v-2l3-2v-2l2-1v-2l2-1q1-3,2-6h1v-2h1v-3h1v-3h1v-3h1v-4h1v-4h1v-9c1.382-8.293-.354-17.939-3-25q-1-4.5-2-9h-1q-0.5-2-1-4h-1q-0.5-2-1-4l-2-1V63l-2-1V60l-3-2c-10.181-14.335-23.249-22.253-42-28h-6C111.788,28.5,102.825,28.963,96,29Zm-1,86H64v-1l-6-1c-0.944-1.8-1.385-1.574-2-4-2.358-2.485-.576-9.259,0-12,1.8-.945,1.575-1.385,4-2,3.677-3.67,27.011-2.094,35-2V61h1l1-5c4.263-2.337,4.915-3.939,12-4v1h3l3,4c3.67,3.677,2.094,27.011,2,35,7.788,2.876,22.333,1.053,32,1v1h4l5,6c0.333,8.345-1.28,13.762-9,14-1.685,1.5-5.82,1-9,1H118c-2.673,7.241-1.05,23.642-1,33h-1v3l-4,3c-1.892,1.957-5.046,2.047-9,2-2.485-2.757-4.777-1.448-6-6C93.346,146.115,94.912,123.125,95,115Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { ZoomInIcon };