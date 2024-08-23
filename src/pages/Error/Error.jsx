import ButtonComponents from "../../components/button"
const ErrorPage = () => {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-[100vh] flex items-center">
            <div className="mx-auto max-w-screen-sm ">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#004e9f] ">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">{"Something's missing."}</p>
                <p className="mb-4 text-lg font-light text-gray-500 ">{"Sorry, we can't find that page. You'll find lots to explore on the home page."} </p>
                <ButtonComponents style={"inline-flex text-white bg-[#004e9f] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary-900 my-4"}><p>Back to Homepage</p></ButtonComponents>
            </div>   
        </div>
      </section>
    </>
  )
}

export default ErrorPage
