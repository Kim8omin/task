import { LayerWrapper } from "../styles/Style";
import PropTypes from "prop-types";

function Layer({ children }) {
  return (
    <LayerWrapper>
      <h2>카드를 클릭해주세요</h2>
      {children}
    </LayerWrapper>
  );
}

Layer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layer;
