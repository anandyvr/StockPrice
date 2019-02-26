import React from 'react';

const TextElement = ({
    headtext,
    className,
    event
}) => {
    return (
        <div className={className}>
            <div className="headtext">{headtext}</div>
            <br />
            <input onBlur={event}>
            </input>
        </div>
    );
};

export default TextElement;
