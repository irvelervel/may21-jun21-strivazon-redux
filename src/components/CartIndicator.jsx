import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIndicator = ({ history }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">0</span>
    </Button>
  </div>
);

export default withRouter(CartIndicator);
