import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsloggedin }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showpassword, setShowpassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsloggedin(true);
        toast.success("Logged in");
        console.log("Printing the formData ");
        console.log(formData);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
            <label className='w-full '>
                <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-600'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onchange={changeHandler}
                    placeholder="Enter email  address"
                    name="email"
                    className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />
            </label>

            <label className='w-full relative'>
                <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password  <sup className='text-pink-600'>*</sup></p>

                <input
                    required
                    type={showpassword ? ("text") : ("password")}
                    value={formData.password}
                    onchange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                    className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]"></input>

                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowpassword((prev) => !prev)}>
                    {showpassword ?
                        (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2Bf' />) :
                        (<AiOutlineEye fontsize={24} fill='#AFB2Bf' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>
                        Forgot Password</p>
                </Link>
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-6">
                Sign up
            </button>

        </form >)
}

export default LoginForm
