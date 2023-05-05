import React, { useState } from 'react';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/admin'; // Redirect to dashboard page after login
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1 style={{"marginBottom":"14px", "marginTop":"16%", "fontWeight":"bolder","fontSize":"30px"}}>Admin Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input style={{"border":"1px solid grey","marginBottom":"14px", "borderRadius": "4px", "width":"20%"}} 
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input style={{"border":"1px solid grey","marginBottom":"14px", "borderRadius": "4px", "width":"20%"}} 
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button style={{"border":"1px solid grey", "borderRadius": "4px", "width":"7%","fontWeight":"bold"}} type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;
