import React from 'react';

const RequestLoan = () => {
  return (
    <section className="loan-request bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Request a Loan</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        <strong>General Loan Requirements</strong>
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
        <li>Applicants are required to be familiar with the Society’s current Credit Policy.</li>
        <li>The applicant must ensure parts B - H are filled in full. Incomplete forms will be returned unconsidered.</li>
        <li>
          The applicant is required to attach the following documents to the loan application:
          <ul className="list-inside list-disc pl-4 space-y-1 mt-2">
            <li>2 months original current pay-slip (not more than two months old from the date of application)</li>
            <li>Copy of National ID card</li>
            <li>Original Log book, Title Deed & Fixed Deposit/Share deposit statement (where applicable)</li>
            <li>KRA PIN</li>
            <li>6 months bank statement (where applicable)</li>
          </ul>
        </li>
        <li>All loans are processed as they are received.</li>
        <li>All loans shall be disbursed through FOSA Accounts. To enable the Society to transfer your funds to your Bank account, please indicate your Bank Account Number, Name of Bank, and Branch under section F.</li>
        <li>In case your loan is not recovered through the Payroll, ensure that it’s paid by CASH, PAYBILL (850436) promptly to avoid interest in arrears, penalty, and DEFAULT.</li>
        <li>For Non check-off members, initiate standing order instructions ahead of disbursement.</li>
        <li>
          For Private members and members who are on contract/temporary employment terms, attach a guarantor consent form to the loan application form.
        </li>
      </ul>

      <p className="text-lg text-gray-700 mb-4">
        Please make sure all sections of the form are filled completely and that the required documents are attached. Incomplete applications will not be processed.
      </p>
    </section>
  );
};

export default RequestLoan;
