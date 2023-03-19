import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import GreyableImage from './Criteria';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <h1 class="bg-primary text-white">Password Genie</h1>
        </div>
      </nav>
      <div class="container-fluid">
          <div class="row">
            <div class="col-2 border border-primary rounded m-3">
              <ul class="nav flex-column">
                <li class="m-3"><GreyableImage src="characters.png" alt="Characters" title="Characters"/></li>
                <li class="m-3"><GreyableImage src="symbols.png" alt="Symbols" class="img-thumbnail" title="Symbols"/></li>
                <li class="m-3"><GreyableImage src="twofactor.png" alt="Numbers" class="img-thumbnail" title="Numbers"/></li>
              </ul>
            </div>
            <div class="col m-3">
              <h1 class="border border-primary text-primary p-3 rounded">Generate password</h1>
              <h5 class="border border-secondary text-secondary p-3 rounded">
                Your Password (Click to copy)
              </h5>
              <input
                type='range'
                class="form-range"
                min={4}
                max={128}
                step={1}/>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
