import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Trash2,
  Mail,
} from "lucide-react";

export default function PrivacyPage() {
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
            <Shield className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              Privacy Policy
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
              HEQA Solutions ("we", "us", "our") operates the HEQA Solutions
              mobile application (the "App"). This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              use our App. Please read this policy carefully.
            </p>

            <h2 className="flex items-center gap-3">
              <Database className="w-6 h-6 text-primary-600 flex-shrink-0" />{" "}
              Information We Collect
            </h2>
            <h3>Personal Information You Provide</h3>
            <ul>
              <li>
                <strong>Account information:</strong> Name, email address,
                password (encrypted), and HND specialty when you create an
                account.
              </li>
              <li>
                <strong>Profile information:</strong> Optional profile photo and
                display name preferences.
              </li>
              <li>
                <strong>Payment information:</strong> Mobile Money phone number
                for Premium transactions. We do not store your Mobile Money PIN
                or balance information.
              </li>
              <li>
                <strong>Support communications:</strong> Messages you send us
                via WhatsApp, email, or in-app support.
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>
                <strong>Usage data:</strong> Questions answered, practice
                sessions completed, papers accessed, study streaks, leaderboard
                scores, and learning progress.
              </li>
              <li>
                <strong>Device information:</strong> Device model, operating
                system version, app version, and screen resolution — used to
                optimise the app experience.
              </li>
              <li>
                <strong>Analytics data:</strong> Anonymised usage patterns
                through analytics tools to improve our features.
              </li>
            </ul>

            <h2 className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary-600 flex-shrink-0" /> How We
              Use Your Information
            </h2>
            <ul>
              <li>
                Provide, maintain, and improve the App's features and services.
              </li>
              <li>
                Personalise your experience — showing relevant papers and
                courses for your specialty.
              </li>
              <li>
                Calculate your study statistics, leaderboard ranking, and streak
                data.
              </li>
              <li>Process Premium subscription payments.</li>
              <li>
                Send important notifications: new paper releases, subscription
                renewals, streak reminders (optional).
              </li>
              <li>Respond to your support queries and feedback.</li>
              <li>
                Analyse usage patterns to improve the App and add features
                students actually need.
              </li>
            </ul>

            <h2 className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary-600 flex-shrink-0" /> Data
              Storage & Security
            </h2>
            <p>
              Your data is stored on{" "}
              <strong>secure cloud infrastructure</strong>, an enterprise-grade
              cloud platform trusted by millions of applications worldwide. All
              data is:
            </p>
            <ul>
              <li>Encrypted in transit using TLS/SSL.</li>
              <li>
                Protected by industry-standard authentication with server-side
                token verification.
              </li>
              <li>
                Secured through role-based access control — only authorised team
                members can access admin functions.
              </li>
              <li>
                Backed up regularly with Google's infrastructure redundancy.
              </li>
            </ul>
            <p>
              No system is 100% secure. While we use commercially reasonable
              measures to protect your data, we cannot guarantee absolute
              security.
            </p>

            <h2 className="flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-primary-600 flex-shrink-0" />{" "}
              Sharing Your Information
            </h2>
            <p>
              We <strong>do not sell, rent, or trade</strong> your personal
              information. We may share limited data with:
            </p>
            <ul>
              <li>
                <strong>Cloud Infrastructure:</strong> For secure storage,
                authentication, analytics, and crash reporting.
              </li>
              <li>
                <strong>Google AdMob:</strong> For displaying advertisements in
                the free tier. AdMob may use device identifiers and anonymised
                data for ad personalisation according to Google's privacy
                policies.
              </li>
              <li>
                <strong>Payment processors:</strong> MTN Mobile Money and Orange
                Money for processing Premium payments — limited to the
                information necessary to complete the transaction.
              </li>
            </ul>

            <h2 className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary-600 flex-shrink-0" />{" "}
              Notifications
            </h2>
            <p>
              With your permission, we send push notifications for: new paper
              releases relevant to your specialty, streak reminders, leaderboard
              updates, and important app announcements. You can disable
              notifications at any time in your device settings or within the
              app's Settings screen.
            </p>

            <h2 className="flex items-center gap-3">
              <Trash2 className="w-6 h-6 text-primary-600 flex-shrink-0" /> Your
              Rights
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> your personal data — available in your
                profile and analytics screens within the app.
              </li>
              <li>
                <strong>Correct</strong> inaccurate information — edit your
                profile in the app's Settings screen.
              </li>
              <li>
                <strong>Delete</strong> your account and associated data —
                contact us and we will delete your account within 30 days.
              </li>
              <li>
                <strong>Opt out</strong> of marketing notifications at any time.
              </li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              HEQA Solutions is designed for university-level students
              (typically 18+). We do not knowingly collect personal data from
              children under 13. If you believe a child under 13 has provided us
              with personal information, please contact us and we will promptly
              delete it.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              The App may contain links to third-party websites or services
              (e.g., Google Play Store, WhatsApp). We are not responsible for
              the privacy practices of these third parties. We encourage you to
              review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes through an in-app notification or a
              prominent notice on this page. Your continued use of the App after
              changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />{" "}
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us:
            </p>
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
