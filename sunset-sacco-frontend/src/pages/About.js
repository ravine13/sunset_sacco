// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#FF5733] mb-6">About Sunset SACCO</h1>
        <p className="text-xl text-gray-700 mb-8">
          At Sunset SACCO, we are committed to fostering financial inclusion and empowering our community. Whether you are looking for a reliable partner to manage your savings or seeking financial assistance through loans, we have the tools, support, and expertise to help you achieve your financial goals.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#FF5733] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to provide sustainable and accessible financial services to members, ensuring their economic growth and stability. Through innovation and customer-focused solutions, we strive to create a positive impact on the lives of our members.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#FF5733] mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision a future where every individual, no matter their background, has access to financial tools that can improve their quality of life. We aim to build a strong, self-sustaining SACCO that nurtures trust and transparency in all our dealings.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#FF5733] mb-6">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-[#FF5733] mb-4">Personalized Services</h3>
              <p className="text-lg text-gray-600">
                We understand that everyone has unique needs, which is why we offer tailored financial solutions that fit your specific circumstances.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-[#FF5733] mb-4">Transparent & Secure</h3>
              <p className="text-lg text-gray-600">
                We prioritize the security of your funds and ensure transparency in all our transactions, providing you with peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#FF5733] mb-6">Join Us Today!</h2>
          <p className="text-lg text-gray-600">
            Ready to take control of your financial future? Become a member of Sunset SACCO and experience the benefits of financial inclusion. We are here to help you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
