import Image from "next/image"

export default function Card({title, summary, year, preview}) {
  return (
    // <div className="shadow-xl bg-white">
    <div className="break-inside shadow-xl mb-4 bg-white">
      <Image 
        layout='responsive'
        objectFit='cover' 
        src={require("../public/images/" + preview)}>
      </Image>    
      <div className="p-4 text-sm">
        <p>{year}</p>
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{summary}</p>
      </div>
         
    </div>
  )
}