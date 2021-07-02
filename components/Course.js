
export default function Course({code, title}) {
  return (
    <div>
      <h1>{code}</h1>
      <h2 className="text-sm text-gray-500">{title}</h2>
    </div>
  )
}