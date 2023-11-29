/* eslint-disable react/prop-types */
export default function Input({
   name,
   label,
   id = '',
   type = 'text',
   placeholder = '',
   onChange,
}) {
   return (
      <div>
         <label
            htmlFor={id}
            className='block text-sm font-medium leading-6 text-gray-900'
         >
            {label}
         </label>
         <div className='mt-2'>
            <input
               onChange={e => onChange?.(e)}
               id={id}
               name={name}
               type={type}
               autoComplete='full-name'
               placeholder={placeholder}
               className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
         </div>
      </div>
   )
}
