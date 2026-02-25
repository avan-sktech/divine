import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
              TERMS OF SERVICE
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
              <h2 className="text-lg font-semibold text-optical-white mb-4">1. AGREEMENT TO TERMS</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally 
                or on behalf of an entity ("you") and Divine Lab Worx ("we," "us" or "our"), concerning your 
                access to and use of the divinelabworx.com website as well as any other media form, media channel, 
                mobile website or mobile application related, linked, or otherwise connected thereto (collectively, 
                the "Site").
              </p>
              <p className="mt-4">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of 
                these Terms of Service. If you do not agree with all of these Terms of Service, then you are 
                expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
                functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
                (collectively, the "Content") and the trademarks, service marks, and logos contained therein 
                (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and 
                trademark laws and various other intellectual property rights.
              </p>
              <p className="mt-4">
                Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks 
                may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, 
                translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial 
                purpose whatsoever, without our express prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">3. USER REPRESENTATIONS</h2>
              <p className="mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Site through automated or non-human means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">4. PROHIBITED ACTIVITIES</h2>
              <p className="mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site 
                available. The Site may not be used in connection with any commercial endeavors except those that 
                are specifically endorsed or approved by us.
              </p>
              <p className="mb-4">As a user of the Site, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Systematically retrieve data or other content from the Site to create or compile a collection</li>
                <li>Trick, defraud, or mislead us and other users</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features</li>
                <li>Disparage, tarnish, or otherwise harm us and/or the Site</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person</li>
                <li>Make improper use of our support services</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">5. SERVICES</h2>
              <p>
                Divine Lab Worx provides deployment architecture services for companies entering the Australian market. 
                All services are subject to these Terms of Service and any additional agreements executed between you 
                and Divine Lab Worx. Service descriptions on the Site are for informational purposes only and do not 
                constitute binding offers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">6. LIMITATION OF LIABILITY</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for 
                any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including 
                lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if 
                we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">7. INDEMNIFICATION</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and 
                all of our respective officers, agents, partners, and employees, from and against any loss, damage, 
                liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third 
                party due to or arising out of: (1) your use of the Site; (2) breach of these Terms of Service; 
                (3) any breach of your representations and warranties set forth in these Terms of Service; 
                (4) your violation of the rights of a third party, including but not limited to intellectual property 
                rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via 
                the Site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">8. GOVERNING LAW</h2>
              <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with 
                the laws of Australia applicable to agreements made and to be entirely performed within Australia, 
                without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">9. CHANGES TO TERMS</h2>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms of 
                Service at any time and for any reason. We will alert you about any changes by updating the "Last 
                updated" date of these Terms of Service, and you waive any right to receive specific notice of 
                each such change.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-optical-white mb-4">10. CONTACT US</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding 
                use of the Site, please contact us at:
              </p>
              <p className="mt-4 text-silver-steel">
                Divine Lab Worx<br />
                Email: legal@divinelabworx.com<br />
                Address: Part of Sharktech Global, Australia
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
