import React from 'react';
import Breakpoint from './breakpoints.jsx';

const DesktopBreakpoint = (props) => (
      <Breakpoint name='desktop'>
      {props.children}
      </Breakpoint>
);

export default DesktopBreakpoint;
