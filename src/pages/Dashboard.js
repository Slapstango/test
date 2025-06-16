import React, { useState } from 'react';
import Charts from '../components/Charts';

function Dashboard() {
  const [crashes, setCrashes] = useState([]);

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).filter(Boolean).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, key, i) => {
          obj[key] = values[i]?.trim();
          return obj;
        }, {});
      });
      setCrashes(rows);
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Crash Dashboard</h2>
      <input type="file" accept=".csv" onChange={handleCSVUpload} />
      <Charts data={crashes} />
    </div>
  );
}

export default Dashboard;