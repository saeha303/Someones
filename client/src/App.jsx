import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = async () => {
    try {
      const payload = {
        "username":"rose"
    };

    const stringifiedPayload = JSON.stringify(payload);
    // axios.get(`https://cors-anywhere.herokuapp.com/https://someones.vercel.app/api/hello`)
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://someones.vercel.app/api/hello', {
        headers: {

            // 'Content-Type': 'text/plain',  // Set the Content-Type header to text/plain
            'Origin': 'https://someones-oaxq.vercel.app/'
        }
    });
      console.log('Form submitted:', response.data);
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
