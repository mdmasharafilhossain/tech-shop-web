import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/image_processing20210209-19545-1svrkst.gif"
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch()
    }
    return (
        <div>
             <div className="shadow-xl bg-green-100 z-50  pb-5 fixed top-0 left-0 right-0 border">
                <div className="container mx-auto mt-10 ">
                    <nav className="flex flex-col md:flex-col lg:flex-row items-center gap-5 justify-between">
                        <div className="flex">
                            
                            <img className="w-52 h-16 " src={logo} alt="" />
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
                        <div className="flex">
                            <div>
                                <h2 className="mt-4 text-xl font-bold text-green-600">{user?.displayName

                                }</h2>
                            </div>
                            <div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full mt-3">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>
                            <div>
                                {
                                    user ?
                                        <button onClick={handleLogOut} className=" text-green-600 border-4 border-green-500
                                        hover:bg-green-50  font-bold text-2xl px-5 py-3 rounded-xl">Sign Out</button>

                                        :
                                        <Link to="/login"><button className=" text-green-600 border-4 border-green-500
                                        hover:bg-green-50 font-bold text-2xl px-5 py-3 rounded-xl">Sign In</button></Link>
                                }
                            </div>
                            <div>
                            <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  
  
</label>
                            </div>
                        </div>
                        <div>
                           
                        </div>
                    </nav>

                </div>


            </div>
        </div>
    );
};

export default Header;