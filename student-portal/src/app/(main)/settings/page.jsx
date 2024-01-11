"use client"

import React from 'react'

import InputComponent from '@/components/shared/form/input-component'
import { toast } from 'react-toastify'


const SettingPage = () => {
    return (
        <>
            <div className='divide-y-2 divide-blue-600 dark:divide-black'>
                <div className='grid grid-cols-3'>
                    <div className='p-6 col-span-1'>
                        <h2 className='text-xl font-bold mb-3'>Change password</h2>
                        <p><i>Update your password associated with your account.</i></p>
                    </div>

                    <form className="p-6 flex flex-col justify-center col-span-2">
                        <InputComponent label="Current password" name="currpass" id="currpass" placeholder="current Password" />
                        <InputComponent label="New password" name="newpass" id="newpass" placeholder="New Password" />
                        <InputComponent label="Confirm password" name="confpass" id="confpass" placeholder="Confirm Password" />
                        <button type="button" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            Save
                        </button>
                    </form>
                </div>

                <div className='p-6 grid grid-cols-3'>
                    <div className='p-6 col-span-1'>
                        <h2 className='text-xl font-bold mb-3'>Log out other sessions</h2>
                        <p><i>Please enter your password to confirm you would like to log out of your other sessions across all of your devices.</i></p>
                    </div>
                    <form className="p-6 flex flex-col justify-center col-span-2">
                        {/* <div className="flex flex-col">
                            <label htmlFor="logpassword">Your password</label>
                            <input type="password" name="logpassword" id="logpassword" placeholder="current Password" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
                        </div> */}
                        <InputComponent label="Your password" name="yourpass" id="yourpass" placeholder="Your Password" />

                        <button onClick={()=>toast.success("Logged out")} type="button" className="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                            Log out
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SettingPage