import React from 'react';

export default function({title, children}) {
  return <div>
    <h2>{title}</h2>
    {children}
  </div>
}