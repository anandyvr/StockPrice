import React from 'react';

const ContentText = ({
  head,
  text
}) => {
  return (
    <div>
      <div className="head-text">
        {head}
      </div>
      <div className="body-text">
        {text}
      </div>
    </div>
  );
};

export default ContentText;
