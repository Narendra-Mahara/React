import { useState, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(10); // Added state for length
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [password, setPassword] = useState(""); // Added state for password
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [clicked]);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) charset += "0123456789";
    if (specialCharacters) charset += "!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(pass);
  };

  return (
    <>
      <div className="w-full h-screen bg-purple-700">
        <h1 className="text-3xl font-bold text-center text-white pt-3">
          Password Generator
        </h1>
        <div className="flex flex-col w-[400px] h-[265px] bg-white mx-auto mt-8 p-5 rounded-lg">
          <input
            className="p-2 border border-gray-300 rounded-md text-lg"
            type="text"
            name="password"
            id="password"
            value={password || "dhi38"}
            placeholder="Password"
            readOnly
          />
          <div className="flex flex-col py-3 text-lg">
            <div className="flex gap-2">
              <label htmlFor="length">Choose length:</label>
              <input
                className="cursor-pointer"
                type="range"
                name="length"
                id="length"
                min="8"
                max="20"
                value={length}
                onChange={(e) => setLength(e.target.value)} // Corrected handler
              />
              <label htmlFor="length">{length}</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)} // Corrected handler
              />
              <label htmlFor="uppercase">Includes uppercase</label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
              />
              <label htmlFor="numbers">Includes numbers</label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="specialCharacters"
                id="specialCharacters"
                checked={specialCharacters}
                onChange={() => setSpecialCharacters(!specialCharacters)}
              />
              <label htmlFor="specialCharacters">
                Includes special characters
              </label>
            </div>
          </div>
          <button
            className="bg-red-500 rounded-md p-2 text-white text-xl"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
