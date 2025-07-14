const PageHeader = (props) => {

  const todaysDate = new Date().toISOString().split('T')[0];
  const showDate = props.showDate ?? true

  
  return (
    <div className='text-center m-lg'>
        <h1 className='text-4xl font-bold mb-3 text-primary'>{props.title}</h1>
        {showDate && <p className='text-gray-500'>Last updated: {todaysDate}</p>}
    </div>
  )
}

export default PageHeader