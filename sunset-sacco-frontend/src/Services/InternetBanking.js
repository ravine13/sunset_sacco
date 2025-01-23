import React from 'react';

const InternetBanking = () => {
  return (
    <section className="internet-banking bg-gray-50 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Internet Banking</h2>
      
      <p className="text-gray-700 text-lg mb-6">
        The Online Portal allows members to access their membership details remotely through the internet. 
        Members can view their statements, account status, and transaction history from anywhere in the world.
      </p>

      <div className="text-gray-700 text-lg space-y-4 mb-8">
        <h3 className="text-xl font-semibold text-blue-600">Key Features:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>View account statements and transaction history.</li>
          <li>Monitor account status in real time.</li>
          <li>Access your membership details anytime, anywhere.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mb-4">How to Access the Service</h3>
      <p className="text-gray-700 text-lg mb-6">
        To access the service, you need to register for portal services. Once registered, you will receive a start key 
        on the mobile phone number provided in your membership details.
      </p>

      <div className="flex justify-center">
        <a
          href="/register-portal"
          className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Register for Internet Banking
        </a>
      </div>
    </section>
  );
};

export default InternetBanking;
