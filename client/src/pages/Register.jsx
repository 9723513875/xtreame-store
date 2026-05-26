import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-page page-enter">
      <div className="auth-card" style={{ textAlign: 'center' }}>

        {/* Logo */}
        <div className="auth-logo">
          <span className="logo-icon-wrap">
            <span className="logo-icon-x">X</span>
          </span>
          <span className="logo-wordmark">
            <span className="logo-wordmark-top">
              <span className="logo-x">X</span>
              <span className="logo-text">TREME</span>
            </span>
            <span className="logo-store">STORE</span>
          </span>
        </div>

        {/* Coming Soon Icon */}
        <div style={{
          width: 80, height: 80,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,0,51,0.15), rgba(255,136,0,0.1))',
          border: '2px solid rgba(255,0,51,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 0 30px rgba(255,0,51,0.2)'
        }}>
          <FiClock style={{ fontSize: 36, color: 'var(--primary)' }} />
        </div>

        <h2 className="auth-title">Coming Soon 🚀</h2>
        <p className="auth-subtitle" style={{ marginBottom: 28 }}>
          Registration is currently under development.<br />
          We're working hard to bring it to you soon!
        </p>

        {/* Decorative badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,136,0,0.1)',
          border: '1px solid rgba(255,136,0,0.35)',
          borderRadius: 8,
          padding: '8px 18px',
          marginBottom: 32,
          fontFamily: 'var(--font-gaming)',
          fontSize: 11,
          letterSpacing: 2,
          color: '#ff8800'
        }}>
          ⏳ UNDER CONSTRUCTION
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link to="/login" className="btn-primary" style={{ justifyContent: 'center', padding: '14px' }}>
            Go to Login <FiArrowRight />
          </Link>
          <Link to="/" className="btn-outline" style={{ justifyContent: 'center', padding: '14px', fontSize: 13 }}>
            Back to Home
          </Link>
        </div>

        <p className="auth-switch" style={{ marginTop: 24 }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
