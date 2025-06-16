import React from 'react';

function CrashForm() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Crash Report Form</h2>
      <form>
        <input placeholder="Date" type="date" /><br />
        <input placeholder="Time" type="time" /><br />
        <input placeholder="Location" type="text" /><br />
        <textarea placeholder="Description"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrashForm;