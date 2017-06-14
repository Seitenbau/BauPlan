import styled from 'styled-components';
import { rem, shadeColor } from 'utils/helper';

const Tabel = styled.div`
  background-color: #d3d3d3;
  position: absolute;
  box-sizing: border-box;
  height: ${(props) => rem((props.height / 2) * 100)};
  width: ${(props) => rem((props.width / 2) * 100)};
  border: 1px solid ${shadeColor('#d3d3d3', -0.8)};
  left: ${(props) => rem(props.left)};
  top: ${(props) => rem(props.top)};
  :after {
    content: "";
    display: block;
    position: absolute;
    border: 1px dashed ${shadeColor('#d3d3d3', -0.8)};
    border-top: none;
    height: 100%;
    width: 100%;
    top: ${(props) => rem((props.height / 2) * 100)};
  }
`;

export default Tabel;
