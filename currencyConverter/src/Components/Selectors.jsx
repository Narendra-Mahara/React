const Selectors = ({ labelValue }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={labelValue}>{labelValue}</label>
      <div className="flex gap-4">
        <div className="flag">flag</div>
        <div className="currencyType">USD</div>
      </div>
    </div>
  );
};

export default Selectors;
