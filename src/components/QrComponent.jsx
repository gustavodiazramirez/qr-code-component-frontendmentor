import React from "react";

export const QrComponent = () => {
  return (
    <><div className="bg-light-gray bg-auto  h-screen flex justify-center items-center">
      <div className="max-w-96 rounded-2xl bg-white overflow-hidden shadow-lg text-center">
        <img
          className="rounded-[35px] p-5"
          src="./images/image-qr-code.png"
          alt="QR Code for Frontend Mentor"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-5 px-2 ">
            Improve your front-end skills by building projects
          </div>
          <p className="text-gray-400 font-medium text-md px-5 mb-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
export default QrComponent;
