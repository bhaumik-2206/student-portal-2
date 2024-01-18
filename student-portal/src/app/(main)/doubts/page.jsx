"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import SVG from "react-inlinesvg"
import AddDoubtForm from "../../../components/shared/pop-up/doubt-add-form"

const DoubtPage = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='p-4'>
                <button
                    onClick={() => setShow(true)}
                    className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    <SVG src="/assets/icons/plus.svg" className='w-4 h-4 inline mr-3' />
                    Add Doubt</button>

            </div>
            {show && <AddDoubtForm setShow={setShow} />}



            <div className='grid grid-cols-2'>
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="max-w-2xl mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8">
                        <div className="overflow-hidden shadow-md">
                            <div className="px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 font-bold uppercase">
                                Topic heading
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200">
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border-gray-200 text-right">
                                <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                <Link className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 rounded uppercase"
                                    href="/doubts">Show full</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DoubtPage