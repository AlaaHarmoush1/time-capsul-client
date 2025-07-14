import InfoCard from "./InfoCard"

const InfoCardList = ({ items }) => {

    console.log(items)

  return (
    <div className='flex flex-col items-center sm:w-[75%] '>
        {items.map((item, index) => (
          <InfoCard key={index} title={item.title} text={item.text} />
        ))}
      </div>
  )
}

export default InfoCardList