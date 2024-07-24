const CopyDocumentIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'fill-primary_text_l dark:fill-primary_text_d ' + props.className}
      {...props}
    >
      <path
        d="M1.611.522a1.965 1.965 0 0 0-.98.462 1.983 1.983 0 0 0-.609 1.163c-.031.219-.031 11.487 0 11.706.046.331.194.678.399.936.257.324.601.544 1.025.657l.164.044h8.78l.164-.044a1.895 1.895 0 0 0 1.025-.657c.205-.258.353-.605.399-.936.029-.209.031-8.671.002-8.775a.634.634 0 0 0-.075-.153c-.03-.044-.995-1.037-2.145-2.206C8.131 1.062 7.651.584 7.58.552 7.49.51 7.487.51 4.61.507 3.026.506 1.676.512 1.611.522M7 2.995c.001 1.646.001 1.656.123 1.904.085.174.304.393.478.478.248.122.258.122 1.904.123H11l-.005 4.166-.005 4.166-.076.154a.895.895 0 0 1-.573.485c-.164.043-8.518.043-8.682 0a.901.901 0 0 1-.577-.49l-.072-.151V2.17l.072-.151a.987.987 0 0 1 .369-.408c.191-.112.08-.108 2.924-.11L7 1.5v1.495m2.922 1.31.182.195h-1.02c-.902 0-1.025-.004-1.053-.031-.027-.028-.031-.153-.03-1.075V2.35l.87.88c.478.484.951.968 1.051 1.075M2.861 7.523a.528.528 0 0 0-.344.375.5.5 0 0 0 .365.582c.062.015.994.02 3.168.016 2.917-.006 3.084-.008 3.152-.042a.6.6 0 0 0 .244-.243.554.554 0 0 0 .007-.414.635.635 0 0 0-.25-.251c-.07-.034-.221-.036-3.173-.039-2.012-.002-3.124.003-3.169.016m0 2a.528.528 0 0 0-.344.375.5.5 0 0 0 .365.582c.061.015.641.02 1.918.016 2.035-.007 1.891.003 2.039-.141a.452.452 0 0 0 .15-.355.43.43 0 0 0-.142-.347c-.154-.154.002-.143-2.067-.146-1.186-.003-1.875.003-1.919.016"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export { CopyDocumentIcon };