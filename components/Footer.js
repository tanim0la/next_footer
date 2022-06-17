import React from 'react'
import { BeakerIcon } from '@heroicons/react/outline'

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              tani<span className="text-blue-600">m0la</span>
            </p>
            <div className="flex gap-5 pb-5">
              <BeakerIcon className="h-6 w-6 cursor-pointer hover:text-yellow-600 hover:animate-bounce" />
              <BeakerIcon className="h-6 w-6 cursor-pointer hover:text-blue-600 hover:animate-bounce" />
              <BeakerIcon className="h-6 w-6 cursor-pointer hover:text-red-600 hover:animate-bounce" />
              <BeakerIcon className="h-6 w-6 cursor-pointer hover:text-green-600 hover:animate-bounce" />
            </div>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed Deposit
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-base pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 text-2xl font-bold pb-4">Support</p>
            <li className="text-gray-500 text-base font-semibold pb-2 hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-base font-semibold pb-2 hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-base font-semibold pb-2 hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-base font-semibold pb-2 hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-base font-semibold pb-2 hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center pb-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          © 2022 All rights reserved | Built by{' '}
          <span className="hover:text-blue-600 cursor-pointer">tanim0la</span>
        </h1>
      </div>
    </>
  )
}

export default Footer
