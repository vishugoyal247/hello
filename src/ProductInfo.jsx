import React from 'react'

export default function ProductInfo({price, title, url , category}) {
  return (
    <div className='bg-red-500 m-4 p-4 flex flex-col items-center'>
      <img className='h-60 w-48 ' src={url} alt="" />
      <p>{category}</p>
      <h2>{title}</h2>
      <p>$ {price}</p>

    </div>
  )
}
