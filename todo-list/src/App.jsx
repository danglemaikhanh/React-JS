import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header />
      <form className="mt-10">
        <label htmlFor="todo" className="mb-2 text-sm font-medium text-gray-700 sr-only">Enter your Task</label>
        <div className="relative block h-15 w-full min-w-[250px] max-w-[800px] mx-auto">
          <input 
              type="text" 
              id="todo" 
              className="block mx-auto w-full rounded-[15px] p-4 text-md text-gray-900 border
              border-gray-300 bg-gray-50 focus:border-gray-800 focus:ring-0 focus:outline-none"
              placeholder="Enter your Task" 
              required 
          />
          <button className="absolute bottom-[.7rem] right-4 cursor-pointer border-[2px] rounded-md hover:border-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-600 hover:text-gray-800">
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
          </button>
        </div>
      </form>
      
    </>
  )
}

export default App

