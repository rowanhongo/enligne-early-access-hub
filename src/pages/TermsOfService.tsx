
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-enligne-black mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: May 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Enligne mobile application or website (collectively, the "Platform"), you agree to be bound by these 
              Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our Platform.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Enligne provides a platform that connects users with local restaurants for food ordering and delivery. We do not prepare food 
              ourselves but facilitate the ordering process and arrange for delivery of orders placed through our Platform.
            </p>
            <p className="text-gray-700">
              We strive to ensure accurate information about restaurants, menu items, prices, and delivery times, but we cannot guarantee 
              complete accuracy at all times. Restaurants are responsible for setting their own prices, preparing food, and ensuring quality 
              and accuracy of their menu listings.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              To use certain features of our Platform, you may need to create an account. You are responsible for maintaining the confidentiality 
              of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it current</li>
              <li>Notify us immediately of any unauthorized access to or use of your account</li>
              <li>Ensure that you exit from your account at the end of each session</li>
            </ul>
            <p className="text-gray-700">
              We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms of Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">4. Ordering and Payments</h2>
            <p className="text-gray-700 mb-4">
              When placing an order through our Platform, you agree to provide current, complete, and accurate purchase and account information. 
              All payments are processed through our secure payment system or our third-party payment processors.
            </p>
            <p className="text-gray-700 mb-4">
              By providing a credit card or other payment method, you represent and warrant that you are authorized to use the designated 
              payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total 
              amount of your order (including any applicable taxes and other charges).
            </p>
            <p className="text-gray-700">
              Prices for products are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products 
              listed at incorrect prices due to system errors or other issues.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">5. Delivery Policy</h2>
            <p className="text-gray-700 mb-4">
              Delivery times displayed on our Platform are estimates and are not guaranteed. Various factors, including traffic, weather 
              conditions, and restaurant preparation times, may affect actual delivery times.
            </p>
            <p className="text-gray-700">
              We will make reasonable efforts to ensure that orders are delivered accurately and in a timely manner. However, we are not 
              responsible for delays or errors caused by restaurants, delivery personnel, or circumstances beyond our reasonable control.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">6. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">
              When using our Platform, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Use our Platform in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of our Platform or its systems</li>
              <li>Interfere with or disrupt the operation of our Platform</li>
              <li>Use our Platform to transmit harmful code or materials</li>
              <li>Impersonate or misrepresent your identity or affiliation</li>
              <li>Engage in fraudulent activities or provide false information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, Enligne, its affiliates, and their respective officers, directors, employees, and agents 
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Your access to or use of (or inability to access or use) our Platform</li>
              <li>Any conduct or content of any third party on our Platform</li>
              <li>Any content obtained from our Platform</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-enligne-black mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Enligne Ltd.</strong></p>
              <p className="text-gray-700 mb-2">Kigali, Rwanda</p>
              <p className="text-gray-700 mb-2">Email: legal@enligne.rw</p>
              <p className="text-gray-700">Phone: +250 XXX XXX XXX</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
