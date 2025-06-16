import React, { useState, useEffect } from 'react';

function PeopleForm({ onPeopleChange }) {
  const [people, setPeople] = useState([
    { role: 'Driver', gender: '', age: '', partyType: '', seatPosition: '', injuryExtent: '', airbag: '', safetyEquip: '', isAtFault: false }
  ]);

  useEffect(() => {
    onPeopleChange(people);
  }, [people, onPeopleChange]);

  const handleChange = (index, field, value) => {
    const updated = [...people];
    updated[index][field] = value;
    setPeople(updated);
  };

  const handleCheckbox = (index, field) => {
    const updated = [...people];
    updated[index][field] = !updated[index][field];
    setPeople(updated);
  };

  const addPerson = () => {
    setPeople([...people, { role: '', gender: '', age: '', partyType: '', seatPosition: '', injuryExtent: '', airbag: '', safetyEquip: '', isAtFault: false }]);
  };

  const removePerson = (index) => {
    const updated = [...people];
    updated.splice(index, 1);
    setPeople(updated);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>People Involved</h3>
      {people.map((p, idx) => (
        <div key={idx} style={{ border: '1px solid #aaa', padding: '1rem', marginBottom: '1rem' }}>
          <h4>Person {idx + 1}</h4>
          <label>Role:</label><br />
          <select value={p.role} onChange={e => handleChange(idx, 'role', e.target.value)}>
            <option value="">Select</option>
            <option value="Driver">Driver</option>
            <option value="Passenger">Passenger</option>
            <option value="Witness">Witness</option>
          </select><br />
          <label>Gender:</label><br />
          <select value={p.gender} onChange={e => handleChange(idx, 'gender', e.target.value)}>
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="X">Non-Binary</option>
            <option value="U">Unknown</option>
          </select><br />
          <label>Age:</label><br />
          <input value={p.age} onChange={e => handleChange(idx, 'age', e.target.value)} /><br />
          <label>Party Type:</label><br />
          <select value={p.partyType} onChange={e => handleChange(idx, 'partyType', e.target.value)}>
            <option value="">Select</option>
            <option value="Driver">Driver</option>
            <option value="Pedestrian">Pedestrian</option>
            <option value="Passenger">Passenger</option>
            <option value="Bicyclist">Bicyclist</option>
            <option value="Witness">Witness</option>
          </select><br />
          {p.role === 'Passenger' && (
            <>
              <label>Seat Position:</label><br />
              <input value={p.seatPosition} onChange={e => handleChange(idx, 'seatPosition', e.target.value)} /><br />
            </>
          )}
          <label>Injury Extent:</label><br />
          <select value={p.injuryExtent} onChange={e => handleChange(idx, 'injuryExtent', e.target.value)}>
            <option value="">Select</option>
            <option value="FATAL INJURY">Fatal Injury</option>
            <option value="SUSPECTED SERIOUS INJURY">Suspected Serious Injury</option>
            <option value="SUSPECTED MINOR INJURY">Suspected Minor Injury</option>
            <option value="POSSIBLE INJURY">Possible Injury</option>
            <option value="NONE">None</option>
          </select><br />
          <label>Airbag Code:</label><br />
          <input value={p.airbag} onChange={e => handleChange(idx, 'airbag', e.target.value)} /><br />
          <label>Safety Equipment:</label><br />
          <input value={p.safetyEquip} onChange={e => handleChange(idx, 'safetyEquip', e.target.value)} /><br />
          <label>At Fault?</label><br />
          <input type="checkbox" checked={p.isAtFault} onChange={() => handleCheckbox(idx, 'isAtFault')} /><br />
          <button type="button" onClick={() => removePerson(idx)} disabled={people.length === 1}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addPerson}>Add Person</button>
    </div>
  );
}

export default PeopleForm;