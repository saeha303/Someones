import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import base64 from 'base-64';
function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = async () => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      // headers.append('Authorization', 'Basic ' + base64.encode(username + ':' + password));
      headers.append('Origin', 'http://localhost:3000');

      const payload = {
        username: 'rose' // Replace with actual username
      };

      const stringifiedPayload = JSON.stringify(payload);

      const response = await fetch('https://someones.vercel.app/api/hello', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin':'https://someones-oaxq.vercel.app'
          // 'Authorization': 'Basic ' + base64.encode('username:password')
        }
        // body: stringifiedPayload
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonResponse = await response.json();
      console.log('Form submitted:', jsonResponse);
      setCount(count + 1); // Increment the count state
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Username or password is incorrect.');
    }
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={handleButtonClick}>
        Count is {count}
      </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
