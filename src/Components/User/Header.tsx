import { Link } from "react-router-dom"

export default function Header(){
    return (
        <header className="grid grid-cols-7 p-5">
            <div>
                <img src={'/logo-main.webp'} width={130} alt='logo' height={70}/>
            </div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact-us'}>Contact us</Link>
            <Link to={'/profile'}>Profile</Link>
            
            <div></div>
            
            <div className='flex'>
            <Link to={'/login'}>
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2">
                    Sign in
                </button>
                </Link>
                <Link to={'/signup'}>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    Sign up
                </button>
                </Link>
            </div>
        </header>
    )
}