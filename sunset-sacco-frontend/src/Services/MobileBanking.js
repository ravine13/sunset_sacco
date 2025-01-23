import React from 'react';

const MobileBanking = () => {
  return (
    <section className="mobile-banking bg-gray-50 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Mobile Banking</h2>
      
      <p className="text-gray-700 text-lg mb-6">
        Mobile banking allows members to transact remotely using their mobile phone. To access the services, 
        a member must fill and submit the Mobile Banking Application Form.
      </p>
      
      <div className="text-gray-700 text-lg space-y-4 mb-8">
        <p>The service can be accessed by:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Dialing <span className="font-semibold text-blue-600 mb-6">*850#</span></li>
          <li>
            Installing the <span className="font-semibold">Sunset Sacco App</span> from 
            <a 
              href="https://play.google.com/store/apps" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline ml-1"
            >
              Play Store
            </a> on your Android phone
          </li>
        </ul>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-600 mb-6">Using the App</h3>
      <p className="text-gray-700 text-lg mb-6">
        To use the app, you will be required to verify your membership by providing the mobile phone number 
        that you indicated on the Mobile Banking Application Form. Once verified, you will receive a PIN on your phone 
        which you will use to log in.
      </p>

      <div className="flex justify-center">
        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 transition duration-300"
        >
          Download Sunset Sacco App
        </a>
      </div>
    </section>
  );
};

export default MobileBanking;
