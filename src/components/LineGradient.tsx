type Props = {
  width?: string;
};

const LineGradient = ({ width = "w-full" }: Props) => {
  return <div className={`h-05 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;
