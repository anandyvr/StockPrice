import React from 'react';

const SelectMenu = ({
  className,
  id,
  value,
  style,
  options,
  event,
  disabled = false
}) => {
  return (
    <div class={className}>
      <select id={id} value={value} style={style} onChange={event} disabled={disabled}>
        <option value="">
          Select one...
            </option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default SelectMenu;
