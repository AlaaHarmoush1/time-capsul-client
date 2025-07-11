const InfoCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-base mb-6 transition-all duration-300 hover:shadow-lg m-lg w-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">{props.title}</h1>
      <hr className="border-t-2 border-primary mb-4 w-1/4" />
      <div className="space-y-2">
        {props.subtitle && (
          <h2 className="text-lg font-semibold text-gray-700">{props.subtitle}</h2>
        )}
        <p className="text-gray-600 leading-relaxed">{props.text}</p>
      </div>
    </div>
  )
}

export default InfoCard