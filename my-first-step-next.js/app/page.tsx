import Image from "next/image";
import ImageMain from "./image.jpg";
import Link from "next/link";


function App(){
  return (
    <>
            <h1 className="text-4xl font-bold text-white text-center">Hello World</h1>

          <div className="flex flex-col items-center pt-48 min-h-screen bg-gradient-to-r from-gray-500 to-slate-900">
        <h1 className="text-4xl font-bold text-white text-center">Hello World</h1>
        <Image
          src={ImageMain}
          alt="NextJS Image"
          width={420}
          className="mt-8 rounded-lg shadow-lg h-auto w-auto"
        />
      </div>
      <h1 className="text-4xl font-bold text-white text-center">Hello World</h1>


      <Link href="Product">page</Link>
    
    </>
  )
}

export default App