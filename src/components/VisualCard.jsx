import React from 'react';
import { CreditCard, Smartphone, BookOpen, UserCheck, Briefcase } from 'lucide-react';

export function VisualCard({ type, docName, subtitle }) {
  const renderGraphic = () => {
    switch (type) {
      case 'aadhaar':
        return (
          <div className="svg-illustration aadhaar-graphic">
            <div className="card-top-bar">
              <span className="gov-emblem">🇮🇳</span>
              <span className="card-badge">Aadhaar / ஆதார்</span>
            </div>
            <div className="card-body-graphic">
              <div className="card-photo-placeholder">👤</div>
              <div className="card-details-lines">
                <div className="line-sm name-line">பெயர் / Name</div>
                <div className="line-sm dob-line">பிறந்த தேதி / DOB</div>
                <div className="aadhaar-number-display">
                  <span>1234</span>
                  <span>5678</span>
                  <span>9012</span>
                </div>
              </div>
            </div>
            <div className="card-footer-strip">GOVERNMENT OF INDIA</div>
          </div>
        );

      case 'mobile_otp':
        return (
          <div className="svg-illustration phone-graphic">
            <div className="phone-screen">
              <div className="phone-notch"></div>
              <div className="phone-sms-bubble">
                <div className="sms-header">
                  <Smartphone size={16} />
                  <span>Govt SMS OTP</span>
                </div>
                <p className="sms-body">Your Aadhaar OTP for e-Shram is <strong>749 205</strong></p>
              </div>
              <div className="otp-digit-boxes">
                <span>7</span><span>4</span><span>9</span><span>2</span><span>0</span><span>5</span>
              </div>
            </div>
          </div>
        );

      case 'bank_passbook':
        return (
          <div className="svg-illustration passbook-graphic">
            <div className="passbook-cover">
              <BookOpen size={32} className="book-icon" />
              <div className="bank-name">BANK PASSBOOK</div>
              <div className="passbook-details">
                <div className="detail-row">
                  <span>A/c No:</span>
                  <strong>9876543210</strong>
                </div>
                <div className="detail-row">
                  <span>IFSC:</span>
                  <strong>SBIN0001234</strong>
                </div>
              </div>
            </div>
          </div>
        );

      case 'age_check':
        return (
          <div className="svg-illustration age-graphic">
            <div className="age-circle">
              <UserCheck size={40} />
              <div className="age-range-text">16 - 59</div>
              <div className="age-label">வயது / Years</div>
            </div>
          </div>
        );

      case 'unorganized_worker':
        return (
          <div className="svg-illustration worker-graphic">
            <Briefcase size={36} className="worker-icon" />
            <div className="worker-badges-grid">
              <span className="w-badge">✂️ தையல் / Tailor</span>
              <span className="w-badge">🌾 விவசாயம் / Farming</span>
              <span className="w-badge">🏗️ கட்டடம் / Mason</span>
              <span className="w-badge">🧹 கூலி / Daily Wage</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="svg-illustration default-graphic">
            <CreditCard size={48} />
          </div>
        );
    }
  };

  return (
    <div className="visual-card-container">
      <div className="visual-graphic-wrapper">
        {renderGraphic()}
      </div>
      {docName && <h4 className="visual-card-name">{docName}</h4>}
      {subtitle && <p className="visual-card-subtitle">{subtitle}</p>}
    </div>
  );
}
