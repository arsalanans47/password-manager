import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {
  const ref = useRef()
  const passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setPasswordarray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordarray(JSON.parse(passwords))
    }
  }, [])


  const showpassword = () => {

    // alert("show the password")
    if (ref.current.src.includes("/icons/cross_eye.png")) {
      ref.current.src = "/icons/open_eye.png"
      passwordref.current.type = "password"
    } else {
      ref.current.src = "/icons/cross_eye.png"
      passwordref.current.type = "text"
    }
  }

  const copytext = (text) => {

    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigator.clipboard.writeText(text)
  }



  const savepassword = () => {
    if(form.site.length >3 && form.username.length >3 &&form.password.length >3){
    setPasswordarray([...passwordarray, { ...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...passwordarray, { ...form, id: uuidv4() }]))
    console.log([...passwordarray, form])
    setform({ site: "", username: "", password: "" })

    toast('Password saved!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  else{
     toast('Error: Password not saved!');
  }

  }

  const deletepassword = (id) => {
    toast('Password deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log('dleting password with id', id)
    setPasswordarray(passwordarray.filter(item => item.id !== id))
    localStorage.setItem("passwords", JSON.stringify(passwordarray.filter(item => item.id !== id)))
    // console.log([...passwordarray, form])
  }

  const editpassword = (id) => {
    console.log('editing password with id', id)
    setform(passwordarray.filter(i => i.id === id)[0])
    setPasswordarray(passwordarray.filter(item => item.id !== id))
    // localStorage.setItem("passwords", JSON.stringify([...passwordarray, form]))
    // console.log([...passwordarray, form])
  }


  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="mx-auto max-w-5xl p-2  md:mycontainer min-h-[83.6dvh]  ">
        <h1 className='text-4xl font-bold text-center'>
          <span className="text-green-500">&lt;</span>
          Lock
          <span className='text-green-500'>It /&gt;</span></h1>
        <p className='text-green-700 text-lg text-center'>Your own password manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-lg border border-green-500 bg-white w-full px-4 py-1' type="text" name="site" id="site" />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">

            <input value={form.username} onChange={handlechange} placeholder='Enter username' className='rounded-lg border border-green-500 bg-white w-full p-4 py-1' type="text" name="username" id="username" />
            <div className="relative">

              <input ref={passwordref} value={form.password} onChange={handlechange} placeholder='Enter Password' className='rounded-lg border bg-white border-green-500 w-full p-4 py-1' type="password" name="password" id="password" />
              <span className='absolute right-[3px] top-[7px] cursor-pointer ' onClick={showpassword}>
                <img ref={ref} width={20} src="/icons/open_eye.png" alt="eye" />
              </span>
            </div>


          </div>

          <button onClick={savepassword} className='font-bold flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover">
            </lord-icon>Save</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
          {passwordarray.length === 0 && <div>No password to show</div>}
          {passwordarray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className='bg-green-400 text-white'>
              <tr>
                <th className='py-2'>Site URL</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordarray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-2 border-2 border-white text-center '>
                    <div className='flex items-center justify-center gap-1' >
                      <a href={item.site}>{item.site}</a>

                      <div className='flex justify-center items-center size-6 cursor-pointer' onClick={() => { copytext(item.site) }}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=' py-2 border-2 border-white text-center'>
                    <div className='flex items-center justify-center gap-1' >
                      <span>{item.username}</span>
                      <div className='flex justify-center items-center size-6 cursor-pointer' onClick={() => { copytext(item.username) }}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=' py-2 border-2 border-white text-center'>
                    <div className='flex items-center justify-center gap-1' >
                      <span>{item.password}</span>

                      <div className='flex justify-center items-center size-6 cursor-pointer' onClick={() => { copytext(item.password) }}>

                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=' py-2 border-2 border-white text-center'>
                    <span className='size-4 cursor-pointer mx-1' onClick={() => { editpassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                    <span className='size-4 cursor-pointer mx-1' onClick={() => { deletepassword(item.id) }} >
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}

            </tbody>
          </table>}
        </div>
      </div>


    </>
  )
}

export default Manager
