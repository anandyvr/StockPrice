import React from 'react';

const TextElement = ({
    headtext,
    className,
    event,
    value,
    change
}) => {
    return (
        <div className={className}>
            <div className="headtext">{headtext}</div>
            <br />
            <input onBlur={event} value={value} onChange={change}>
            </input>
        </div>
    );
};

export default TextElement;
