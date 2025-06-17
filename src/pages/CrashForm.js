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
    judicialDistrict: '',
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
    collisionStreet: '',
    atIntersection: false,
    intersectionStreet: '',
    orDistance: false,
    distance: '',
    distanceUnit: 'feet',
    orStreet: '',
    latitude: '',
    longitude: '',
    stateHwyRel: false,
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

        <div className="chp-row">
          <div className="chp-field"><label>Report Number</label><input value={formData.reportNumber} onChange={e => handleChange('reportNumber', e.target.value)} /></div>
          <div className="chp-field"><label>Date</label><input type="date" value={formData.crashDate} onChange={e => handleChange('crashDate', e.target.value)} /></div>
          <div className="chp-field"><label>Time</label><input type="time" value={formData.crashTime} onChange={e => handleChange('crashTime', e.target.value)} /></div>
        </div>

        {/* Location Section Restored */}
        <div className="chp-row">
          <div className="chp-field-wide"><label>Collision Occurred On</label><input value={formData.collisionStreet} onChange={e => handleChange('collisionStreet', e.target.value)} /></div>
        </div>
        <div className="chp-row">
          <label><input type="checkbox" checked={formData.atIntersection} onChange={e => handleChange('atIntersection', e.target.checked)} /> At Intersection With</label>
          <input value={formData.intersectionStreet} onChange={e => handleChange('intersectionStreet', e.target.value)} />
        </div>
        <div className="chp-row">
          <label><input type="checkbox" checked={formData.orDistance} onChange={e => handleChange('orDistance', e.target.checked)} /> Or:</label>
          <input value={formData.distance} onChange={e => handleChange('distance', e.target.value)} placeholder="Distance" />
          <select value={formData.distanceUnit} onChange={e => handleChange('distanceUnit', e.target.value)}>
            <option value="feet">Feet</option>
            <option value="miles">Miles</option>
          </select>
          <input value={formData.orStreet} onChange={e => handleChange('orStreet', e.target.value)} placeholder="From Street" />
        </div>
        <div className="chp-row">
          <div className="chp-field"><label>City</label><input value={formData.city} onChange={e => handleChange('city', e.target.value)} /></div>
          <div className="chp-field"><label>County</label><input value={formData.county} onChange={e => handleChange('county', e.target.value)} /></div>
          <div className="chp-field"><label>Beat</label><input value={formData.beatOfOccurrence} onChange={e => handleChange('beatOfOccurrence', e.target.value)} /></div>
        </div>
        <div className="chp-row">
          <div className="chp-field"><label>Judicial District</label><input value={formData.judicialDistrict} onChange={e => handleChange('judicialDistrict', e.target.value)} /></div>
          <div className="chp-field"><label>Reporting District</label><input value={formData.reportingDistrict} onChange={e => handleChange('reportingDistrict', e.target.value)} /></div>
        </div>
        <div className="chp-row">
          <div className="chp-field"><label>Latitude</label><input value={formData.latitude} onChange={e => handleChange('latitude', e.target.value)} /></div>
          <div className="chp-field"><label>Longitude</label><input value={formData.longitude} onChange={e => handleChange('longitude', e.target.value)} /></div>
        </div>
        <div className="chp-row">
          <label>State Hwy Related:</label>
          <label><input type="checkbox" checked={formData.stateHwyRel} onChange={e => handleChange('stateHwyRel', true)} /> Yes</label>
          <label><input type="checkbox" checked={!formData.stateHwyRel} onChange={e => handleChange('stateHwyRel', false)} /> No</label>
        </div>

        {/* Subform Sections */}
        <VehicleForm onVehiclesChange={(vehicles) => handleChange('vehicles', vehicles)} />
        <PartySection onPartyChange={(party) => handleChange('party', party)} />
        <PeopleForm onPeopleChange={(people) => handleChange('people', people)} />

        {/* Narrative/Diagram */}
        <div className="chp-field-wide"><label>Narrative</label><textarea rows="4" value={formData.narrative} onChange={e => handleChange('narrative', e.target.value)} /></div>
        <div className="chp-field-wide"><label>Diagram Notes</label><textarea rows="4" value={formData.diagramNotes} onChange={e => handleChange('diagramNotes', e.target.value)} /></div>

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