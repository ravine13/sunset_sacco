import React from 'react';

const Fosa = () => {
  const loanTypes = [
    {
      title: "Karibu Loan",
      description: "Granted to FOSA account holders whose salary passes through FOSA or with regular savings.",
      interestRate: "1.17% per month on reducing balance.",
      maxRepaymentPeriod: "54 months",
      link: "#", // Replace with actual link to download loan application form
    },
    {
      title: "HSF Special Advance Loan",
      description: "Interest rate of 1.15% per month on reducing balance.",
      interestRate: "1.15% per month on reducing balance.",
      maxRepaymentPeriod: "36 months",
      maxLoanAmount: "Ksh. 600,000",
      link: "#", // Replace with actual link to download loan application form
    },
    {
      title: "HSF Okoa Advance Loan",
      description: "Interest rate of 1.1% per month on reducing balance.",
      interestRate: "1.1% per month on reducing balance.",
      maxRepaymentPeriod: "18 months",
      maxLoanAmount: "Ksh. 400,000",
      link: "#", // Replace with actual link to download loan application form
    },
  ];

  return (
    <section className="fosa-loans bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">FOSA Loans</h1>

      <p className="text-lg text-gray-700 mb-4">
        FOSA loans are available to members with regular savings and salary deposits through the FOSA account. Below are the loan types available:
      </p>

      <div className="loan-types space-y-6">
        {loanTypes.map((loan, index) => (
          <div key={index} className="loan-type p-4 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{loan.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>{loan.description}</li>
              <li>{loan.interestRate}</li>
              <li>Max Repayment Period: {loan.maxRepaymentPeriod}</li>
              {loan.maxLoanAmount && <li>Max Loan Amount: {loan.maxLoanAmount}</li>}
            </ul>
            {loan.link && (
              <a
                href={loan.link}
                className="text-blue-600 mt-4 inline-block font-medium hover:underline"
              >
                Click here to download Loan Application Form
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-700 mt-6">
        ** Members are required to be familiar with the Society’s current Loan Policy. Loan applications must be duly filled and include the necessary documents.
      </p>
    </section>
  );
};

export default Fosa;
