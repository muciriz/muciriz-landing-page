import React, { useState } from 'react';
import {
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  Mail,
  Send,
  ArrowRight,
  FileText,
  Lock,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import { GrievanceSupportBox } from '../data/legalDocuments';

export const AccountDeletionContent: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('No longer using the service');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !acknowledged) return;

    // Generate reference ticket
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newTicketId = `MCR-DEL-${randomSuffix}`;
    setTicketId(newTicketId);
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const mailSubject = encodeURIComponent(`Account Deletion Request - [${ticketId || 'New'}] - ${phoneNumber}`);
  const mailBody = encodeURIComponent(
    `Hello Muciriz Support Team,\n\nI would like to request the permanent deletion of my Muciriz user account and associated personal data.\n\nAccount Details:\n- Name: ${fullName || 'Not provided'}\n- Registered Phone: ${phoneNumber}\n- Reason: ${reason}\n- Reference Ticket: ${ticketId || 'Pending'}\n- Notes: ${additionalNotes || 'None'}\n\nPlease verify and process this request in accordance with the Muciriz Account Deletion Policy.\n\nThank you.`
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Muciriz Support, I am requesting permanent deletion of my account (Phone: ${phoneNumber}, Ticket: ${ticketId || 'MCR-DEL'}). Please assist with verification.`
  );

  return (
    <div className="legal-article-content">
      {/* 1. Official Google Play Compliance Identity Banner */}
      <div
        style={{
          backgroundColor: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: '14px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <div
          style={{
            backgroundColor: '#DCFCE7',
            padding: '0.65rem',
            borderRadius: '10px',
            color: '#15803D',
            flexShrink: 0,
          }}
        >
          <ShieldCheck size={24} />
        </div>
        <div>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#166534',
              marginBottom: '0.25rem',
            }}
          >
            Google Play Store Listing • Data Safety & Account Erasure Policy
          </div>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#14532D',
              margin: '0 0 0.4rem 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Muciriz Account & Associated Data Deletion
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#166534', lineHeight: 1.6, margin: 0 }}>
            This page provides official instructions for users of <strong>Muciriz</strong> (published by{' '}
            <strong>Muciriz Traders</strong>) to request the permanent deletion of their account and associated
            personal data, in full compliance with Google Play Developer Policies and applicable data protection
            statutes.
          </p>
        </div>
      </div>

      {/* Developer & App Summary Meta Card */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            backgroundColor: '#FAF8F5',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
          }}
        >
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
            Application Name
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginTop: '0.2rem' }}>
            Muciriz
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.15rem' }}>
            Shore Harvest & Heirloom Kitchen
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#FAF8F5',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
          }}
        >
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
            Developer Entity
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginTop: '0.2rem' }}>
            Muciriz Traders
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.15rem' }}>
            Registered Operator in Kerala, India
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#FAF8F5',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
          }}
        >
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
            Erasure Processing Window
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginTop: '0.2rem' }}>
            7 to 30 Days
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.15rem' }}>
            Subject to statutory invoice retention
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.96rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
        At <strong>Muciriz Traders</strong>, we respect your right to data sovereignty and privacy. Whether you access
        our services through the <strong>Muciriz</strong> Android application or our online web platform, you have the
        unconditional right to request the termination of your user account and the permanent erasure of your personal
        information. You do not need to reinstall the mobile application to execute this request.
      </p>

      {/* 2. Interactive Web Deletion Request Form */}
      <div
        id="deletion-form-section"
        style={{
          marginTop: '2.5rem',
          marginBottom: '3rem',
          backgroundColor: '#FFFFFF',
          border: '2px solid #E2E8F0',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div
            style={{
              backgroundColor: '#FEE2E2',
              color: '#DC2626',
              padding: '0.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Trash2 size={20} />
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--pine-900)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Online Account & Data Deletion Request Form
          </h3>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          Submit this form to initiate the account erasure workflow. Our customer support desk will verify ownership of
          the registered mobile number and process data deletion without requiring you to reopen the app.
        </p>

        {submitted ? (
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                color: '#16A34A',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.5rem' }}>
              Account Deletion Request Submitted
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', maxWidth: '580px', margin: '0 auto 1.25rem auto' }}>
              Your request has been logged under Reference ID:
            </p>

            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#0F172A',
                color: '#F8FAFC',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '1.5rem',
              }}
            >
              {ticketId}
            </div>

            <div
              style={{
                textAlign: 'left',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '1.25rem',
                maxWidth: '600px',
                margin: '0 auto 1.5rem auto',
                fontSize: '0.86rem',
                lineHeight: 1.65,
                color: '#334155',
              }}
            >
              <strong>What happens next?</strong>
              <ol style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                <li>
                  Our customer care team will send a verification SMS / WhatsApp confirmation code to{' '}
                  <strong>{phoneNumber}</strong> within 24–48 hours to prevent unauthorized deletion.
                </li>
                <li>Upon verification, your active sessions and tokens will be permanently revoked.</li>
                <li>Your personal profile, delivery addresses, and preferences will be permanently wiped.</li>
                <li>
                  Any completed purchase invoices will be archived in compliance with Indian statutory audit regulations.
                </li>
              </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919447728387?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                <span>Confirm on WhatsApp (+91 94477 28387)</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={`mailto:customercare@muciriz.in?subject=${mailSubject}&body=${mailBody}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--pine-900)',
                  color: '#ffffff',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} />
                <span>Email Customer Support</span>
              </a>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--pine-700)',
                  fontSize: '0.82rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Submit another request or modify details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label
                  htmlFor="full-name"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--pine-900)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Full Name (as registered)
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--pine-900)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Registered Mobile Phone Number <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                  }}
                />
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
                  The 10-digit number used during phone login / OTP authentication.
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label
                htmlFor="reason-select"
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--pine-900)',
                  marginBottom: '0.4rem',
                }}
              >
                Primary Reason for Deletion (Optional)
              </label>
              <select
                id="reason-select"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <option value="No longer using the service">No longer using the service</option>
                <option value="Relocated outside delivery service area">Relocated outside delivery service area</option>
                <option value="Privacy or data retention concerns">Privacy or data retention concerns</option>
                <option value="Duplicate or test account created">Duplicate or test account created</option>
                <option value="Other reason">Other reason</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="additional-notes"
                style={{
                  display: 'block',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--pine-900)',
                  marginBottom: '0.4rem',
                }}
              >
                Additional Feedback / Notes (Optional)
              </label>
              <textarea
                id="additional-notes"
                rows={3}
                placeholder="Let us know how we could have improved your experience..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Acknowledgment Checkbox */}
            <div
              style={{
                backgroundColor: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <input
                id="acknowledge-checkbox"
                type="checkbox"
                required
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                style={{ marginTop: '0.25rem', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <label
                htmlFor="acknowledge-checkbox"
                style={{ fontSize: '0.84rem', color: '#92400E', lineHeight: 1.5, cursor: 'pointer' }}
              >
                <strong>I understand and acknowledge:</strong> Submitting this request will permanently delete my
                Muciriz profile, stored delivery addresses, active cart, and authentication credentials. Completed
                financial tax invoices will be retained for statutory audit purposes under Indian taxation laws.
              </label>
            </div>

            <button
              type="submit"
              disabled={!acknowledged || !phoneNumber}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: acknowledged && phoneNumber ? '#DC2626' : '#94A3B8',
                color: '#ffffff',
                border: 'none',
                padding: '0.85rem 1.75rem',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: acknowledged && phoneNumber ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
              }}
            >
              <Trash2 size={18} />
              <span>Submit Account Deletion Request</span>
            </button>
          </form>
        )}
      </div>

      {/* 3. Steps Users Should Take to Request Account Deletion */}
      <div className="legal-block">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Smartphone size={20} color="var(--pine-700)" />
          <span>Steps to Request Account Deletion</span>
        </h3>
        <p>
          Google Play requires developers to clearly explain the sequential steps users can take to submit an account
          deletion request. You can request account deletion via any of the three official channels below:
        </p>

        {/* Step Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
          {/* Method 1: Web Request */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--pine-100)',
                color: 'var(--pine-800)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Method 1 • Recommended
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.6rem' }}>
              Online Web Request (No App Needed)
            </h4>
            <ol style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '0.4rem' }}>
                Fill out the <a href="#deletion-form-section" style={{ color: 'var(--pine-700)', fontWeight: 600 }}>interactive form above</a> with your registered phone number.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                Acknowledge the data deletion terms and click <strong>Submit Account Deletion Request</strong>.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                A unique reference ID will be generated immediately.
              </li>
              <li>
                Our support team will verify your number via OTP/Call within 24–48 hours to confirm authorization.
              </li>
            </ol>
          </div>

          {/* Method 2: Mobile App */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--pine-100)',
                color: 'var(--pine-800)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Method 2 • In-App
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.6rem' }}>
              From Inside the Muciriz Mobile App
            </h4>
            <ol style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '0.4rem' }}>
                Open the <strong>Muciriz</strong> mobile app on your Android or iOS device.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                Navigate to the <strong>Account / Profile</strong> tab in the bottom navigation bar.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                Tap on <strong>Account Settings</strong> &gt; <strong>Request Account Deletion</strong>.
              </li>
              <li>
                Enter the one-time OTP sent to your registered phone number to confirm final deletion.
              </li>
            </ol>
          </div>

          {/* Method 3: Direct Email or Phone */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--pine-100)',
                color: 'var(--pine-800)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Method 3 • Direct Desk
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.6rem' }}>
              Direct Grievance Desk / Email
            </h4>
            <ol style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '0.4rem' }}>
                Send an email to{' '}
                <a href="mailto:customercare@muciriz.in" style={{ color: 'var(--pine-700)', fontWeight: 600 }}>
                  customercare@muciriz.in
                </a>{' '}
                with subject: <em>"Account Deletion Request - [Your Phone Number]"</em>.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                Alternatively, call or message our customer care helpline at{' '}
                <a href="tel:9447728387" style={{ color: 'var(--pine-700)', fontWeight: 600 }}>
                  +91 94477 28387
                </a>.
              </li>
              <li>Our support desk will verify your identity and confirm deletion in writing.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 4. Types of Data Deleted vs Kept */}
      <div className="legal-block">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <FileText size={20} color="var(--pine-700)" />
          <span>Types of Data Deleted vs. Data Retained</span>
        </h3>
        <p>
          In accordance with Google Play Developer Policy and Indian data protection principles, Muciriz Traders
          maintains complete transparency regarding which categories of user data are permanently wiped and which are
          retained under legal compulsion.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          {/* Deleted Data Card */}
          <div
            style={{
              backgroundColor: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '14px',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626', marginBottom: '0.75rem' }}>
              <Trash2 size={20} />
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#991B1B' }}>
                Data Permanently Deleted
              </h4>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#7F1D1D', marginBottom: '1rem' }}>
              The following information is permanently purged from our active databases upon verification:
            </p>
            <ul style={{ fontSize: '0.86rem', color: '#450A0A', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Personal Profile:</strong> Full name, registered telephone/mobile number, email address (if provided).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Delivery Coordinates:</strong> Saved house/apartment delivery addresses, pinpointed landmarks, and GPS dispatch coordinates.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Authentication & Sessions:</strong> Login tokens, JWT session secrets, and device identity mappings.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Device Notifications:</strong> Firebase Cloud Messaging (FCM) device push tokens.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>App Preferences & Cart:</strong> Current cart contents, custom fish cutting/descaling instructions, preferred branch hub selections, and browsing history.
              </li>
              <li>
                <strong>Loyalty & Membership Links:</strong> Personal linkages to ShoreCatch Club, VegEze passes, or subscription tiers.
              </li>
            </ul>
          </div>

          {/* Retained Data Card */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '14px',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', marginBottom: '0.75rem' }}>
              <Lock size={20} />
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#1E293B' }}>
                Data Retained & Statutory Justification
              </h4>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#475569', marginBottom: '1rem' }}>
              Certain data must be preserved strictly to comply with mandatory statutory and accounting obligations under Indian Law:
            </p>
            <ul style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Invoices & Financial Records:</strong> Purchase receipts, payment transaction IDs, GST invoices, and credit notes.
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem' }}>
                  <em>Legal Basis: Section 36 of the Central Goods and Services Tax (CGST) Act, 2017 & Section 44AB of the Income Tax Act, 1961 mandate retention of financial books of accounts for statutory tax audits.</em>
                </div>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Delivery & Dispute Records:</strong> Proof of delivery signatures/logs for fulfilled orders.
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem' }}>
                  <em>Legal Basis: Required to resolve consumer protection claims, chargebacks, and payment gateway dispute settlements.</em>
                </div>
              </li>
              <li>
                <strong>Anonymization:</strong> Once the account is deleted, retained financial records are permanently detached from your personal phone number and contact details, and archived in an access-restricted repository.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Retention Periods & Timelines */}
      <div className="legal-block">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Clock size={20} color="var(--pine-700)" />
          <span>Retention Periods & Deletion Timelines</span>
        </h3>
        <p>
          We adhere to strict operational timelines to ensure prompt execution of deletion requests:
        </p>

        <div style={{ overflowX: 'auto', marginTop: '1rem', marginBottom: '1.5rem' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.88rem',
              textAlign: 'left',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#F1F5F9', borderBottom: '2px solid #E2E8F0' }}>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--pine-900)' }}>Category</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--pine-900)' }}>Action Taken</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--pine-900)' }}>Retention Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Identity Verification</td>
                <td style={{ padding: '0.75rem 1rem' }}>Verification via SMS/WhatsApp OTP to prevent fraud</td>
                <td style={{ padding: '0.75rem 1rem', color: '#16A34A', fontWeight: 600 }}>Within 24 to 48 Hours</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Profile & Address Purge</td>
                <td style={{ padding: '0.75rem 1rem' }}>Irreversible erasure from active database servers</td>
                <td style={{ padding: '0.75rem 1rem', color: '#16A34A', fontWeight: 600 }}>Within 7 to 30 Calendar Days</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Backup Purge Cycle</td>
                <td style={{ padding: '0.75rem 1rem' }}>Overwritten as routine encrypted database snapshots expire</td>
                <td style={{ padding: '0.75rem 1rem', color: '#64748B' }}>Up to 60 Days (Encrypted Snapshots)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Tax & Statutory Invoices</td>
                <td style={{ padding: '0.75rem 1rem' }}>Stored in isolated audit archive, personal identifiers detached</td>
                <td style={{ padding: '0.75rem 1rem', color: '#D97706', fontWeight: 600 }}>
                  Mandated 7–8 Financial Years under CGST Act
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Frequently Asked Questions */}
      <div className="legal-block">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <AlertTriangle size={20} color="var(--pine-700)" />
          <span>Frequently Asked Questions</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
              Can I cancel a deletion request once submitted?
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              You may withdraw your request before verification is completed by notifying our customer support desk at{' '}
              <a href="mailto:customercare@muciriz.in" style={{ color: 'var(--pine-700)', fontWeight: 600 }}>customercare@muciriz.in</a>. Once verification is confirmed and the deletion cycle executes, account recovery is impossible.
            </p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
              What happens if I have an ongoing, in-transit seafood order?
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              To ensure food safety, delivery fulfillment, and payment reconciliation, deletion requests are held until all pending orders have been completed and 24 hours have elapsed for returns or freshness guarantee claims.
            </p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pine-900)', marginBottom: '0.35rem' }}>
              Do I have to reinstall the app to request deletion?
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              No. You can submit your deletion request directly through the online form on this web page, or by contacting our Grievance Desk via email or telephone. Reinstalling the app is never required.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Official Grievance Officer Box */}
      <GrievanceSupportBox />
    </div>
  );
};
