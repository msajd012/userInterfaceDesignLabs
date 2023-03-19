import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-white">Password Genie</span>
        </div>
      </nav>
      <div class="container-fluid">
          <div class="row">
            <nav class="col-2 border border-primary rounded m-3">
              <ul class="nav flex-column">
                <li class="m-3"><img src="..." alt="Characters" class="img-thumbnail"/></li>
                <li class="m-3"><img src="..." alt="Symbols" class="img-thumbnail"/></li>
                <li class="m-3"><img src="..." alt="Numbers" class="img-thumbnail"/></li>
              </ul>
            </nav>
            <div class="col-10 offset-2" id="main">
              <h1>Generate password</h1>
              <p>
                Your Password (Click to copy)
              </p>
              <input
                type='range'
                class="form-range"
                min={4}
                max={128}
                step={1}
                className='custom-slider'/>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
