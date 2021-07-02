
export default function Card({title, summary, year}) {
  return (
    <div className="flex-1 max-w-md shadow-lg rounded-lg ">
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{year}</p>
    </div>
  )
}