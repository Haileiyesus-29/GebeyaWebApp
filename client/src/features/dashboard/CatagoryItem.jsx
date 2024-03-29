import { Link } from 'react-router-dom'

function CatagoryItem({ img, label, category }) {
   return (
      <Link
         to={`product?category=${category}`}
         className='inline-flex mx-2 my-4 flex-col items-center cursor-pointer'
      >
         <div className='w-40 h-40 overflow-hidden rounded-full border-2 hover:border-primary'>
            <img src={img} alt={label} className='w-full h-full object-cover' />
         </div>
         <div className='text-2xl text-primary'>{label}</div>
      </Link>
   )
}
export default CatagoryItem
