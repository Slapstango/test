import React, { useState } from 'react';
import '../CrashForm.css';

function CrashForm() {
  const [formData, setFormData] = useState({
    reportNumber: '',
    crashDate: '',
    crashTime: '',
    location: '',
    city: '',
    county: '',
    numberInjured: '',
    numberKilled: '',
    beatOfOccurrence: '',
    reportingDistrict: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Crash report submitted!');
  };

  return (
    <div className="form-wrapper">
      <h2>CHP 555 Crash Report - Header Section</h2>
      <form onSubmit={handleSubmit} className="chp-form">
        <div className="chp-row">
          <div className="chp-field">
            <label>Report Number</label>
            <input value={formData.reportNumber} onChange={e => handleChange('reportNumber', e.target.value)} />
          </div>
          <div className="chp-field">
            <label>Date of Crash</label>
            <input type="date" value={formData.crashDate} onChange={e => handleChange('crashDate', e.target.value)} />
          </div>
          <div className="chp-field">
            <label>Time of Crash</label>
            <input type="time" value={formData.crashTime} onChange={e => handleChange('crashTime', e.target.value)} />
          </div>
        </div>

        <div className="chp-row">
          <div className="chp-field-wide">
            <label>Location of Crash (Street/Highway/Intersection)</label>
            <input value={formData.location} onChange={e => handleChange('location', e.target.value)} />
          </div>
        </div>

        <div className="chp-row">
          <div className="chp-field">
            <label>City</label>
            <input value={formData.city} onChange={e => handleChange('city', e.target.value)} />
          </div>
          <div className="chp-field">
            <label>County</label>
            <input value={formData.county} onChange={e => handleChange('county', e.target.value)} />
          </div>
        </div>

        <div className="chp-row">
          <div className="chp-field">
            <label>Number Injured</label>
            <input type="number" value={formData.numberInjured} onChange={e => handleChange('numberInjured', e.target.value)} />
          </div>
          <div className="chp-field">
            <label>Number Killed</label>
            <input type="number" value={formData.numberKilled} onChange={e => handleChange('numberKilled', e.target.value)} />
          </div>
        </div>

        <div className="chp-row">
          <div className="chp-field">
            <label>Beat of Occurrence</label>
            <input value={formData.beatOfOccurrence} onChange={e => handleChange('beatOfOccurrence', e.target.value)} />
          </div>
          <div className="chp-field">
            <label>Reporting District</label>
            <input value={formData.reportingDistrict} onChange={e => handleChange('reportingDistrict', e.target.value)} />
          </div>
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default CrashForm;