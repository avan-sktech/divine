import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-mono text-accent-muted hover:text-optical-white transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              BACK TO HOME
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              PRIVACY POLICY
            </h1>
            <p className="text-base text-accent-muted leading-relaxed">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-sm text-accent-muted leading-relaxed"
          >
            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">1. INTRODUCTION</h2>
              <p>
                Divine Lab Worx ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services. Please read this privacy policy carefully. 
                If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">2. INFORMATION WE COLLECT</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-silver-steel">Personal Data:</strong> Personally identifiable information, 
                  such as your name, email address, company name, and telephone number that you voluntarily give to us 
                  when you use our contact forms or engage with our services.
                </li>
                <li>
                  <strong className="text-silver-steel">Derivative Data:</strong> Information our servers automatically 
                  collect when you access the site, such as your IP address, browser type, operating system, access times, 
                  and the pages you have viewed directly before and after accessing the site.
                </li>
                <li>
                  <strong className="text-silver-steel">Financial Data:</strong> Financial information, such as data 
                  related to your payment method (e.g., valid credit card number, card brand, expiration date) that we 
                  may collect when you purchase our services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">3. USE OF YOUR INFORMATION</h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and 
                customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create and manage your account</li>
                <li>Email you regarding your account or order</li>
                <li>Enable user-to-user communications</li>
                <li>Generate a personal profile about you to make future visits more personalized</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the site</li>
                <li>Notify you of updates to the site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
                <li>Perform other business activities as needed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">4. DISCLOSURE OF YOUR INFORMATION</h2>
              <p className="mb-4">
                We may share information we have collected about you in certain situations. Your information may be 
                disclosed as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-silver-steel">By Law or to Protect Rights:</strong> If we believe the 
                  release of information about you is necessary to respond to legal process, to investigate or remedy 
                  potential violations of our policies, or to protect the rights, property, and safety of others.
                </li>
                <li>
                  <strong className="text-silver-steel">Business Transfers:</strong> We may share or transfer your 
                  information in connection with, or during negotiations of, any merger, sale of company assets, 
                  financing, or acquisition of all or a portion of our business to another company.
                </li>
                <li>
                  <strong className="text-silver-steel">Third-Party Service Providers:</strong> We may share your 
                  information with third parties that perform services for us or on our behalf, including payment 
                  processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">5. SECURITY OF YOUR INFORMATION</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide to us, 
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no 
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">6. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help 
                customize the site and improve your experience. When you access the site, your personal information is 
                not collected through the use of tracking technology. Most browsers are set to accept cookies by default. 
                You can remove or reject cookies, but be aware that such action could affect the availability and 
                functionality of the site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">7. PRIVACY RIGHTS (AUSTRALIA)</h2>
              <p>
                Under the Australian Privacy Act 1988, you have rights including: the right to access the personal 
                information we hold about you; the right to request correction of inaccurate information; and the right 
                to complain about a breach of the Australian Privacy Principles. To exercise these rights, please 
                contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">8. CONTACT US</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 text-silver-steel">
                Divine Lab Worx<br />
                Email: privacy@divinelabworx.com<br />
                Address: Part of Sharktech Global, Australia
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
