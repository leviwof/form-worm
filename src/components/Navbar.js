import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isloggedin = props.isloggedin;
    let setIsloggedin = props.setIsloggedin;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>

            <Link to="/">
                <img src={logo} alt='logo' width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-white  '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
            </nav>

            {/*Login -signup-logout -dashboard  */}
            <div className='flex items-center gap-x-4'>
                {!isloggedin &&
                    <Link to="/login">
                        <button
                            className="py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Login
                        </button>
                    </Link>
                }
                {!isloggedin &&
                    <Link to="/signup">
                        <button className="py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Signup
                        </button>
                    </Link>
                }
                {isloggedin &&
                    <Link to="/">
                        <button
                            className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            onClick={() => {
                                setIsloggedin(false);
                                toast.success("Logged out");
                            }}>
                            Log out
                        </button >
                    </Link>
                }
                {isloggedin &&
                    <Link to="/dashboard">
                        <button
                            className="py-2 px-4 bg-red-500 text-white 
                            font-semibold rounded-lg shadow-md
                             hover:bg-purple-600 focus:outline-none
                              focus:ring-2 focus:ring-blue-400 
                              focus:ring-opacity-75">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
