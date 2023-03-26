import logo from "./logo.svg";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import GreyableImage from "./Criteria";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const text = {
    en: {
      title: "Password Genie",
      characters: "Characters",
      symbols: "Symbols",
      numbers: "Numbers",
      generate: "Generate password",
      yourPassword: "Your Password:",
      copied: "Copied",
      copy: "Click to Copy",
      length: "Length",
      passwordStrength: "Password Strength:",
      strength: ["Weak", "Average", "Strong", "Very Strong"],
    },
    fr: {
      title: "Génie de mot de passe",
      characters: "Caractères",
      symbols: "Symboles",
      numbers: "Nombres",
      generate: "Générer un mot de passe",
      yourPassword: "Votre mot de passe:",
      copied: "Copié!",
      copy: "Cliquer pour Copier",
      length: "Longueur",
      passwordStrength: "Force du mot de passe:",
      strength: ["Faible", "Moyenne", "Forte", "Très forte"],
    },
  };

  const [length, setLength] = useState(32);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const [useCharacters, setUseCharacters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const [language, setLanguage] = useState("en");

  let strengthScore = (useCharacters + useNumbers + useSymbols) * length;
  let strengthColor;
  let strengthName;
  if (strengthScore < 20) {
    strengthColor = "red";
    strengthName = 0;
  } else if (strengthScore < 40) {
    strengthColor = "orange";
    strengthName = 1;
  } else if (strengthScore < 80) {
    strengthColor = "#FFD700";
    strengthName = 2;
  } else {
    strengthColor = "green";
    strengthName = 3;
  }

  function sliderChange(event) {
    setLength(event.target.value);
  }

  function generatePassword() {
    let characterSet = "";
    let result = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_+";

    if (useCharacters) {
      characterSet += characters;
    }
    if (useNumbers) {
      characterSet += numbers;
    }
    if (useSymbols) {
      characterSet += symbols;
    }

    const characterSetLength = characterSet.length;

    for (let i = 0; i < length; i++) {
      result += characterSet.charAt(
        Math.floor(Math.random() * characterSetLength)
      );
    }

    setPassword(result);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function toggleLanguage() {
    setLanguage(language == "en" ? "fr" : "en");
  }

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <h1 class="bg-primary text-white m-3">Password Genie</h1>
          <motion.div whileHover={{ scale: 1.25 }}>
          <h3 class="bg-primary text-white m-3" onClick={toggleLanguage}>
            {language == "en" ? "fr" : "en"}
          </h3>
          </motion.div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 border border-primary rounded m-3">
            <ul class="nav flex-column">
              <li class="m-3">
                <GreyableImage
                  src="characters.png"
                  alt={text[language].characters}
                  title={text[language].characters}
                  active={useCharacters}
                  setActive={setUseCharacters}
                />
                <h5 class="text-primary">{text[language].characters}</h5>
              </li>
              <li class="m-3">
                <GreyableImage
                  src="symbols.png"
                  alt={text[language].symbols}
                  class="img-thumbnail"
                  title={text[language].symbols}
                  active={useSymbols}
                  setActive={setUseSymbols}
                />
                <h5 class="text-primary">{text[language].symbols}</h5>
              </li>
              <li class="m-3">
                <GreyableImage
                  src="twofactor.png"
                  alt={text[language].numbers}
                  class="img-thumbnail"
                  title={text[language].numbers}
                  active={useNumbers}
                  setActive={setUseNumbers}
                />
                <h5 class="text-primary">{text[language].numbers}</h5>
              </li>
            </ul>
          </div>
          <div class="col m-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <h1
                class="border border-primary text-primary p-3 rounded"
                onClick={generatePassword}
              >
                {text[language].generate}
              </h1>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <h5
                whileHover={{ scale: 1.05 }}
                class="border border-secondary text-secondary p-3 rounded"
                onClick={copyPassword}
              >
                {text[language].yourPassword} {password} (
                {copied ? text[language].copied : text[language].copy})
              </h5>
            </motion.div>
            <h6 class="text-primary mt-3">{text[language].length}</h6>
            <input
              type="range"
              class="form-range"
              min={4}
              max={128}
              step={1}
              onChange={sliderChange}
            />
            <h6 class="text-primary">{length}</h6>
            <div>
              {text[language].passwordStrength}<p style={{color:strengthColor}}>{text[language].strength[strengthName]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
