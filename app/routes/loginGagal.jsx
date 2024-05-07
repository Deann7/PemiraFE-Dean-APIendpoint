import React from 'react'

function loginGagal() {
  return (
    <div className="h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat bg-gradient-to-b from-indigo-600 to-pink-400">
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white/30 backdrop-blur-sm">
        <button>
        <h1 className="flex items-center mb-6 text-3xl font-bold text-gray-600 ">Akun Yang Anda Cari Tidak Ditemukan </h1>
          <a href='/' className='flex justify-center items-center pt-2 font-semibold text-yellow-700'>Click here to back in Login Page.....</a>
        </button>
      </div>
    </div>
    </div>
  )
}

export default loginGagal