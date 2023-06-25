const Inputs = ({
  type,
  placeholder,
  style,
  value,
  onClickFunction,
  onChangeFunction,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style}
      onChange={onChangeFunction}
      onClick={onClickFunction}
      value={value}
    />
  );
};

export default Inputs;
