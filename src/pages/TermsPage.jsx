import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "June 15, 2025";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FileText className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-slate-400">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-extrabold prose-p:leading-relaxed prose-li:leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your use of the HEQA
              Solutions mobile application ("App") operated by HEQA Solutions
              ("we", "us", "our"). By downloading, installing, or using the App,
              you agree to be bound by these Terms. If you do not agree, do not
              use the App.
            </p>

            <h2>1. Eligibility</h2>
            <p>
              The App is intended for students and individuals aged 16 and
              above. By using the App, you represent that you meet this age
              requirement. If you are under 18, you confirm that you have your
              parent's or guardian's consent to use the App.
            </p>

            <h2>2. Account Registration</h2>
            <ul>
              <li>You must create an account to access the App's features.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>
                You agree to provide accurate and current information (name,
                email, specialty).
              </li>
              <li>
                You are responsible for all activities that occur under your
                account.
              </li>
              <li>
                One account per person. Creating multiple accounts to manipulate
                leaderboards or circumvent limitations is prohibited.
              </li>
            </ul>

            <h2>3. Free and Premium Services</h2>
            <h3>Free Tier</h3>
            <p>
              The free tier provides access to exam papers and questions with
              advertisement support. Free users can practice questions, view
              leaderboards, and build study streaks. Some features (such as
              offline downloads, ad-free experience, and advanced analytics) are
              reserved for Premium subscribers.
            </p>
            <h3>Premium Subscription</h3>
            <ul>
              <li>
                Premium is available as monthly (2,000 FCFA), yearly (15,000
                FCFA), or lifetime (25,000 FCFA) plans.
              </li>
              <li>
                Payment is processed through MTN Mobile Money or Orange Money.
              </li>
              <li>
                Monthly and yearly subscriptions auto-renew unless cancelled
                before the renewal date.
              </li>
              <li>
                You will receive a notification before any renewal charge.
              </li>
              <li>
                Refunds are handled on a case-by-case basis. Contact us if you
                believe you were charged in error.
              </li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>
                Redistribute, resell, or commercially exploit any content from
                the App (questions, solutions, papers).
              </li>
              <li>
                Scrape, copy, or systematically download content from the App
                for external use.
              </li>
              <li>Attempt to reverse engineer, decompile, or hack the App.</li>
              <li>Use the App to harass, abuse, or harm other users.</li>
              <li>
                Create fake accounts, manipulate leaderboard scores, or engage
                in any form of cheating.
              </li>
              <li>Share your Premium account credentials with others.</li>
              <li>
                Upload malicious content or attempt to compromise the App's
                security.
              </li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content in the App — including but not limited to questions,
              solutions, explanations, UI design, branding, logos,
              illustrations, and software code — is the intellectual property of
              HEQA Solutions or used under license.
            </p>
            <p>
              Past exam questions are sourced from publicly available national
              examination papers administered by MINESUP and are presented in a
              structured, original format authored by our content team. Our
              original contributions (formatting, solutions, explanations, rich
              rendering) are protected by copyright.
            </p>
            <p>
              You may not copy, redistribute, publish, or create derivative
              works based on our content without written permission.
            </p>

            <h2>6. Content Accuracy</h2>
            <p>
              We strive for accuracy in all questions and solutions. However, we
              do not guarantee that all content is free from errors. If you
              discover an inaccuracy, please report it to us and we will
              investigate promptly. The App is a study aid and should be used
              alongside your course materials, not as a sole source of truth.
            </p>

            <h2>7. Leaderboard & Gamification</h2>
            <ul>
              <li>
                Leaderboard rankings are calculated based on your study activity
                (questions attempted, correct answers, papers accessed).
              </li>
              <li>
                Rankings are for motivational purposes only and do not guarantee
                any academic outcome.
              </li>
              <li>
                We reserve the right to reset or adjust scores if fraudulent
                activity is detected.
              </li>
            </ul>

            <h2>8. Advertisements</h2>
            <p>
              Free tier users will see advertisements served by Google AdMob. We
              strive to ensure ads are appropriate and non-intrusive. We do not
              control the specific content of third-party ads. Upgrade to
              Premium for an ad-free experience.
            </p>

            <h2>9. Service Availability</h2>
            <p>
              We aim to keep the App available 24/7 but do not guarantee
              uninterrupted service. We may temporarily suspend the App for
              maintenance, updates, or technical issues. We are not liable for
              any loss resulting from service interruptions.
            </p>

            <h2>10. Account Termination</h2>
            <ul>
              <li>You may delete your account at any time by contacting us.</li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </li>
              <li>
                Upon termination, your access to Premium features will cease.
                Your study data may be deleted after 90 days.
              </li>
            </ul>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, HEQA Solutions shall not
              be liable for any indirect, incidental, special, or consequential
              damages arising from your use of the App. Our total liability
              shall not exceed the amount you have paid us in the 12 months
              preceding the claim.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the Republic of Cameroon. Any disputes arising from these
              Terms shall be resolved through good-faith negotiation, and if
              necessary, the competent courts in Cameroon.
            </p>

            <h2>13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes through an in-app notification. Your continued
              use of the App after changes constitutes acceptance.
            </p>

            <h2>14. Contact</h2>
            <p>For questions about these Terms, contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@heqasolutions.com">
                  info@heqasolutions.com
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/237690055252">+237 690 055 252</a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://heqasolutions.com">heqasolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
