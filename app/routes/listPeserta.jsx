import { useLocation } from '@remix-run/react';

const ListPeserta = () => {
    const location = useLocation();
    const dataPeserta = location.state.dataPeserta.data;
    console.log(dataPeserta);

    return (
            <div className="h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat bg-gradient-to-b from-indigo-600 to-pink-400">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-2xl font-bold text-[#FFC300] mb-6">LIST PESERTA</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">No</th>
                            <th className="border border-gray-300 px-4 py-2">Nama</th>
                            <th className="border border-gray-300 px-4 py-2">NPM</th>
                            <th className="border border-gray-300 px-4 py-2">Angkatan</th>
                            <th className="border border-gray-300 px-4 py-2">Program Studi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPeserta.map((peserta, index) => (
                            <tr key={index} className="text-center bg-slate-500">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{peserta.fullName}</td>
                                <td className="border border-gray-300 px-4 py-2">{peserta.npm}</td>
                                <td className="border border-gray-300 px-4 py-2">{peserta.angkatan}</td>
                                <td className="border border-gray-300 px-4 py-2">{peserta.programStudi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button className='flex justify-end items-end pt-6'>
                    <a href='/' className='text-sm w-full p-2 rounded-lg bg-blue-500 text-yellow-400 hover:font-extrabold hover:underline hover:p-3'>Login Page</a>
                </button>
            </div>
            </div>
            </div>

    );
}

export default ListPeserta;
