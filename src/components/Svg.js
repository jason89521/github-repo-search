const Svg = ({ className, href }) => {
  return (
    <svg className={className}>
      <use href={href}></use>
    </svg>
  );
};

export default Svg;
