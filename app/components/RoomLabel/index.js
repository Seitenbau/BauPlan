/**
*
* RoomLabel
*
*/

import React, { PropTypes } from 'react';
import Label from './Label';

function RoomLabel(props) {
  return (
    <Label scale={props.scaleFactor} left={props.left} top={props.top} className={props.className}>
      {props.name}
    </Label>
  );
}

RoomLabel.propTypes = {
  name: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
  scaleFactor: PropTypes.number,
  className: PropTypes.string,
};

export default RoomLabel;
