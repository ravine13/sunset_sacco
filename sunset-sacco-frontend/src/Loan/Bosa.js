import React from 'react';

const Bosa = () => {
  const loanTypes = [
    {
      title: "Normal /Development Loan",
      description: "Given at 5 times of a member’s deposits.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "84 months",
      link: "#", // Replace with actual link to download loan application form
    },
    {
      title: "Top-Up Normal /Development Loan",
      description: "Available to members who are servicing the Normal Loan.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "84 months",
      link: "#", // Replace with actual link to download loan application form
    },
    {
      title: "School Fees and College Fees Loans",
      description: "Given at 5 times of a member’s deposits.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "12 months",
      link: "#", // No form download link provided
    },
    {
      title: "Super Loan",
      description: "Given at 6 times of a member’s deposits.",
      interestRate: "1.15% per month on reducing balance.",
      maxRepaymentPeriod: "96 months",
      link: "#", // No form download link provided
    },
    {
      title: "Emergency Loan",
      description: "Given at 5 times of a member’s deposits.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "12 months",
      link: "#", // Replace with actual link to download loan application form
    },
    {
      title: "Top-Up Emergency Loan",
      description: "Given at 5 times of a member’s deposits.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "18 months",
      link: "#", // No form download link provided
    },
    {
      title: "Hisa Loan",
      description: "A facility for boosting a member’s deposits to access a bigger loan or clear an outstanding loan.",
      interestRate: "One off interest of 5% recovered from the loan issued.",
      maxRepaymentPeriod: "N/A",
      link: "#", // No form download link provided
    },
    {
      title: "Daraja Loan",
      description: "Advanced within deposits multiplier (*5)",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "48 months",
      link: "#", // No form download link provided
    },
    {
      title: "Jibu Loan",
      description: "For new members on check-off but have not finished the mandatory 4 months waiting period.",
      interestRate: "1% per month on reducing balance.",
      maxRepaymentPeriod: "24 months or within contract term",
      link: "#", // No form download link provided
    },
    {
      title: "Tech Loan",
      description: "Loan for acquisition of telecommunications products (mobile phones, tablets, laptops).",
      interestRate: "0.8% per month on reducing balance.",
      maxRepaymentPeriod: "12 months",
      link: "#", // No form download link provided
    },
  ];

  return (
    <section className="bosa-loans bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">BOSA Loans</h1>

      <p className="text-lg text-gray-700 mb-4">
        Members can access BOSA loans based on their deposits. The available loan types come with different repayment periods, interest rates, and loan limits.
      </p>

      <div className="loan-types space-y-6">
        {loanTypes.map((loan, index) => (
          <div key={index} className="loan-type p-4 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{loan.title}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>{loan.description}</li>
              <li>{loan.interestRate}</li>
              <li>Max Repayment Period: {loan.maxRepaymentPeriod}</li>
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

export default Bosa;
