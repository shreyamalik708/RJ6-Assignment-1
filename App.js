import './App.css';
import { useState } from 'react';
import Welcome from './Welcome';

function App() {
  const [name, setName] = useState("")
  const [regNo, setregNo] = useState("")
  const [submit, setSubmit] = useState(false)

  return (
    <div className='login-page'>
      <div>
        <label>Enter Your Name:- </label>
        <input
          placeholder="Your name"
          value={name}
          onChange={(event) => { setName(event.target.value) }}></input> <br />
        <label> Registration Number</label>
        <input
          placeholder="Enter Your Registration Number"
          value={regNo}
          onChange={(event) => { setregNo(event.target.value) }}></input> <br />
        <div className="btn">
          <button onClick={() => { setSubmit(!submit) }}>Login</button>
          <button onClick={() => { setSubmit(!submit) }}>Reset</button>
        </div>
      </div>

      {(submit && name && regNo) && <Welcome name={name} regNo={regNo}></Welcome>}
    </div>
  );
}

export default App;
