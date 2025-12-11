import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Card = ({item}) => {
  return (
    <div>
      <div className="md:max-w-80 xl:max-w-90 2xl:max-w-lg p-5 rounded-md shadow-md bg-gray-50 md:h-103 xl:h-110 2xl:h-135 relative">
	      <img src={item.image} alt="img" className="object-cover object-center w-full rounded-md md:h-40 xl:h-52 2xl:h-72 bg-gray-500" />
	    <div className="md:mt-3 xl:mt-4 2xl:mt-6 mb-2 2xl:mb-2">
	      <h2 className="text-xl font-semibold tracking-wide">{item.place}</h2>
	    </div>
	    <p className="text-gray-800 md:text-sm xl:text-sm 2xl:text-base">{item.discription}</p>
        <p className='text-blue-500 md:text-sm xl:text-sm 2xl:text-base mt-3 2xl:mt-4'>{item.date}</p>
        <div className='flex justify-end gap-3 2xl:gap-5 absolute bottom-5 right-5'>
            <EditIcon className='hover:-translate-y-0.5 hover:scale-120 ease-in-out' />
            <DeleteIcon className='text-red-500 hover:-translate-y-0.5 hover:scale-120 ease-in-out' />
        </div>
      </div>
    </div>
  )
}
