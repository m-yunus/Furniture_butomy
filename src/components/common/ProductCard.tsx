import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import shopIcon from '../../assets/images/shoppingCart.svg';
import heart from '../../assets/images/whiteheart.svg';
import { ProductTypes } from '../../models/productTypes';
import { addToCart } from '../../redux/cartActions';

interface ProductCardProps {
  product: ProductTypes;
  gridClass?: string;
}

const ProductCard: FC<ProductCardProps> = ({ product, gridClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [productCountMsg, setProductCountMsg] = useState('');
  const dispatch = useDispatch();

  const handleAddToCartModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const increaseProductCount = () => {
    if (productCount < 10) {
      setProductCount(prevState => prevState + 1);
      setProductCountMsg('');
    } else {
      setProductCountMsg('You can only add 10 products at once!');
    }
  };

  const decreaseProductCount = () => {
    if (productCount > 1) {
      setProductCountMsg('');
      setProductCount(prevState => prevState - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Product added to cart!');
    handleAddToCartModalClick(); // Close the modal after adding to cart
  };

  return (
    <>
      <Link to={`/`} className={`${gridClass === 'view' ? 'h-auto' : 'h-full'} cursor-pointer`}>
        <div className="relative overflow-hidden h-full">
          <img src={product?.image} alt={product?.title} className='h-[301px] w-full object-cover' />

          <div className="lg:absolute hidden h-full w-full bg-[#3A3A3A]/70 lg:flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <div className='w-full'>
              <div
                className='bg-white w-[70%] mb-6 text-center mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAddToCartModalClick();
                }}
              >
                Add to cart
              </div>
              <div className='w-full flex items-center gap-3 mt-[24px] px-3 justify-center'>
                {/* Add other icons or buttons if needed */}
              </div>
            </div>
          </div>

          <div className='h-full pb-7 px-4 pt-4 bg-[#F4F5F7]'>
            <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2 truncate'>{product?.title}</h1>
            <p className='text-[#898989] lg:text-base text-sm font-medium truncate'>{product?.description}</p>

            <div className='mt-[8px] flex gap-4 justify-between items-center'>
              <span className='text-[#3A3A3A] font-bold lg:text-xl'>${product?.price?.toFixed(2)}</span>
            </div>

            <div className='mt-4 flex items-center justify-end gap-1 lg:hidden'>
              <button
                className='w-6 h-6'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {/* Add functionality if needed */}
              </button>
              <button
                className='w-6 h-6'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAddToCartModalClick();
                }}
              >
                <img src={shopIcon} alt="Add to cart" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Modal for Adding to Cart */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Add to Cart</h2>
            <p className="mb-4">Quantity:</p>
            <div className="flex items-center mb-4">
              <button
                onClick={decreaseProductCount}
                className="bg-gray-300 text-black px-3 py-1 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                value={productCount}
                readOnly
                className="border-t border-b text-center w-16"
              />
              <button
                onClick={increaseProductCount}
                className="bg-gray-300 text-black px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
            {productCountMsg && <p className="text-red-500 mb-4">{productCountMsg}</p>}
            <button
              onClick={handleAddToCart}
              className="bg-[#B88E2F] text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToCartModalClick}
              className="absolute top-2 right-2 text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
