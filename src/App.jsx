import { Card } from "./components/Card"
import Navbar from "./components/Navbar"
import { data } from "./data/data"


function App() {

  return (
    <>
    <Navbar />
    <div className="bg-stone-600 relative h-50 md:h-100 xl:h-140 2xl:h-200">
      <img src="/background_image.jpg" alt="img" className="h-50 md:h-100 xl:h-140 2xl:h-200 w-full absolute mix-blend-overlay" />
        <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-yellow-600 font-bold font-serif relative text-center top-5 md:top-8 xl:top-10 2xl:top-15">Blog</h1>
        <div className="text-center relative top-6 md:top-12 xl:top-15 2xl:top-25">
          <button className="rounded-xl p-2 px-3 md:px-4 bg-yellow-800 hover:bg-yellow-700 shadow-md shadow-black/90 hover:shadow-lg text-[10px] md:text-[13px] xl:text-sm 2xl:text-base text-white font-semibold">Add Blog</button>
          <h1 className="text-[20px] md:text-[40px] xl:text-6xl 2xl:text-8xl font-bold mt-2 md:mt-3 xl:mt-5 2xl:mt-10 text-white">Your Destination is Waiting</h1>
          <h2 className="text-white text-[10px] md:text-base xl:text-xl 2xl:text-3xl xl:mt-2 2xl:mt-5">how to make the most of a short trip</h2>
        </div>
  
   
    <div className="flex gap-6 md:gap-10 2xl:gap-15 flex-wrap px-9 md:px-10 2xl:px-30 relative top-10 md:top-25 xl:top-40 2xl:top-80">
      {
        data.map((item)=>{
          return(
            <div key={item.id}>
              <Card item={item}/>
            </div>
          )
        })
      }
    </div>
  </div>
    </>
  )
}

export default App
