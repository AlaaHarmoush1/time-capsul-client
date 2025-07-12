import PageHeader from '../../component/shared/QuickLinks/PageHeader'
import useApi from '../../hooks/useApi'


const News = () => {
  const response = useApi('https://jsonplaceholder.typicode.com/posts', 'get')

  const news = response.data
  const error = response.error

  return (
    <div className='page'>
      <PageHeader title="News"/>

      {error && <p>Error loading news: {error.message}</p>}

      <div className='flex flex-col gap-4 mt-4'>
        {news?.slice(0, 25).map((item) => (
          <div key={item.id} className='border p-4 rounded-md shadow'>
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <p className='text-gray-700'>{item.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News