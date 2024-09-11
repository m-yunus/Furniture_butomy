import logo from '../assets/images/logo.svg';
import CartTotals from "../components/cart/CartTotals";
import { FeaturesBar,  SecondaryHero } from "../components/common/index";

const Cart = () => {
  return (<>
   <SecondaryHero title="Cart" logo={logo} />
    <CartTotals />
      <FeaturesBar />
    </>
  )
}

export default Cart