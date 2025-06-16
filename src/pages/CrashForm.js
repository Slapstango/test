import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function CrashForm() {
  const [formData, setFormData] = useState({
    date: '', time: '', location: '', weather: '', lighting: '',
    driverName: '', driverLicense: '', vehicleMake: '', vehicleModel: '', citationCode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    ['date','time','location','driverName','vehicleMake','citationCode'].forEach(f => {
      if (!formData[f]) newErrors[f] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert('Form submitted successfully!');
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    saveAs(blob, `crash-report-${formData.date || 'unspecified'}.json`);
  };

  const inputStyle = (field) => errors[field] ? { border: '1px solid red' } : {};

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Crash Report Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <label>{field}:</label><br />
            <input
              type="text"
              value={formData[field]}
              style={inputStyle(field)}
              onChange={(e) => handleChange(field, e.target.value)}
            /><br />
          </div>
        ))}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleExport} style={{ marginLeft: '1rem' }}>Download Report</button>
      </form>
    </div>
  );
}

export default CrashForm;