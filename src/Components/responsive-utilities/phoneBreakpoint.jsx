import React from 'react';
import Breakpoint from './breakpoints.jsx';

const PhoneBreakpoint = (props) => (
 <Breakpoint name='phone'>
 {props.children}
 </Breakpoint>
);

export default PhoneBreakpoint;
