import React, { useState } from 'react';
import VehicleForm from '../components/VehicleForm';
import PeopleForm from '../components/PeopleForm';
import PartySection from '../components/PartySection';
import { saveCrashReport } from '../lib/saveCrashReport';

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
    people: [],
    party: []
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveCrashReport(formData);
    alert('Crash report submitted!');
  };

  return (
    <div className="form-wrapper">
      <h2>CHP 555 Crash Report (Full Entry)</h2>
      <form onSubmit={handleSubmit} className="chp-form">
        <VehicleForm onVehiclesChange={(vehicles) => handleChange('vehicles', vehicles)} />
        <PartySection onPartyChange={(party) => handleChange('party', party)} />
        <PeopleForm onPeopleChange={(people) => handleChange('people', people)} />
        <div className="chp-field-wide">
          <label>Narrative</label>
          <textarea rows="4" value={formData.narrative} onChange={e => handleChange('narrative', e.target.value)} />
        </div>
        <div className="chp-field-wide">
          <label>Diagram Notes</label>
          <textarea rows="4" value={formData.diagramNotes} onChange={e => handleChange('diagramNotes', e.target.value)} />
        </div>
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