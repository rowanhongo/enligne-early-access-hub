
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-enligne-black mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Enligne ("we," "us," or "our"), we value and respect your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Platform").
            </p>
            <p className="text-gray-700">
              Please read this Privacy Policy carefully. By accessing or using our Platform, you acknowledge that you have read, 
              understood, and agree to be bound by all the terms outlined in this Privacy Policy. If you do not agree, please 
              discontinue use of our Platform immediately.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide when using our Platform, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Billing and payment information</li>
              <li>Delivery addresses</li>
              <li>Profile information and preferences</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 mt-6">2.2 Usage Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information about your device and how you interact with our Platform, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Device information (type, model, operating system)</li>
              <li>IP address and location data</li>
              <li>Browser type and settings</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Processing and fulfilling your orders</li>
              <li>Creating and maintaining your account</li>
              <li>Improving and personalizing your experience</li>
              <li>Communicating with you about orders, promotions, and updates</li>
              <li>Analyzing usage patterns to enhance our Platform</li>
              <li>Preventing fraudulent activities and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent where processing is based on consent</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>Data portability</li>
              <li>Lodging a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">6. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Enligne Ltd.</strong></p>
              <p className="text-gray-700 mb-2">Kigali, Rwanda</p>
              <p className="text-gray-700 mb-2">Email: privacy@enligne.rw</p>
              <p className="text-gray-700">Phone: +250 XXX XXX XXX</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
