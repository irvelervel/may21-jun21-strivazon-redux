import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'

// how do you connect a component to the store? using the connect function from 'react-redux'
// connect can take up to two parameters, and these parameters are functions:
// they are usually called mapStateToProps and mapDispatchToProps
// mapStateToProps is a function taking the whole redux store and returning an object,
// each key of this object will then became a prop of this react component

const mapStateToProps = (state) => ({
  cartLength: state.cart.products.length,
})

const CartIndicator = ({ cartLength, history, location, match }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{cartLength}</span>
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(CartIndicator));
