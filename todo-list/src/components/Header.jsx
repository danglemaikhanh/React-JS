import Logo from '../assets/todo-logo.png'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-primary rounded-b-[2rem] h-28 mb-3 font-playpenSans">
            <div className="container flex justify-center sm:justify-start items-end gap-2 px-5">
                <img src={Logo} alt="todo-logo" className="w-24 "/>
                <div>
                    <h1 className="text-2xl text-black font-[600] uppercase">List</h1>
                    <span className="text-lg text-gray-700">Create your list</span>
                </div>    
            </div>  
        </nav>
    </>
  )
}

export default Header
