import React from 'react';

const Contributions = () => {
  return (
    <section className="contributions bg-gray-50 py-10 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contributions</h2>
      
      <div className="bank-details mb-10">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Bank Deposit</h3>
        <p className="text-gray-700 mb-2">
          Members can make contributions and loan repayments directly through the bank:
        </p>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Bank:</span> CO-OPERATIVE BANK
          </li>
          <li>
            <span className="font-semibold">Branch:</span> NAIROBI BUSINESS CENTRE
          </li>
          <li>
            <span className="font-semibold">Account Name:</span> Sunset SACCO
          </li>
          <li>
            <span className="font-semibold">Account Number:</span> 011201234500
          </li>
          <li>
            <span className="font-semibold">Reference:</span> YOUR ID NUMBER followed by the respective short code (e.g., 12345678DEP)
          </li>
        </ul>
      </div>

      <div className="mpesa-details">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">M-PESA Paybill</h3>
        <p className="text-gray-700 mb-6">
          Members can also make deposits and loan repayments through Mpesa Paybill No. <strong>850436</strong>.
        </p>

        <div className="instructions bg-white p-6 shadow-lg rounded-lg mb-10">
          <h4 className="text-lg font-semibold text-blue-600 mb-4">Instructions on How to Deposit</h4>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Go to M-PESA, then select LIPA na M-PESA.</li>
            <li>Select <strong>PAYBILL</strong>.</li>
            <li>Enter <strong>850436</strong> as the Business Number.</li>
            <li>Enter <strong>YOUR ID NUMBER</strong> followed by the respective short code (e.g., 12345678DEP).</li>
            <li>Enter the amount you wish to deposit (Between Ksh 10 - Ksh 70,000).</li>
            <li>Enter your M-PESA PIN.</li>
            <li>Confirm details are correct and press OK.</li>
          </ol>
        </div>

        <div className="short-codes">
          <h4 className="text-lg font-semibold text-blue-600 mb-4">Short Codes</h4>
          <p className="text-gray-700 mb-4">
            Use the following short codes for the respective product descriptions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { code: 'ENT', description: 'Entrance Fee' },
              { code: 'DEP', description: 'Deposit Contribution' },
              { code: 'WEF', description: 'Welfare Fund' },
              { code: 'SAV', description: 'Savings Account' },
              { code: 'NOM', description: 'Normal Loan' },
              { code: 'EM1', description: 'Emergency Loan 1' },
              { code: 'EM2', description: 'Emergency Loan Top-up' },
              { code: 'SH1', description: 'School Fee Loan' },
              { code: 'SH2', description: 'School Fee Loan 2' },
              { code: 'SUP', description: 'Super Loan' },
              { code: 'JIB', description: 'Jibu Loan' },
              { code: 'MOB', description: 'Mobile Loan' },
              { code: 'DAR', description: 'Daraja Loan' },
              { code: 'DIV', description: 'Dividend Advance' },
              { code: 'SAL', description: 'Salary Account' },
              { code: 'FLA', description: 'Flash Loan' },
              { code: 'CO1', description: 'College Fees Loan' },
              { code: 'CO2', description: 'College Loan 2' },
              { code: 'ITR', description: 'Interest Arrears' },
              { code: 'TOP', description: 'Top-up Loan' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-md">
                <p>
                  <strong>{item.code}</strong>: {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
