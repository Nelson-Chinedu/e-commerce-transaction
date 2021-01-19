import React from 'react';
import SVG from 'react-inlinesvg';

const Loading = () => {
  return (
    <div className="c-loading">
      <SVG src="/loading.svg" />
    </div>
  )
};

export default Loading;