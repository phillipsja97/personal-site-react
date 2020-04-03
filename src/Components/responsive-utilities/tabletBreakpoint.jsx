import React from 'react';
import Breakpoint from './breakpoints.jsx';

const TabletBreakpoint = (props) => (
 <Breakpoint name='tablet'>
 {props.children}
 </Breakpoint>
);

export default TabletBreakpoint;
