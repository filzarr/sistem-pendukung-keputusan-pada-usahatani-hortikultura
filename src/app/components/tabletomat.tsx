import React, { use, useState } from 'react'
import formatRupiah from '../helpers/formatRupiah';
interface TableTomatProps {
     luas: number;
     harga: number;
     periode: number;
     bulan: number;
}
const Tabletomat: React.FC<TableTomatProps> = ({ luas, harga, periode, bulan }) => {
     let benih = luas * 458.30;
     let panen = 83.30 * harga; 
     const getMonthlyData = (monthIndex: number) => {
          if (monthIndex >= bulan) {  
               
              return ((monthIndex == bulan) || ((monthIndex - bulan) % periode === 0)  ) ? formatRupiah(panen) : '0';
          }
          return '0';
      };
  
      const monthlyData = Array.from({ length: 12 }, (_, monthIndex) => getMonthlyData(monthIndex + 1));
     return (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                         <tr>
                              <th scope="col" className="px-6 py-3">
                                   Nama
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 1
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 2
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 3
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 4
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 5
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 6
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 7
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 8
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 9
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 10
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 11
                              </th>
                              <th scope="col" className="px-4 py-3 text-center text-xs">
                                   Bulan 12
                              </th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   Benih
                              </th>
                              <td className="px-6 py-4 text-center text-xs">{formatRupiah(benih)}</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk kandang
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.625.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk KCL
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk KCL
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.100.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk NPK
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.250.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.250.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.250.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.250.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.250.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk SS
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk TSP
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.150.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pupuk paten kali
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.185.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.185.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pestisida
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.50.000</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   pestisida
                              </th>
                              <td className="px-6 py-4 text-center text-xs">Rp.1.000.000</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                              <td className="px-6 py-4 text-center text-xs">Rp.0</td>
                         </tr>
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                   scope="row"
                                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                   Pemanenan
                              </th>
                              {monthlyData.map((data, monthIndex) => (

                                <td key={monthIndex} className="px-6 py-4 text-center text-xs">{data}</td>
                            ))}
                         </tr>
                    </tbody>
               </table>
          </div>
     )
}

export default Tabletomat;