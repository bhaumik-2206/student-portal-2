import React from 'react'

const InputComponent = ({ label, name, id, placeholder }) => {
    return (
        <>
            <div className="flex flex-col mb-2">
                <label htmlFor={id}>{label}</label>
                <input type="password" name={name} id={id} placeholder={placeholder} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
            </div>
        </>
    )
}

export default InputComponent