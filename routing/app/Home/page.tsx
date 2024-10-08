import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

        <div>Home</div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link href={'Home/page'}>Add</Link></button>
    </div>
  </div>
</div>

        


    </>

  )
}

export default page