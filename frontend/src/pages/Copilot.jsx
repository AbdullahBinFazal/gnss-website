import React from 'react';

const Copilot = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)', border: 'none', overflow: 'hidden' }}>
      <iframe
        src="https://bi4bodexjyqyvrxusnjbih.streamlit.app/?embed=true"
        title="NCGSA GNSS Copilot"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allow="clipboard-write"
      />
    </div>
  );
};

export default Copilot;