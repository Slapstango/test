import React, { useState } from 'react';
import '../CrashForm.css';
import VehicleForm from '../components/VehicleForm';
import PeopleForm from '../components/PeopleForm';

function CrashForm() {
  const [formData, setFormData] = useState({
    reportNumber: '',
    crashDate: '',
    crashTime: '',
    location: '',
    city: '',
    county: '',
    beatOfOccurrence: '',
    reportingDistrict: '',
    numberInjured: '',
    numberKilled: '',
    weather: '',
    lighting: '',
    roadCondition: '',
    primaryCollisionFactor: '',
    officerName: '',
    badgeNumber: '',
    narrative: '',
    diagramNotes: '',
    vehicles: [],
    people: []
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
      <h2>CHP 555 Crash Report (Full Entry)</h2>
      <form onSubmit={handleSubmit} className="chp-form">

        {/* Header Section */}
        <div className="chp-row">
          <div className="chp-field"><label>Report Number</label><input value={formData.reportNumber} onChange={e => handleChange('reportNumber', e.target.value)} /></div>
          <div className="chp-field"><label>Date of Crash</label><input type="date" value={formData.crashDate} onChange={e => handleChange('crashDate', e.target.value)} /></div>
          <div className="chp-field"><label>Time of Crash</label><input type="time" value={formData.crashTime} onChange={e => handleChange('crashTime', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field-wide"><label>Location</label><input value={formData.location} onChange={e => handleChange('location', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field"><label>City</label><input value={formData.city} onChange={e => handleChange('city', e.target.value)} /></div>
          <div className="chp-field"><label>County</label><input value={formData.county} onChange={e => handleChange('county', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field"><label>Beat of Occurrence</label><input value={formData.beatOfOccurrence} onChange={e => handleChange('beatOfOccurrence', e.target.value)} /></div>
          <div className="chp-field"><label>Reporting District</label><input value={formData.reportingDistrict} onChange={e => handleChange('reportingDistrict', e.target.value)} /></div>
        </div>

        {/* Collision Data */}
        <div className="chp-row">
          <div className="chp-field"><label>Number Injured</label><input type="number" value={formData.numberInjured} onChange={e => handleChange('numberInjured', e.target.value)} /></div>
          <div className="chp-field"><label>Number Killed</label><input type="number" value={formData.numberKilled} onChange={e => handleChange('numberKilled', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field"><label>Weather</label><input value={formData.weather} onChange={e => handleChange('weather', e.target.value)} /></div>
          <div className="chp-field"><label>Lighting</label><input value={formData.lighting} onChange={e => handleChange('lighting', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field-wide"><label>Road Condition</label><input value={formData.roadCondition} onChange={e => handleChange('roadCondition', e.target.value)} /></div>
        </div>

        <div className="chp-row">
          <div className="chp-field-wide"><label>Primary Collision Factor</label><input value={formData.primaryCollisionFactor} onChange={e => handleChange('primaryCollisionFactor', e.target.value)} /></div>
        </div>

        {/* Vehicles Section */}
        <VehicleForm onVehiclesChange={(vehicles) => handleChange('vehicles', vehicles)} />

        {/* People Section */}
        <PeopleForm onPeopleChange={(people) => handleChange('people', people)} />

        {/* Narrative and Diagram */}
        <div className="chp-row">
          <div className="chp-field-wide">
            <label>Narrative</label>
            <textarea rows="4" value={formData.narrative} onChange={e => handleChange('narrative', e.target.value)} />
          </div>
        </div>

        <div className="chp-row">
          <div className="chp-field-wide">
            <label>Diagram Notes</label>
            <textarea rows="4" value={formData.diagramNotes} onChange={e => handleChange('diagramNotes', e.target.value)} />
          </div>
        </div>

        {/* Officer Info */}
        <div className="chp-row">
          <div className="chp-field"><label>Officer Name</label><input value={formData.officerName} onChange={e => handleChange('officerName', e.target.value)} /></div>
          <div className="chp-field"><label>Badge Number</label><input value={formData.badgeNumber} onChange={e => handleChange('badgeNumber', e.target.value)} /></div>
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default CrashForm;