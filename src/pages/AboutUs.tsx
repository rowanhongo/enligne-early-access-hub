
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-enligne-black mb-8">About Enligne</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Enligne, our mission is to revolutionize food delivery in Kigali. We believe everyone deserves 
              delicious meals delivered quickly and reliably, connecting local restaurants with hungry customers 
              through innovative technology.
            </p>
            <p className="text-gray-700">
              With our seamless platform, we aim to support local businesses while providing unparalleled 
              convenience to our customers. Our vision is to become the most trusted food delivery service in Rwanda, 
              known for reliability, transparency, and customer satisfaction.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Enligne was founded in 2023 by a group of tech enthusiasts who recognized a gap in Kigali's food 
              delivery market. Frustrated by long wait times and limited options, our founders set out to create 
              a solution that would benefit both restaurants and customers.
            </p>
            <p className="text-gray-700">
              What began as a small startup quickly gained traction as restaurants and customers alike embraced 
              our user-friendly platform and reliable service. Today, we're proud to partner with dozens of 
              restaurants across Kigali, bringing delicious meals to thousands of satisfied customers.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Behind Enligne is a diverse team of passionate individuals committed to excellence. From our 
              developers who continually enhance our platform to our customer support specialists who ensure 
              your satisfaction, everyone at Enligne plays a crucial role in our success.
            </p>
            <p className="text-gray-700">
              We're proud to be a Rwandan company, with our headquarters located in the heart of Kigali. Our 
              team comprises local talent who understand the unique needs and preferences of our community.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-enligne-red mb-2">Reliability</h3>
                <p className="text-gray-700">
                  We understand the importance of timely deliveries and accurate orders. Your satisfaction is our priority.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-enligne-red mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We continuously improve our technology to enhance your experience and meet evolving needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-enligne-red mb-2">Community</h3>
                <p className="text-gray-700">
                  We're committed to supporting local restaurants and contributing to Rwanda's economic growth.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-enligne-red mb-2">Transparency</h3>
                <p className="text-gray-700">
                  We believe in clear communication, honest business practices, and fair pricing for all stakeholders.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
