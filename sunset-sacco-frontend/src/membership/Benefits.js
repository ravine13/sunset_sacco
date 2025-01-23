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
    <section className="benefits">
      <h2>Benefits</h2>
      <ul>
        {benefitsList.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
