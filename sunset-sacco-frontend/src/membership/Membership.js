import React from 'react';

const Membership = () => {
  const eligibilityList = [
    "National Government ministries and parastatals",
    "County employees",
    "Private sector",
    "Organized groups e.g. youth groups, women groups etc",
    "Immediate family of an existing member",
  ];

  const principlesList = [
    "Voluntary and open membership",
    "Democratic member control",
    "Economic participation by the members",
    "Autonomy and independence",
    "Education, training and information",
    "Co-operation among co-operatives",
    "Concern for community in general",
  ];

  return (
    <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Membership</h2>
      
      <h3 className="text-2xl font-semibold text-gray-700 mt-6">Eligibility</h3>
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
        {eligibilityList.map((eligibility, index) => (
          <li key={index}>{eligibility}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-6">Principles Guiding Our Business</h3>
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
        {principlesList.map((principle, index) => (
          <li key={index}>{principle}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-6">Membership Application</h3>
      <p className="text-lg text-gray-700 mt-2">
        Application for membership is on a prescribed application form which should be filled and forwarded to the Office for consideration. Members whose applications are successful are sent an acknowledgement, and deduction is effected in the Payroll immediately. Employers are required to introduce their employees who wish to join the SACCO and commit themselves to deduct and remit all the Society’s dues through the Check-off System.
      </p>

      <h3 className="text-2xl font-semibold text-gray-700 mt-6">Entrance Fee and Monthly Contributions</h3>
      <p className="text-lg text-gray-700 mt-2">
        Each applicant shall pay a one-off entrance fee of Kshs 1000/= as prescribed in the Sacco By-laws, which is non-refundable. In the event that share contributions are received before the entrance fee, the same shall be deducted from the shares so received. Every member shall be required to make a minimum deposit contribution of Ksh. 1,000 /= per month or 5% of basic salary whichever is higher.
      </p>
    </section>
  );
};

export default Membership;
