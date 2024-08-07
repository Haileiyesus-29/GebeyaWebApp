import { PropTypes } from 'prop-types'
import { TiDelete } from 'react-icons/ti'
import useCart from '../store/useCart'

CartItem.propTypes = {
   item: PropTypes.shape({
      product: PropTypes.shape({
         id: PropTypes.string,
         name: PropTypes.string,
         category: PropTypes.string,
         image: PropTypes.string,
         price: PropTypes.number,
      }),
      quantity: PropTypes.number,
   }),
}

function CartItem({ item }) {
   const { removeFromCart, setQuantity } = useCart(state => state)

   return (
      <div className='flex gap-2 p-2 border'>
         <span className='grow-0 basis-1/3 shrink-0'>
            <img
               src={
                  item.product.image ||
                  'https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1'
               }
               alt={item.product.name}
            />
         </span>
         <div className='flex flex-col gap-2 overflow-hidden grow'>
            <h3 className='w-full truncate whitespace-nowrap'>
               {item.product.name}
            </h3>
            <p className='flex gap-3'>
               <span className='font-semibold'>
                  Rs.{Number(item.product.price * item.quantity).toFixed(2)}
               </span>
            </p>
            <div className='flex justify-between'>
               <span>
                  <input
                     type='number'
                     min={1}
                     defaultValue={1}
                     className='p-1 border w-14 h-10 text-lg'
                     onChange={e =>
                        setQuantity(item.product.id, +e.target.value)
                     }
                  />
               </span>
               <span
                  className='rounded-full text-3xl text-gray-800/90 cursor-pointer self-center'
                  onClick={() => removeFromCart(item.product.id)}
               >
                  <TiDelete />
               </span>
            </div>
         </div>
      </div>
   )
}
export default CartItem
