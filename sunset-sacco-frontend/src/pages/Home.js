import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-[1920px] mx-auto text-black text-sm bg-white">
      {/* Hero Section */}
      <section className="py-16 text-center bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Welcome to Sunset SACCO</h1>
          <p className="mt-4 text-lg">Your trusted partner in financial growth.</p>
          <button className="mt-8 px-6 py-3 bg-white text-orange-500 rounded-md shadow hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Sunset SACCO?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Savings', description: 'Grow your wealth securely.' },
              { icon: '🏦', title: 'Loans', description: 'Affordable financing options.' },
              { icon: '📈', title: 'Investments', description: 'Multiply your financial growth.' },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Members Say</h2>
          <div className="space-y-8">
            {[
              { name: 'Jane Doe', feedback: 'Sunset SACCO transformed my finances.' },
              { name: 'John Smith', feedback: 'Reliable and trustworthy services.' },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
                <p className="text-lg italic">\"{testimonial.feedback}\"</p>
                <h4 className="mt-4 text-lg font-bold">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
