import React from 'react';

const Eligibility = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Sunset SACCO</h1>
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Membership Eligibility</h2>

      <p className="text-lg text-gray-700 mb-4">
        <strong>Who Can Join Sunset SACCO?</strong>
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Any person can join Sunset SACCO from all segments of the market, including:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
        <li>Public Service employees</li>
        <li>Other Government Ministries and Parastatals</li>
        <li>Employees of Sunset SACCO</li>
        <li>National Government & County Employees</li>
        <li>Employees of Private organizations & Parastatals</li>
        <li>Private Individual members</li>
        <li>Chamas & Corporates</li>
      </ul>

      <p className="text-lg text-gray-700 mb-4">
        Individuals interested in joining Sunset SACCO shall fill in the membership application form and forward it to our offices together with:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-4">
        <li>Copy of National Identity Card</li>
        <li>A passport size photograph</li>
        <li>Current pay slip for members contributing through the check-off system</li>
        <li>Filled Nominee Form</li>
        <li>Pay an entrance fee of Ksh. 1,000</li>
        <li>
          Make minimum monthly contributions of Ksh. 1,000 or 5% of the basic salary, whichever is higher
        </li>
        <li>
          Take up the minimum share capital within the first 12 months of membership. The minimum share capital as of 31st December 2023 was Ksh. 16,000
        </li>
        <li>
          Contribute Ksh. 200 monthly to the welfare fund. The fund covers death of the principal member, spouse, two (2) children per year, and biological parents
        </li>
      </ul>
    </section>
  );
};

export default Eligibility;
