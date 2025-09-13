import React, { useState } from 'react'

const Comfirmation_Modal = () => {
  const [isOpen , setIsopen] = useState(false);
  const [actionStatus , setActionStatus] = useState("");

  const handelOpen = () => setIsopen(true);

  const handelConfirm = () => {
    setIsopen(false);
    setActionStatus('Confirmed');
  }

  const handelCancel = () => {
    setIsopen(false);
    setActionStatus('Canceld');
  }

  return (
    <div className="flex flex-col items-center mt-50">
      <button 
        onClick={handelOpen}
        className="m-8 py-2 px-5 bg-[#0077b6] text-white border-none rounded-lg text-xl cursor-pointer transition-colors duration-75 ease-in hover:bg-[#023e8a]">
          Open Confirmation Modal
        </button>

      {
        isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-neutral-300 flex justify-center items-center z-[999]">
            <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[600px] text-center shadow-2xl animate-fadeIn">
              <h2 className="text-4xl mt-5 font-medium">Confirm Action</h2>
              <p className="text-2xl mt-5">Are you sure you want to proceed?</p>

              <div className="mt-5 flex justify-center gap-5 items-center">
                <button onClick={handelConfirm} className="bg-green-500 px-5 py-2 flex-1 border-none rounded-xl text-white text-xl">Confirm</button>
                <button onClick={handelCancel} className="flex-1 bg-red-500 px-5 py-2 border-none rounded-xl text-white text-xl">Cancel</button>
              </div>
            </div>
          </div>
        )
      }

      <div className="text-2xl font-medium">{actionStatus}</div>
    </div>
  );
}

export default Comfirmation_Modal
