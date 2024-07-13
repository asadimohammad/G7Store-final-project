import React from "react";

const Inputs = (props) => {
  const { lableTxt, type, placeholder, inputClass, lableClass, divCalss , change} =
    props;
  return (
    <div className={divCalss}>
      <label className={lableClass}>{lableTxt}</label>
      <input type={type} className={inputClass} placeholder={placeholder} onChange={(e) => change(e)} />
    </div>
  );
};

export default Inputs;
