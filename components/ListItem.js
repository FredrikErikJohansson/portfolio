
export default function ListItem({name}) {
  return (
    <div className="bg-gray-200 mr-2 mb-2 rounded-full p-2 flex-none">
      <h1 className="text-lg">{name}</h1>
    </div>
  )
}