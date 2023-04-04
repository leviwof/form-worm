import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom/';

const SignupForm = ({ setIsloggedin }) => {
    const navigate = useNavigate();

    const [FormData, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);
    const [accountype, setAccountype] = useState("student");

    function changeHandler(event) {
        setFormdata((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (FormData.password != FormData.confirmPassword) {
            toast.error("Password does not match");
            return;
        }
        setIsloggedin(true);
        toast.success("Account created");
        const accountData = {
            ...FormData
        };

        const finalData = {
            ...accountData,
            accountype
        }

        console.log("Printing final account data");
        console.log(finalData);

        navigate("/dashboard");
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

                <button
                    className={
                        `${accountype === "student" ?
                            "bg-richblack-900 text-richblack-5" :
                            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full
                            transition-all duration-200`}
                    onClick={() => setAccountype("student")}>
                    Student
                </button>

                <button
                    className={
                        `${accountype === "instructor" ?
                            "bg-richblack-900 text-richblack-5" :
                            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full
                            transition-all duration-200`}
                    onClick={() => setAccountype("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            first name<sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="enter first name"
                            value={FormData.firstname}
                            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />
                    </label>

                    <label className='w-full'>
                        <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>last name
                            <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="enter last name"
                            value={FormData.lastname}
                            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />
                    </label>
                </div>

                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address
                            <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="enter email"
                            value={FormData.email}
                            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />
                    </label>
                </div>

                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password
                            <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="enter password"
                            value={FormData.password}
                            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>{
                                showPassword ?
                                    (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2Bf' />) :
                                    (<AiOutlineEye fontsize={24} fill='#AFB2Bf' />)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text=[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm password
                            <sup className='text-red-600'>*</sup></p>
                        <input
                            required
                            type={confirmPassword ? ("text") : ("password")}
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="confirm password"
                            value={FormData.confirmpassword}
                            className="bg-richblack-800 rounded-md text-richblack-5 w-full p-[12px]" />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setconfirmPassword((prev) => !prev)}>
                            {confirmPassword ?
                                (<AiOutlineEyeInvisible fontsize={24} fill='#AFB2Bf' />) :
                                (<AiOutlineEye fontsize={24} fill='#AFB2Bf' />)}
                        </span>
                    </label>
                </div>

                <button className="w-full
                bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-6">
                    Create Acount</button>
            </form>
        </div>
    )
}

export default SignupForm
