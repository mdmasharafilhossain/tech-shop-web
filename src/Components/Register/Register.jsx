import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, password, photo)
        setErrorMessage('');
        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("You shuold have atleast one uppercase letter")
            return
        }
        else if (/^[a-zA-Z0-9]+$/.test(password)) {
            setErrorMessage("Use Atleast One special Character")
            return
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                });

                Swal.fire({
                    title: 'Done',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

            })
            .catch(error => {
                console.error(error);
                setErrorMessage(error.message)
            })
    }

    return (
        <div>
            <div className="bg-green-100 py-16">
                <div className="mt-[500px] md:mt-60 lg:mt-60 text-center">
                    <div className="border bg-green-200 p-5">
                        <h2 className="text-4xl font-bold text-green-600">Please Register</h2>

                        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-green-600 border-none font-bold text-white text-base hover:bg-green-700">Register</button>
                            </div>
                        </form>
                        {
                            errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                        }
                        <p className="text-xl mt-10">Already Have An Account?Please <Link to="/login" className="font-bold text-green-600">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;