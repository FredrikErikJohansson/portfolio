import Image from "next/image"

export default function Card({title, summary, year, preview}) {
  return (
    // <div className="shadow-xl bg-white">
    <div className="group relative break-inside mb-4">
      <div className="bg-black">
        <Image
          className="opacity-60 transform group-hover:opacity-80 group-hover:scale-105"
          layout='responsive'
          objectFit='cover' 
          src={require("../public/images/" + preview)}>
        </Image>  
      </div>    
      <div className="z-1 absolute bottom-0 left-0 p-4 text-sm text-white">
        <p>{year}</p>
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{summary}</p>
      </div>      
    </div>
  )
}