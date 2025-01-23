import React from 'react';

const WelfareFund = () => {
  return (
    <section className="welfare-fund bg-gray-100 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Members' Welfare Fund</h2>
      
      <p className="text-gray-700 text-lg mb-4">
        This is a benevolent fund that covers the principal member, spouse, children, and biological parents.
      </p>
      
      <p className="text-gray-700 text-lg mb-6">
        Each member contributes <span className="font-semibold">Ksh. 200</span> per month to the Welfare Fund.
      </p>
      
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Benefits of the Fund</h3>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
        <li><strong>Principal Member:</strong> Ksh. 100,000</li>
        <li><strong>Spouse:</strong> Ksh. 75,000</li>
        <li><strong>Child:</strong> Ksh. 50,000 (for two children in a year)</li>
        <li><strong>Biological Parents:</strong> Ksh. 30,000</li>
      </ul>
      
      <p className="text-gray-700 text-lg mb-6">
        Members are required to fill the Benevolent Fund Nominee Form, attach supporting documents, 
        and submit to Hazina Sacco. An administrative fee of <span className="font-semibold">Ksh. 20,000</span> 
        is charged on account claim of Ksh. 100,000 per year.
      </p>
      
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Note:</h3>
      <ul className="list-decimal list-inside text-gray-700 text-lg space-y-3">
        <li>A member becomes eligible to this benefit after 6 months contribution.</li>
        <li>Each member is considered independently in cases where both a member and their spouse are members.</li>
        <li>Children are covered from the date of notification of birth to 25 years of age.</li>
        <li>
          Death certificate(s) must be submitted within one month after death notification, failure to which payment 
          will be deducted from the member’s deposits or salary.
        </li>
        <li>
          50% of the amount contributed to the welfare fund will be refunded to members who have never claimed 
          welfare benefits. Refunds will be made upon withdrawal from the Sacco.
        </li>
        <li>
          If a member is found to have defrauded the Sacco on any welfare claim, the amount paid will be deducted 
          from their deposits or any other payment due. Additionally, the member will pay a penalty of 
          <span className="font-semibold"> Ksh. 20,000</span>.
        </li>
      </ul>
    </section>
  );
};

export default WelfareFund;
