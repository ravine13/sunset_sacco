import React from 'react';

const Benefits = () => {
  const benefitsList = [
    "Access to loans of up to Ksh.30 million based on Shares/deposits",
    "Access to salary based loans of up to Ksh.4 million",
    "Access to salary advances",
    "Enjoy attractive interest on benefits",
    "Enjoy attractive dividends on Shares",
    "Get an excellent avenue to save for your retirement",
    "Enjoy continuous loan processing",
    "Be a shareholder of a fast-growing Sacco",
  ];

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Benefits</h2>
      <ul className="space-y-4">
        {benefitsList.map((benefit, index) => (
          <li key={index} className="flex items-start text-lg text-gray-700">
            <span className="text-green-500 mr-3">✔</span>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
