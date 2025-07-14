const NotFound = () => {

  function handleGoBack() {
    window.history.back();
  }
  
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center transparent text-gray-700 text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="mb-4">Sorry, the page you’re looking for doesn’t exist.</p>
      <a href="#" onClick={handleGoBack} className="text-blue-500 hover:underline">Go back</a>
    </div>
  )
}

export default NotFound