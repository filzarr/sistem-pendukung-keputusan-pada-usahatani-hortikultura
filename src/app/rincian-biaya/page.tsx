"use client";
import { Accordion, AccordionContent } from "flowbite-react";
import React from "react";

const Rincian = () => {
  return (
    <div className=" px-[32px] md:px-[64px] lg:px-[128px]   py-[64px] space-y-8">
      <header>
        <p className="text-center  text-3xl font-bold text-[#65B741]">
          Rincian Biaya
        </p>
      </header>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className="p-5">Tomat</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Luas lahan penanaman = 6000 m2
              <br />
              Bunga Pembandingan = 6 %
              <br />
              Harga per kg = Rp 9.000
              <br />
              Sewa lahan = Rp 4.000.000
            </p>

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
                    <td className="px-6 py-4 text-center text-xs">Rp.2.750.000</td> 
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
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.500.000</td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Cabai Merah</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Luas lahan penanaman = 6000 m2
              <br />
              Bunga Pembandingan = 6 %
              <br />
              Harga per kg = Rp 30.000
              <br />
              Sewa lahan = Rp 4.000.000
            </p>

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
                    <td className="px-6 py-4 text-center text-xs">Rp.8.000.000</td> 
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
                    <td className="px-6 py-4 text-center text-xs">Rp.750.000</td> 
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
                      pupuk borate  
                    </th>
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.100.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.100.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.100.000</td> 
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
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.200.000</td> 
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Pengolahan Tanaman
                    </th>
                    <td className="px-6 py-4 text-center text-xs">Rp.1.500.000</td> 
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
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.0</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                    <td className="px-6 py-4 text-center text-xs">Rp.400.000</td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Rincian;
