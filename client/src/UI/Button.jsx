function Button({ label, type = '', onClick }) {
   return (
      <button
         onClick={e => onClick?.(e)}
         type={type}
         className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
         {label}
      </button>
   )
}

export default Button