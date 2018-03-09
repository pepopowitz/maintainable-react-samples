import React from "react";
import ArrayMethods from './array-methods';
import PropsClassFields from './props-class-fields';
import StateClassField from './state-class-field';
import AsyncAwait from './async-await';

export default function() {
  return (
    <div className="feature">
      <div className="card">
        <ArrayMethods />
      </div>
      <div className="card">
        <PropsClassFields />
      </div>
      <div className="card">
        <StateClassField />
      </div>
      <div className="card">
        <AsyncAwait />
      </div>
    </div>
  );
}
