import React, { useState, useEffect } from 'react';

function VehicleForm({ onVehiclesChange }) {
  const [vehicles, setVehicles] = useState([
    { make: '', model: '', year: '', color: '', licensePlate: '', state: '', isTowed: false }
  ]);

  useEffect(() => {
    onVehiclesChange(vehicles);
  }, [vehicles, onVehiclesChange]);

  const handleChange = (index, field, value) => {
    const updated = [...vehicles];
    updated[index][field] = value;
    setVehicles(updated);
  };

  const handleCheckbox = (index, field) => {
    const updated = [...vehicles];
    updated[index][field] = !updated[index][field];
    setVehicles(updated);
  };

  const addVehicle = () => {
    setVehicles([...vehicles, { make: '', model: '', year: '', color: '', licensePlate: '', state: '', isTowed: false }]);
  };

  const removeVehicle = (index) => {
    const updated = [...vehicles];
    updated.splice(index, 1);
    setVehicles(updated);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Vehicles Involved</h3>
      {vehicles.map((v, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h4>Vehicle {idx + 1}</h4>
          <label>Make:</label><br />
          <input value={v.make} onChange={e => handleChange(idx, 'make', e.target.value)} /><br />
          <label>Model:</label><br />
          <input value={v.model} onChange={e => handleChange(idx, 'model', e.target.value)} /><br />
          <label>Year:</label><br />
          <input value={v.year} onChange={e => handleChange(idx, 'year', e.target.value)} /><br />
          <label>Color:</label><br />
          <input value={v.color} onChange={e => handleChange(idx, 'color', e.target.value)} /><br />
          <label>License Plate:</label><br />
          <input value={v.licensePlate} onChange={e => handleChange(idx, 'licensePlate', e.target.value)} /><br />
          <label>State:</label><br />
          <input value={v.state} onChange={e => handleChange(idx, 'state', e.target.value)} /><br />
          <label>Is Vehicle Towed?</label><br />
          <input type="checkbox" checked={v.isTowed} onChange={() => handleCheckbox(idx, 'isTowed')} /><br />
          <button type="button" onClick={() => removeVehicle(idx)} disabled={vehicles.length === 1}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addVehicle}>Add Another Vehicle</button>
    </div>
  );
}

export default VehicleForm;