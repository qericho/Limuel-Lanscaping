const LargeBtn = ({ styles, title }) => {
  return (
    <button className={`${styles} rounded cursor-pointer`}>{title}</button>
  );
};

export default LargeBtn;
