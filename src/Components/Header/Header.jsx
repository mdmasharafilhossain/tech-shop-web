import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/image_processing20210209-19545-1svrkst.gif"


const Header = () => {
    return (
        <div>
             <div className="shadow-xl bg-white z-50  pb-5 fixed top-0 left-0 right-0 border">
                <div className="container mx-auto mt-10 ">
                    <nav className="flex flex-col md:flex-col lg:flex-row items-center gap-5 justify-between">
                        <div className="flex">
                            
                            <img className="w-60 h-20 " src={logo} alt="" />
                        </div>

                        {/* This is banner text */}
                        <div className="flex ">
                            <ul className="flex flex-col md:flex-col lg:flex-row gap-1 md:gap-10 lg:gap-12">
                                <li>
                                    <NavLink
                                        to="/" style={{ fontWeight: "bold", fontSize: "25px" }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/login" style={{ fontWeight: "bold", fontSize: "25px" }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/register" style={{ fontWeight: "bold", fontSize: "25px" }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                                        }
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addProduct" style={{ fontWeight: "bold", fontSize: "25px" }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                                        }
                                    >
                                       Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myCart" style={{ fontWeight: "bold", fontSize: "25px" }}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                                        }
                                    >
                                        My Cart
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                        {/* <div className="flex">
                            <div>
                                <h2 className="text-xl font-bold text-green-600">{user?.displayName

                                }</h2>
                            </div>
                            <div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>
                            <div>
                                {
                                    user ?
                                        <button onClick={handleLogOut} className="bg-green-600 text-gray-200 font-bold text-2xl px-5 py-3 rounded-xl">Sign Out</button>

                                        :
                                        <Link to="/login"><button className="bg-green-600 text-gray-200 font-bold text-2xl px-5 py-3 rounded-xl">Sign In</button></Link>
                                }
                            </div>
                        </div> */}
                        <div>
                            <button>login</button>
                        </div>
                    </nav>

                </div>


            </div>
        </div>
    );
};

export default Header;