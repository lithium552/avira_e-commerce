import React from 'react'

interface PropsTitle {
    length: number | null
    title: string
}

const Title = ({length, title}: PropsTitle) => {
  return (
    <div className='flex items-center gap-4'>
    <h1 className='font-semibold text-2xl'>{title}</h1>
      {length !== null && (
      <>
    <div className='w-2 h-2 bg-textColorAcc rounded-full'></div>
    <p className='text-textColorAcc font-semibold text-sm pt-1'>{length} Items</p>
    </>
      )}
</div>
  )
}

export default Title