import { Link } from '@remix-run/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from '@remix-run/react';

export const meta = () => {
  return [
    { title: "Login Form" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => {
  const [dataPeserta, setDataPeserta] = useState([]); // set array buat dipassing ke page listPeserta
  const navigate = useNavigate();// untuk navigasi ke page listPeserta

  const handleListPeserta = async () => {
    try {
      // untuk methode get menggunakan axios
      const response = await axios.get('https://learn-remix.exe24.me/test');
      // untuk check apakah data berhasil di fetch
      console.log('berhasil'); 
      console.log(response.data);
      // set dataPeserta dengan data yang di fetch
      setDataPeserta(response.data);
      // navigate ke page listPeserta dengan passing dataPeserta
      navigate('/listPeserta', { state: { dataPeserta: response.data } });
    } 
    //handle error
    catch (error) {
      console.log('gagal');
      
    }
  };

  const handleFormSubmit = async (event) => {
    // penggunaan preventDefault untuk mencegah reload page
    event.preventDefault();
    // membuat form data
    const formData = new FormData(event.target);
    const display_name = String(formData.get('display_name'));
    const password = String(formData.get('password'));
    const npm = String(formData.get('npm'));
    console.log(display_name, password, npm);

    try {
      // menggunakan api tian untuk mengecek apakah data berhasil di post
      const response = await axios.post('https://latihan-express.vercel.app/user', {
        display_name,
        password,
        npm

      }); 
      // untuk check apakah data berhasil di fetch
      console.log('berhasil');
      console.log(display_name, npm , password);
      console.log(response.data);
      
    } 
    // handle error
    catch (error) {
      console.log('gagal');
  
    }
  };

  return (
    <div className="h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat bg-gradient-to-b from-indigo-600 to-pink-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-bold text-[#FFC300]">
            LOGIN FORM
        </h1>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white/30 backdrop-blur-sm">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" method='post' onSubmit={handleFormSubmit}>
              <div>
                <h2  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</h2>
                <input type="text" name='display_name' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Username....." required />
              </div>
              <div>
                <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</h2>
                <input type="password" name='password' placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                <h2  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NPM</h2>
                <input type="text" name='npm' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your npm...." />
              </div>
              <div className="grid grid-cols-3 gap-4">
                  <div className="ml-3 text-sm col-span-2">
                    <button type="submit" className="w-full p-1 rounded-lg bg-blue-600 text-[#FFC300] hover:font-extrabold hover:underline hover:p-2">Sign in</button>
                  </div>
                <div className='ml-3 text-sm col-span-1'>
                  <button type="button" onClick={handleListPeserta} className="w-full p-1 rounded-lg bg-blue-600 text-[#FFC300] hover:font-extrabold hover:underline hover:p-2">
                  List Peserta
                  </button>
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
