import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const ContactsCardSkeleton = ({ cards }) => {
  return (
    Array(cards).fill(0).map((item, i) =>
      <div className='mb-4 flex h-[16%] justify-evenly items-center' key={i}>
        <div className=" w-[15%] h-100 ">
          <Skeleton className='h-100 w-100' />
        </div>
        <div className='w-[60%] h-100'>
          <span><Skeleton className='h-[47%]' /></span>
          <span><Skeleton className='h-[47%]' /></span>
        </div>
        <div className='w-[20%] h-100 '>
          <Skeleton className='h-100 w-100' />
        </div>
      </div>
    )


  )
}
