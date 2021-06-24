
export default function Card({title, summary, year}) {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 md:mx-4">
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{year}</p>
    </div>
  )
}