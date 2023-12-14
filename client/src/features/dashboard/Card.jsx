/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addToCart, removeCartItem } from '../cart/cartSlice'
import Button from '../../ui/Button'
import Rating from '../../ui/Rating'
import { addWishlist, removeWishlist } from '../wishlists/wishlistSlice'

function Card({ product }) {
   const dispatch = useDispatch()
   const cartItems = useSelector(store => store.cart.cartItems)
   const wishlists = useSelector(store => store.wishlist.wishlists)

   const { name, images, rating, price, id } = product
   const isWishlisted = wishlists.some(list => list.id === id)
   return (
      <div className='flex '>
         <div className='flex flex-col relative w-64 min-h-[22rem] max-w-xs  rounded-lg bg-white shadow-md'>
            <Link to={`/product/${id}`}>
               <img
                  className='h-40 w-full rounded-t-lg object-cover'
                  src={images[0]}
                  alt={name}
               />
            </Link>

            <div className='my-2 gap-2 px-5  flex flex-col grow'>
               <Link to={`/product/${id}`}>
                  <h5 className='text-xl font-semibold tracking-tight text-slate-900'>
                     {name}
                  </h5>
               </Link>
               <Rating />
               <div className='mt-auto flex justify-between items-center'>
                  <p>
                     <span className='text-xl font-bold text-slate-900'>{`$${Number(
                        price
                     ).toFixed(2)}`}</span>
                  </p>

                  <div
                     onClick={() => {
                        if (isWishlisted) dispatch(removeWishlist(product))
                        else dispatch(addWishlist(product))
                     }}
                     className={`cursor-pointer px-2 ${
                        isWishlisted ? 'text-yellow-500' : 'text-gray-400'
                     }`}
                  >
                     <span className='fa-solid fa-bookmark text-xl'></span>
                  </div>
               </div>
               <div className=''>
                  {!cartItems.find(item => item.id === id) ? (
                     <Button
                        onClick={() => dispatch(addToCart(product))}
                        label={
                           <>
                              <span className='fa-solid fa-cart-shopping'></span>
                              <span>Add to cart</span>
                           </>
                        }
                     />
                  ) : (
                     <Button
                        onClick={() => dispatch(removeCartItem(product.id))}
                        secondary={true}
                        label={
                           <>
                              <span className='fa-solid fa-xmark'></span>
                              <span>Remove from cart</span>
                           </>
                        }
                     />
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card
