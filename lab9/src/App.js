import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import GreyableImage from './Criteria';
import { useState } from 'react';


function App() {
  const [length, setLength] = useState(32);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  function sliderChange(event) {
    setLength(event.target.value);
  }

  function generatePassword(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    setPassword(result);
  }

  function copyPassword(){
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <h1 class="bg-primary text-white m-3">Password Genie</h1>
        </div>
      </nav>
      <div class="container-fluid">
          <div class="row">
            <div class="col-2 border border-primary rounded m-3">
              <ul class="nav flex-column">
                <li class="m-3"><GreyableImage src="characters.png" alt="Characters" title="Characters"/><h5 class="text-primary">Characters</h5></li>
                <li class="m-3"><GreyableImage src="symbols.png" alt="Symbols" class="img-thumbnail" title="Symbols"/><h5 class="text-primary">Symbols</h5></li>
                <li class="m-3"><GreyableImage src="twofactor.png" alt="Numbers" class="img-thumbnail" title="Numbers"/><h5 class="text-primary">Numbers</h5></li>
              </ul>
            </div>
            <div class="col m-3">
              <h1 class="border border-primary text-primary p-3 rounded" onClick={generatePassword}>Generate password</h1>
              <h5 class="border border-secondary text-secondary p-3 rounded" onClick={copyPassword}>
                Your Password: {password} ({copied ? 'Copied!' : 'Click to Copy'})
              </h5>
              <h6 class="text-primary mt-3">Length</h6>
              <input
                type='range'
                class="form-range"
                min={4}
                max={128}
                step={1}
                onChange={sliderChange}
              />
              <h6 class="text-primary">{length}</h6>
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default App;
