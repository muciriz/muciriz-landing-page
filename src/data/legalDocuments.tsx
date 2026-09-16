import React from 'react';

export type LegalDocType = 'customer-privacy' | 'customer-terms' | 'staff-privacy' | 'staff-terms';

export interface LegalDocumentMeta {
  id: LegalDocType;
  title: string;
  subtitle: string;
  lastUpdated: string;
  badge: string;
}

export const LEGAL_DOCS_META: Record<LegalDocType, LegalDocumentMeta> = {
  'customer-privacy': {
    id: 'customer-privacy',
    title: 'Customer Privacy Policy',
    subtitle: 'Muciriz Traders - Customer Application & Web Platform',
    lastUpdated: 'August 2026',
    badge: 'Privacy & Security',
  },
  'customer-terms': {
    id: 'customer-terms',
    title: 'Customer Terms and Conditions',
    subtitle: 'Muciriz Traders - Customer User Agreement',
    lastUpdated: 'August 2026',
    badge: 'Terms of Service',
  },
  'staff-privacy': {
    id: 'staff-privacy',
    title: 'Staff App Privacy Policy',
    subtitle: 'Muciriz Traders - Staff / Delivery Partner Application',
    lastUpdated: 'August 2026',
    badge: 'Internal Operations',
  },
  'staff-terms': {
    id: 'staff-terms',
    title: 'Staff Terms and Conditions',
    subtitle: 'Muciriz Traders - Staff & Contractor Agreement',
    lastUpdated: 'August 2026',
    badge: 'Partner Agreement',
  },
};

export const GrievanceSupportBox: React.FC = () => (
  <div style={{
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
  }}>
    <h4 style={{
      fontSize: '0.85rem',
      fontWeight: 700,
      color: '#0E7C86',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.75rem',
    }}>
      Grievance / Customer Support Officer
    </h4>
    <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.6' }}>
      <p style={{ fontWeight: 700, color: '#0F172A' }}>Mr. Joben Jose</p>
      <p>Muciriz Traders</p>
      <p>8/614 - Viswamatha Building, Church Junction</p>
      <p>Athirampuzha, Kerala - 686562</p>
      <p style={{ marginTop: '0.5rem' }}>
        <strong>Phone:</strong>{' '}
        <a href="tel:9447728387" style={{ color: '#0E7C86', fontWeight: 600, textDecoration: 'underline' }}>
          9447728387
        </a>
      </p>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:customercare@muciriz.in" style={{ color: '#0E7C86', fontWeight: 600, textDecoration: 'underline' }}>
          customercare@muciriz.in
        </a>
      </p>
      <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.5rem' }}>
        Support Hours: Monday – Friday (10:00 AM – 5:00 PM IST)
      </p>
    </div>
  </div>
);

export const CustomerPrivacyContent: React.FC = () => (
  <div className="legal-article-content">
    <p>
      This privacy policy sets out how <strong>Muciriz Traders</strong> uses and protects any information that you give Muciriz Traders when you use this app. Muciriz Traders is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this app, you can be assured that it will only be used in accordance with this privacy statement. Muciriz Traders may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes.
    </p>

    <div className="legal-block">
      <h3>Consent & Terms of this Privacy Policy</h3>
      <p>
        By using our platform (application or services), you voluntarily consent to comply with and accept this Privacy Policy. You have the option not to abide by our privacy policy; however, if you choose to disagree, you will not be able to use any part of our platform or access the services provided on this platform.
      </p>
    </div>

    <div className="legal-block">
      <h3>What We Collect</h3>
      <p>We may collect the following information:</p>
      <ul>
        <li>Name</li>
        <li>Contact information including email address</li>
        <li>Demographic information such as postcode, preferences, and delivery landmarks</li>
        <li>Other information relevant to customer orders, surveys, and seasonal offers</li>
      </ul>
    </div>

    <div className="legal-block">
      <h3>What We Do with the Information We Gather</h3>
      <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
      <ul>
        <li>Internal record keeping and order fulfillment.</li>
        <li>We may use the information to improve our fresh fish cutting, hygienic packaging, and delivery schedules.</li>
        <li>We may periodically use your information to contact you for feedback and delivery confirmation by phone or messaging apps.</li>
        <li>Without personally identifying you, we may use aggregated statistical data to improve our localized stock predictions.</li>
      </ul>
    </div>

    <div className="legal-block">
      <h3>Security</h3>
      <p>
        We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
      </p>
    </div>

    <div className="legal-block">
      <h3>How We Use Cookies & App State</h3>
      <p>
        A cookie / app storage token is used to remember your active session, selected delivery branch (Aluva or Kochi), and cart items. It allows the web and mobile platform to respond to you smoothly as an individual.
      </p>
    </div>

    <div className="legal-block">
      <h3>Controlling Your Personal Information</h3>
      <p>
        We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. You may request details of personal information which we hold about you or request deletion by emailing us at{' '}
        <a href="mailto:customercare@muciriz.in" style={{ color: '#0E7C86', fontWeight: 600 }}>customercare@muciriz.in</a>.
      </p>
    </div>

    <div className="legal-block">
      <h3>Marketing & Permission to Contact</h3>
      <p>
        By using the platform, you authorize Muciriz Traders to contact you via phone, SMS, WhatsApp, and email regarding order statuses, delivery timing alerts, and promotional announcements. This permission remains valid regardless of NDNC registry status.
      </p>
    </div>

    <div className="legal-block">
      <h3>Governing Law & Severability</h3>
      <p>
        This policy is drafted in accordance with the provisions of the Indian Information Technology Act, 2000 ("IT Act") and the Information Technology Rules, 2011. Any disputes shall be subject to the jurisdiction of courts in Kottayam, Kerala.
      </p>
    </div>

    <GrievanceSupportBox />
  </div>
);

