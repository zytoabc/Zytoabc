import React from 'react';

interface DisclaimerProps {
  darkMode: boolean;
}

export default function Disclaimer({ darkMode }: DisclaimerProps) {
  return (
    <div
      style={{
        fontSize: '0.9em',
        background: darkMode
          ? 'linear-gradient(to right, #1e1e2f, #2e2e4d)'
          : 'linear-gradient(to right, #e3f2fd, #ffffff)',
        color: darkMode ? '#ECEFF1' : '#37474F',
        borderLeft: `6px solid ${darkMode ? '#90CAF9' : '#2196F3'}`,
        borderRadius: 12,
        padding: '20px 24px',
        boxShadow: darkMode
          ? '0 6px 20px rgba(33, 150, 243, 0.3)'
          : '0 6px 16px rgba(13, 71, 161, 0.15)',
        marginTop: 60
      }}
    >
      <h3 style={{ marginBottom: 12 }}>⚠️ Disclaimer</h3>
      <p>
        The ZYTO software and content provided are intended for informational purposes only
        and are not substitutes for medical advice, diagnosis, or treatment. Always consult a qualified
        health provider before making decisions regarding wellness. Individual results may vary.
      </p>
    </div>
  );
}
