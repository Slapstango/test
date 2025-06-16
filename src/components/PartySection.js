import React, { useState, useEffect } from 'react';

function PartySection({ onPartyChange }) {
  const [parties, setParties] = useState([
    {
      driverLicense: '', licenseState: '', licenseClass: '', airbag: '', safetyEquip: '',
      name: '', address: '', cityStateZip: '',
      sex: '', hair: '', eyes: '', height: '', weight: '', birthdate: '', race: '',
      phone: '', businessPhone: '', insurance: '', policy: '',
      direction: '', street: '', speedLimit: '',
      vehicleYear: '', makeModelColor: '', licensePlate: '', vehicleState: '',
      ownerName: '', ownerSameAsDriver: false, ownerAddress: '', ownerAddrSameAsDriver: false,
      disposition: '', defects: '',
      vehicleType: '', vin: '', damage: '', ca: '', dot: '', calt: '', tcp: '', mcmx: ''
    }
  ]);

  useEffect(() => {
    onPartyChange(parties);
  }, [parties, onPartyChange]);

  const update = (idx, field, value) => {
    const updated = [...parties];
    updated[idx][field] = value;
    setParties(updated);
  };

  const toggle = (idx, field) => {
    const updated = [...parties];
    updated[idx][field] = !updated[idx][field];
    setParties(updated);
  };

  const addParty = () => {
    setParties([...parties, { ...parties[0] }]);
  };

  const removeParty = (idx) => {
    const updated = [...parties];
    updated.splice(idx, 1);
    setParties(updated);
  };

  return (
    <div>
      <h3>Party Information</h3>
      {parties.map((p, idx) => (
        <div key={idx} style={{ border: '1px solid #999', padding: '1rem', marginBottom: '1rem' }}>
          <h4>Party {idx + 1}</h4>
          <div>
            <label>Driver License:</label> <input value={p.driverLicense} onChange={e => update(idx, 'driverLicense', e.target.value)} />
            <label>State:</label> <input value={p.licenseState} onChange={e => update(idx, 'licenseState', e.target.value)} />
            <label>Class:</label> <input value={p.licenseClass} onChange={e => update(idx, 'licenseClass', e.target.value)} />
          </div>
          <div>
            <label>Airbag:</label>
            <select value={p.airbag} onChange={e => update(idx, 'airbag', e.target.value)}>
              <option value="">Select</option>
              <option value="Deployed">Deployed</option>
              <option value="Not Deployed">Not Deployed</option>
              <option value="Unknown">Unknown</option>
            </select>
            <label>Safety Equipment:</label>
            <select value={p.safetyEquip} onChange={e => update(idx, 'safetyEquip', e.target.value)}>
              <option value="">Select</option>
              <option value="Seatbelt">Seatbelt</option>
              <option value="Helmet">Helmet</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <label>Name:</label> <input value={p.name} onChange={e => update(idx, 'name', e.target.value)} />
            <label>Address:</label> <input value={p.address} onChange={e => update(idx, 'address', e.target.value)} />
            <label>City/State/ZIP:</label> <input value={p.cityStateZip} onChange={e => update(idx, 'cityStateZip', e.target.value)} />
          </div>
          <div>
            <label>Sex:</label> <input value={p.sex} onChange={e => update(idx, 'sex', e.target.value)} />
            <label>Hair:</label> <input value={p.hair} onChange={e => update(idx, 'hair', e.target.value)} />
            <label>Eyes:</label> <input value={p.eyes} onChange={e => update(idx, 'eyes', e.target.value)} />
            <label>Height:</label> <input value={p.height} onChange={e => update(idx, 'height', e.target.value)} />
            <label>Weight:</label> <input value={p.weight} onChange={e => update(idx, 'weight', e.target.value)} />
            <label>Birthdate:</label> <input value={p.birthdate} onChange={e => update(idx, 'birthdate', e.target.value)} />
            <label>Race:</label> <input value={p.race} onChange={e => update(idx, 'race', e.target.value)} />
          </div>
          <div>
            <label>Home Phone:</label> <input value={p.phone} onChange={e => update(idx, 'phone', e.target.value)} />
            <label>Business Phone:</label> <input value={p.businessPhone} onChange={e => update(idx, 'businessPhone', e.target.value)} />
          </div>
          <div>
            <label>Insurance Carrier:</label> <input value={p.insurance} onChange={e => update(idx, 'insurance', e.target.value)} />
            <label>Policy Number:</label> <input value={p.policy} onChange={e => update(idx, 'policy', e.target.value)} />
          </div>
          <div>
            <label>Direction of Travel:</label> <input value={p.direction} onChange={e => update(idx, 'direction', e.target.value)} />
            <label>Street/Highway:</label> <input value={p.street} onChange={e => update(idx, 'street', e.target.value)} />
            <label>Speed Limit:</label> <input value={p.speedLimit} onChange={e => update(idx, 'speedLimit', e.target.value)} />
          </div>
          <div>
            <label>Vehicle Year:</label> <input value={p.vehicleYear} onChange={e => update(idx, 'vehicleYear', e.target.value)} />
            <label>Make/Model/Color:</label> <input value={p.makeModelColor} onChange={e => update(idx, 'makeModelColor', e.target.value)} />
            <label>License Plate:</label> <input value={p.licensePlate} onChange={e => update(idx, 'licensePlate', e.target.value)} />
            <label>State:</label> <input value={p.vehicleState} onChange={e => update(idx, 'vehicleState', e.target.value)} />
          </div>
          <div>
            <label>Owner's Name:</label> <input value={p.ownerName} onChange={e => update(idx, 'ownerName', e.target.value)} />
            <label><input type="checkbox" checked={p.ownerSameAsDriver} onChange={() => toggle(idx, 'ownerSameAsDriver')} /> Same as Driver</label>
            <label>Owner's Address:</label> <input value={p.ownerAddress} onChange={e => update(idx, 'ownerAddress', e.target.value)} />
            <label><input type="checkbox" checked={p.ownerAddrSameAsDriver} onChange={() => toggle(idx, 'ownerAddrSameAsDriver')} /> Same as Driver</label>
          </div>
          <div>
            <label>Disposition (Officer/Driver/Other):</label> <input value={p.disposition} onChange={e => update(idx, 'disposition', e.target.value)} />
            <label>Mechanical Defects:</label> <input value={p.defects} onChange={e => update(idx, 'defects', e.target.value)} />
          </div>
          <div>
            <label>Vehicle Type:</label> <input value={p.vehicleType} onChange={e => update(idx, 'vehicleType', e.target.value)} />
            <label>VIN:</label> <input value={p.vin} onChange={e => update(idx, 'vin', e.target.value)} />
            <label>Damage:</label> <input value={p.damage} onChange={e => update(idx, 'damage', e.target.value)} />
          </div>
          <div>
            <label>CA:</label> <input value={p.ca} onChange={e => update(idx, 'ca', e.target.value)} />
            <label>DOT:</label> <input value={p.dot} onChange={e => update(idx, 'dot', e.target.value)} />
            <label>CAL-T:</label> <input value={p.calt} onChange={e => update(idx, 'calt', e.target.value)} />
            <label>TCP/PSC:</label> <input value={p.tcp} onChange={e => update(idx, 'tcp', e.target.value)} />
            <label>MC/MX:</label> <input value={p.mcmx} onChange={e => update(idx, 'mcmx', e.target.value)} />
          </div>
          <button type="button" onClick={() => removeParty(idx)} disabled={parties.length === 1}>Remove Party</button>
        </div>
      ))}
      <button type="button" onClick={addParty}>Add Another Party</button>
    </div>
  );
}

export default PartySection;