import React, { useEffect } from "react"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from "react";


export const Manager = () => {


    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const r = useRef()
    const passwordref = useRef()
    const showpassword = () => {

        passwordref.current.type = "text"
        if (r.current.src.includes("eyecross.png")) {

            r.current.src = "eye.png"
            passwordref.current.type = "password"
        }

        else {
            r.current.src = "eyecross.png"
        }


    }


    const handleChange = (e) => {

        setform({ ...form, [e.target.name]: e.target.value })
    }


    const savepassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {



            //await fetch("http://localhost:3000/",{ method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id:form.id }) })
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/",{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
            //localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            //console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
            toast('Password Saved', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        else {
            toast('Error length must be greater than 3', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }

    const deletePassword = async (id) => {
        console.log("Deleting password with id", id)
        let c = confirm("Do you really want to delete it")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
           // localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
           await fetch("http://localhost:3000/",{ method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({  id }) })
        }

    }


    const editPassword = (id) => {
        console.log("Editing password with id", id)
        setform({...passwordArray.filter(i => i.id === id)[0],id: id})
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }
    const copyText = (text) => {
        toast('Texted Copied!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        console.log(passwords)
        setpasswordArray(passwords)


    }


    useEffect(() => {
        getPasswords()

    }, [])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />




            <div className="main  h-[89.7vh] w-full bg-orange-300 relative bottom-12">
                <div className="nav flex justify-center align-middle mt-12 p-2 ">
                    <span className='font-extrabold text-2xl'>&lt;</span>
                    <span className='font-extrabold text-2xl text-purple-700'>PassSak</span>
                    <span className='font-extrabold text-2xl'>&gt;</span>
                </div>
                <p className='text-center flex justify-center '>Your own password manager</p>

                <div className="form">
                    <div className="inp flex justify-center m-5  ">
                        < input onChange={handleChange} value={form.site} className='w-190 h-8 p-2 rounded-full border-black-700 border-2  hover:border-3 placeholder:p-0.5' type="text" name="site" id="" placeholder='Enter your URL' />
                    </div>

                    <div className='flex md:flex-row justify-center gap-3 ml-6 flex-col'>
                        <span>< input onChange={handleChange} value={form.username} className='md:w-125 w-59 h-8 mb-2 md:(h-8 rounded-full p-2 border-black-700 border-2 hover:border-3 placeholder:p-0.5)' type="text" name="username" id="" placeholder='Enter username ' /></span>
                        <span className="flex">< input ref={passwordref} onChange={handleChange} value={form.password} className=' md:w-59 w-50 h-8 rounded-full p-2 border-black-700 border-2 hover:border-3 placeholder:p-0.5 ' type="password" name="password" id="" placeholder='Enter password' />
                            <span onClick={showpassword} ><img ref={r} className='p-1 relative right-11 cursor-pointer' width={35} src="eye.png" alt="eye" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="btn w-full flex justify-center align-middle">
                    <button onClick={savepassword} className='w-35 h-13 p-2 m-10 flex gap-2 rounded-full border-2 hover:font-bold cursor-pointer  bg-green-500 '>
                        <lord-icon
                            className=" w-10.5"
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" ></lord-icon>
                        <span className='text-[23px] font-light hover:font-bold'>Save </span>
                    </button>
                </div>
                <div className="password">
                    <h1 className='font-extrabold text-[28px] text-center '>Your Passwords</h1>
                </div>

                {passwordArray.length === 0 && <div className='text-center p-3 text-[18px]'>No Password Found</div>}
                {passwordArray.length != 0 && <table class="table-auto relative max-md:w-80 xl:left-[25vw] lg:left-[20vw] md:left-[10vw] sm:left-[25vw] max-sm:left-[10vw]   w-170 rounded-md overflow-hidden">
                    <thead className='bg-green-700 text-white'>
                        <tr >
                            <th className='md:py-2 py-1  '>Site</th>
                            <th className='md:py-2 py-1 '>Username</th>
                            <th className='md:py-2 py-1  '>Password</th>
                            <th className='md:py-2 py-1 w-20 '>Action</th>

                        </tr>
                    </thead>
                    <tbody className='bg-green-200'>
                        {passwordArray.map((item) => {
                            return <tr className="border-b-2 border-white">
                                <td className='text-center md:py-2 py-1 border-white border-r-2'>
                                    <div className='flex items-center justify-center  ' onClick={() => { copyText(item.site) }}>
                                        <a href={item.site} target="_blank">
                                            <span>{item.site}</span></a>
                                        <div className='lordiconcopy size-7 cursor-pointer '> <lord-icon
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                            trigger="hover" >
                                        </lord-icon>
                                        </div>
                                    </div>

                                </td>

                                <td className='text-center md:py-2 py-1  border-white border-r-2'>
                                    <div className='flex items-center justify-center '>
                                        <span> {item.username}</span>
                                        <div className='lordiconcopy size-7 cursor-pointer ' onClick={() => { copyText(item.username) }}>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </div>

                                </td>

                                <td className='text-center md:py-2 py-1 border-white border-r-2' onClick={() => { copyText(item.password) }}>
                                    <div className='flex items-center justify-center'>
                                        <span> {item.password}</span>
                                        <div className='lordiconcopy size-7 cursor-pointer ' >
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center md:py-2 py-1 border-white border-r-2' >
                                    <span className="cursor-pointer mx-1" onClick={() => { editPassword(item.id) }}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                            trigger="hover"
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "0px" }}>
                                        </lord-icon></span>

                                    <span className="cursor-pointer mx-1" onClick={() => { deletePassword(item.id) }}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/skkahier.json"
                                            trigger="hover"
                                            style={{ "width": "25px", "height": "25px", "paddingTop": "0px" }}>
                                        </lord-icon>
                                    </span>
                                </td>

                            </tr>
                        })}
                    </tbody >
                </table >
                }



            </div >


        </>
    )
}
