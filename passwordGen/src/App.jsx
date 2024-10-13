export default function App() {
  return (
    <>
      <div className="w-full h-screen bg-purple-700">
        <h1 className="text-3xl font-bold  text-center text-white">Password Generator</h1>
        <div className=" flex flex-col w-[400px] h-[250px] bg-white mx-auto mt-8 p-5 rounded-lg">
          <input
            className="p-2 border border-gray-300 rounded-md text-lg"
            type="text"
            name="password"
            id="password"
            value={""}
            placeholder="Password"
          />
          <div className="flex flex-col  py-3 text-lg">
            <div className="flex gap-2">
              <input type="checkbox" name="uppercase" id="uppercase" />
              <label htmlFor="uppercase">Includes uppercase</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" name="numbers" id="numbers" />
              <label htmlFor="numbers">Includes numbers</label>
            </div>

            <div className="flex gap-2">
              <input
                type="checkbox"
                name="specialCharacters"
                id="specialCharacters"
              />
              <label htmlFor="specialCharacters">
                Includes special characters
              </label>
            </div>
          </div>
          <button className="bg-red-500 rounded-md p-2 text-white text-xl">
            Generate
          </button>
        </div>
      </div>
    </>
  );
}
