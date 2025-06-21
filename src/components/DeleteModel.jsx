import React from 'react'

export default function DeleteModal(
    {
        isOpen,
        onClose,
        onConfirm,
        title,
        description
    }
) {
    if(!isOpen) return null
    return (
        // <div className='fixed inset-0 bg-black bg-opcatity-50 
        //     flex items-center justify-center z-50'>
        //     <div className='bg-black p-6 w-[300px]'>
        //         <h2>{title}</h2>
        //         <p>{description}</p>
        //     </div>
        //     <div>
        //         <button onClick={onClose}>Cancel</button>
        //         <button onClick={onConfirm}>Delete</button>
        //     </div>
        // </div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white w-[320px] rounded-xl shadow-2xl p-6 space-y-4 text-center relative">
    <h2 className="text-xl font-bold text-[#222740]">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>

    <div className="flex justify-between mt-6 space-x-4">
      <button
        onClick={onClose}
        className="flex-1 py-2 rounded-lg bg-gray-200 text-[#222740] hover:bg-gray-300 transition"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="flex-1 py-2 rounded-lg bg-[#F0C5CE] text-[#222740] hover:bg-[#EFD365] font-semibold transition"
      >
        Delete
      </button>
    </div>
  </div>
</div>

    )
}