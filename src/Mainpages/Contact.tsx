import React, { useState } from 'react';
import contactImage from '../webassets/image-2-1-1.jpg';
import addressImage from '../webassets/download.svg';
import phoneImage from '../webassets/download (1).svg';
import emailImage from '../webassets/download (2).svg';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'faqs' | 'details'>('form');
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpansion = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 md:p-12 min-h-screen">
      {/* Top Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['form', 'faqs', 'details'].map((tab) => (
          <button
            key={tab}
            className={`px-10 py-5 rounded-md text-2xl transition bg-black text-white hover:bg-gray-800 ${
              activeTab === tab ? 'ring-2 ring-offset-2 ring-gray-700' : ''
            }`}
            onClick={() => setActiveTab(tab as 'form' | 'faqs' | 'details')}
          >
            {tab === 'form' ? 'Contact Form' : tab === 'faqs' ? 'FAQs' : 'Contact Details'}
          </button>
        ))}
      </div>

      {/* Contact Form Layout */}
      {activeTab === 'form' && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full max-w-[650px] h-auto object-cover rounded"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6 w-full px-2">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                id="contact"
                name="contact"
                required
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-black text-2xl text-white py-3 px-16 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAQs Tab Content */}
      {activeTab === 'faqs' && (
        <div className="mt-16 w-full max-w-6xl mx-auto space-y-8 text-lg text-black px-2">
          <table className="w-full table-auto border-collapse border-2 border-gray-300">
            <tbody>
              {[{
                question: 'What types of leather products do you offer?',
                answer: 'Mattis neque potenti duis suspendisse tellus fermentum nisi placerat taciti, faucibus metus curabitur donec mauris cursus posuere lectus curae dictumst, nascetur class aptent ante fusce aenean quis eleifend.',
                id: 'faq1',
              }, {
                question: 'Are your leather products handmade?',
                answer: 'Yes, all of our leather products are meticulously handmade by skilled artisans.',
                id: 'faq2',
              }, {
                question: 'How long does it take to make a custom leather product?',
                answer: 'Production time for custom orders varies, but typically ranges from 1 to 3 weeks depending on complexity.',
                id: 'faq3',
              }, {
                question: 'How do I take care of my leather product?',
                answer: 'Use a soft cloth to clean your leather, avoid prolonged sun exposure, and condition it regularly with a leather balm or cream to maintain its quality.',
                id: 'faq4',
              }].map((faq) => (
                <React.Fragment key={faq.id}>
                  <tr className="border-t border-gray-300">
                    <td className="px-4 py-4 flex justify-between items-center">
                      <button
                        onClick={() => toggleExpansion(faq.id)}
                        className="flex items-center text-2xl text-black w-full text-left"
                      >
                        {expanded === faq.id ? '-' : '+'}
                        <span className="ml-2 text-2xl">{faq.question}</span>
                      </button>
                    </td>
                  </tr>

                  {/* Expanded FAQ Answer */}
                  {expanded === faq.id && (
                    <tr className="border-t border-gray-300">
                      <td colSpan={2} className="px-4 text-xl py-4 text-gray-600">
                        {faq.answer}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Contact Details Tab Content */}
      {activeTab === 'details' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 px-6">
          {/* Address Card */}
          <div className="bg-white border-2 border-gray-200 rounded-md overflow-hidden flex flex-col items-center text-center p-6">
            <img src={addressImage} alt="Address" className="w-10 h-10 object-cover mb-4" />
            <h3 className="text-3xl font-semibold text-black">Address:</h3>
            <p className="text-xl text-gray-700 mt-2">
              3548 Columbia Mine Road, Wheeling, West Virginia, 26003
            </p>
          </div>

          {/* Phone Number Card */}
          <div className="bg-white border-2 border-gray-200 rounded-md overflow-hidden flex flex-col items-center text-center p-6">
            <img src={phoneImage} alt="Phone" className="w-10 h-10 object-cover mb-4" />
            <h3 className="text-3xl font-semibold text-black">Contact No:</h3>
            <p className="text-xl text-gray-700 mt-2">
              1800-3254-265, 1800-654-2584
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white border-2 border-gray-200 rounded-md overflow-hidden flex flex-col items-center text-center p-6">
            <img src={emailImage} alt="Email" className="w-10 h-10 object-cover mb-4" />
            <h3 className="text-3xl font-semibold text-black">Email:</h3>
            <p className="text-xl text-gray-700 mt-2 break-all">
              leathershop323@store.com, Shopsupport353@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
