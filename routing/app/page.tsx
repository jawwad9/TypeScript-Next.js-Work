import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div>page</div>

        <Link href={'About'}>About</Link>
        <Link href={'Home'}>Home</Link>
        <Link href={'Contact'}>Contact</Link>



    </>
  )
}

export default page