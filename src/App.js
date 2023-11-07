import "./App.css";
import { useState } from "react";
import Number from "./component/Number.js";
import Checkbox from "./component/Checkbox.js";

function App() {
  const [Password, setPassword] = useState("");
  const [containUpperCase, setContainUpperCase] = useState(false);
  const [containLowerCase, setContainLowerCase] = useState(false);
  const [containnumber, setContainnumber] = useState(false);
  const [containSymbol, setContainSymbols] = useState(false);
  const [length, setLength] = useState(8);

  function handledigit() {
    setContainnumber(!containnumber);
  }
  function handleLength(event) {
    setLength(event.target.value);
  }
  function handleUpperCase() {
    setContainUpperCase(!containUpperCase);
  }

  function handleLowerCase() {
    setContainLowerCase(!containLowerCase);
  }
  function handleSymbols() {
    setContainSymbols(!containSymbol);
  }

  function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const digit = "0123456789";
    const symbols = "!@#$%^&*(){}?><|";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let dict = lowercase;

    if (containSymbol) {
      dict += symbols;
    }
    if (containUpperCase) {
      dict += uppercase;
    }
    if (containnumber) {
      dict += digit;
    }
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * dict.length);
      newPassword += dict.charAt(idx);
    }
    console.log(newPassword);
    setnewPassword(newPassword);
  }
  function setnewPassword(newPassword) {
    setPassword(newPassword);
    console.log(Password);
    // document.getElementById("result").innerText = newPassword;
  }
  function CopyPassword(){
    navigator.clipboard.writeText(Password);
    alert("passorw copied");
  }

  return (
    <div className="App">
      <h1 className="mb-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-2x1 lg:text-3xl dark:text-white">
        Password{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          ceate
        </mark>{" "}
        Randomely
      </h1>

      <form>
        {/* <div className="mb-6">
          <label htmlFor="length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
          <input type="number" id="length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter number"
            value={length}
            onChange={(e)=>handleLength(e)}
             />
        </div> */}
        <Number
          lengthkey={length}
          functionKey={handleLength}
          message={"Length of password"}
        />

        {/* <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={containnumber} onChange={handledigit}
          />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contails Numbers</label>
        </div> */}
        <Checkbox
          containKey={containnumber}
          handleKey={handledigit}
          message={"Contails Numbers"}
        />
        <Checkbox
          containKey={containUpperCase}
          handleKey={handleUpperCase}
          message={"Contains Upper Case"}
        />

        <Checkbox
          containKey={containLowerCase}
          handleKey={handleLowerCase}
          message={"Contains Lower Case"}
        />

        <Checkbox
          containKey={containSymbol}
          handleKey={handleSymbols}
          message={"Contains Symbols"}
        />
        {/* <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={containUpperCase}
            onChange={handleUpperCase}
          />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contains Upper Case</label>
        </div> */}

        {/* <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" checked={containLowerCase} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleLowerCase}
          />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contains Lower Case</label>
        </div> */}

        {/* <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" checked={containSymbol} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleSymbols}
          />
          <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contains Symbols </label>
        </div> */}

        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </form>

      <p
        id="result"
        className="mb-3 mt-4 text-center text-gray-800 dark:text-gray-200"
      >
        Password is : {Password}
      </p>
      <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={CopyPassword}
      >Copy Password</button>
    </div>
  );
}

export default App;
