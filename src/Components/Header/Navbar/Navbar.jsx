
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 py-4 ">
                <div className="flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu className='text-2xl' />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-lg font-bold">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-lg font-bold">
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li className="text-lg font-bold">
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className=' flex-1 items-end justify-end text-right'>
                    <NavLink to="/" >
                        <Logo></Logo>
                    </NavLink>
                    </div>

                </div>
                <div className="flex-1 hidden lg:flex justify-end">
                    <ul className="flex items-center gap-10">
                        <li className="text-lg font-bold">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-lg font-bold">
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li className="text-lg font-bold">
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;