export const CustomerTermsContent: React.FC = () => (
  <div className="legal-article-content">
    <p>
      <strong>Muciriz Traders ("MT")</strong> is the owner and operator of the brands ShoreCatch, VegEze, Zuriyani Kitchen, and the Muciriz digital platforms.
    </p>

    <div className="legal-block">
      <h3>Customer Registration</h3>
      <p>
        This platform provides an easy registration process. For order fulfillment, we collect full name, phone number, postal PIN code, and detailed delivery address. By registering or placing an order, customers consent to receive transactional and delivery updates.
      </p>
    </div>

    <div className="legal-block">
      <h3>Eligibility</h3>
      <p>
        Any person who has completed 18 years of age, is of sound mind, and is eligible to enter into a contract under Section 11 of the Indian Contract Act, 1872 may register and place orders.
      </p>
    </div>

    <div className="legal-block">
      <h3>Pricing & Weight Variations</h3>
      <p>
        Prices stated at the time of ordering apply upon delivery. Prices for fresh catch are subject to daily market changes. When purchasing fresh-cut or descaled fish, slight fluctuations in final weight can occur due to cutting precision. Any minor difference will be settled upon delivery or adjusted in your customer account.
      </p>
    </div>

    <div className="legal-block">
      <h3>Delivery Slots & Vacuum Packing Verification</h3>
      <p>
        Muciriz Traders provides standard operational delivery windows and express dispatch. To ensure food safety and prevent quality disputes, customers are strongly advised to inspect the intact <strong>VACUUM PACKING</strong> seal upon delivery before accepting perishable fish packages.
      </p>
    </div>

    <div className="legal-block">
      <h3>Returns & 24-Hour Freshness Guarantee</h3>
      <p>
        Muciriz Traders maintains a customer-friendly return and refund policy for issues related to quality or freshness. Any concern reported within 24 hours of delivery will be investigated for immediate replacement or full refund through the original payment mode.
      </p>
    </div>

    <div className="legal-block">
      <h3>Customer Obligations</h3>
      <p>
        Users agree not to disrupt network services, misuse product data, distribute malicious code, or submit fraudulent orders. Any infringement of trademarks or unauthorized framing of the Muciriz name and branding is strictly prohibited.
      </p>
    </div>

    <div className="legal-block">
      <h3>Governing Law & Arbitration</h3>
      <p>
        All disputes arising out of platform transactions shall be amicably resolved, or referred to arbitration under the Arbitration and Conciliation Act, 1996 in Kottayam, Kerala.
      </p>
    </div>

    <GrievanceSupportBox />
  </div>
);

export const StaffPrivacyContent: React.FC = () => (
  <div className="legal-article-content">
    <p>
      This privacy policy governs how <strong>Muciriz Traders</strong> collects and protects data provided by staff members, delivery associates, and operational partners using the Muciriz Staff App.
    </p>

    <div className="legal-block">
      <h3>Data Collected for Operations</h3>
      <ul>
        <li>Name, Employee ID, assigned branch location, and job responsibilities.</li>
        <li>Contact information (email, phone).</li>
        <li>Real-time GPS location during active shift hours for dispatch and route tracking.</li>
        <li>Attendance logs, login/logout timestamps, and order delivery confirmation logs.</li>
      </ul>
    </div>

    <div className="legal-block">
      <h3>Use of Internal Data</h3>
      <p>
        Data is strictly utilized for branch operations, task assignments, cold-chain delivery routing, and payroll accounting. Data is never sold or shared with commercial marketing agencies.
      </p>
    </div>

    <div className="legal-block">
      <h3>Confidentiality & Device Permissions</h3>
      <p>
        Staff members must maintain strict confidentiality regarding customer addresses, phone numbers, and orders. Declining critical permissions (such as location during working shifts) may hinder duty fulfillment.
      </p>
    </div>

    <GrievanceSupportBox />
  </div>
);

export const StaffTermsContent: React.FC = () => (
  <div className="legal-article-content">
    <p>
      Staff members and delivery partners using the Muciriz Staff App agree to adhere to strict operational standards, data privacy guidelines, and fiduciary responsibilities.
    </p>

    <div className="legal-block">
      <h3>1. Access & Account Security</h3>
      <p>
        Access credentials are non-transferable. Staff must never share accounts, OTPs, or customer records with unauthorized third parties.
      </p>
    </div>

    <div className="legal-block">
      <h3>2. Customer Data Protection</h3>
      <p>
        Customer phone numbers and addresses accessed for delivery must never be stored on personal devices or used for personal communication. Violation will lead to immediate dismissal and legal action.
      </p>
    </div>

    <div className="legal-block">
      <h3>3. Cash on Delivery (COD) Remittance</h3>
      <p>
        Delivery associates collecting cash or UPI collections are personally responsible for daily reconciliation with branch management in accordance with company ledger policies.
      </p>
    </div>

    <div className="legal-block">
      <h3>4. Quality Handling & Cold-Chain Protocol</h3>
      <p>
        Perishable fish packages must remain within temperature-controlled insulated carriers until handed over to the customer with vacuum seals intact.
      </p>
    </div>

    <GrievanceSupportBox />
  </div>
);
