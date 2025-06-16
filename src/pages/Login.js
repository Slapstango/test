import React from 'react';

function Login() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Login</button>
    </div>
  );
}

export default Login;