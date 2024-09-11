import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import account from '../../assets/images/account.svg';
import closemenu from '../../assets/images/closemenu.svg';
import heart from '../../assets/images/heart.svg';
import logo from '../../assets/images/logo.svg';
import openmenu from '../../assets/images/openmenu.svg';
import search from '../../assets/images/search.svg';
import shopCart from '../../assets/images/shoppingCart.svg';




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const {cartItems}=useSelector((state:any)=>state.cart)








  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);



  return (
    <header className="bg-white md:shadow-sm">
      <nav className="flex items-center font-medium justify-around">

        <div className="lg:w-auto w-full py-7 lg:px-0 px-3 z-30 flex justify-between items-center">
          <Link to="/" className="flex items-center w-fit gap-1">
            <img src={logo} alt="logo" />
            <span className="font-bold md:text-[34px] text-2xl">Furniro</span>
          </Link>
          <div className="w-6 cursor-pointer lg:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? closemenu : openmenu} alt="menu-icon" />
          </div>
        </div>

        <div className="lg:flex hidden items-center gap-4 font-medium lg:gap-[75px] text-base">
          <NavLink className={({ isActive }) => `${isActive ? "font-semibold underline decoration-black" : ""} hover:translate-x-1 ease-in-out duration-200 hover:text-[#B88E2F] hover:decoration-[#B88E2F]`} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "font-semibold underline decoration-black" : ""} hover:translate-x-1 ease-in-out duration-200 hover:text-[#B88E2F] hover:decoration-[#B88E2F]`} to='/s'>Shop</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "font-semibold underline decoration-black" : ""} hover:translate-x-1 ease-in-out duration-200 hover:text-[#B88E2F] hover:decoration-[#B88E2F]`} to='/b'>Blog</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "font-semibold underline decoration-black" : ""} hover:translate-x-1 ease-in-out duration-200 hover:text-[#B88E2F] hover:decoration-[#B88E2F]`} to='/C'>Contact</NavLink>
        </div>

        <div className="lg:flex hidden items-center lg:gap-11">
          <Link to={"/"}>
            <img src={account} alt="account-icon" />
          </Link>
          <Link to="/">
            <img src={search} alt="search-icon" />
          </Link>
          <Link to="/favorites" className="relative">
           
            <img src={heart} alt="heart-icon" />
          </Link>
          <Link to={"/cart"}>
          <div className="cursor-pointer relative">
            {cartItems.length > 0 &&
              <div className="absolute -top-1 -right-1 bg-[#B88E2F] text-white text-center rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
             <span>{cartItems.length}</span>
              </div>}
            <img src={shopCart} alt="shopcart-icon" />
          </div>
          </Link>
        </div>

        {/* MOBILE NAVBAR */}
        <div className={`lg:hidden bg-white text-2xl absolute z-20 w-full h-full bottom-0 py-32 pl-3 flex flex-col gap-10 duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to='/'>Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to='/'>Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to='/'>Contact</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to={`/`}>Profile</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to="/">Search</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to="/">Favorites</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to="/cart">Cart</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-black" : ""} to={"/"}>Profile</NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar