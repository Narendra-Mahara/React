// import Selectors from "./Components/Selectors";

let App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-32 text-center bg-purple-800 ">
      <div className="h-[350px] w-[400px] bg-slate-50 rounded-xl">
        <h1 className="text-3xl font-bold ">Currency Converter</h1>
        <div className="p-2 text-2xl">Output Here! Rs.120</div>
        <div className="flex flex-col px-5 text-left">
          <label htmlFor="input" className="text-xl">
            Amount
          </label>
          <input
            className="py-2 border border-zinc-800 outline-none px-2 rounded-md remove-arrow"
            type="number"
            name=""
            id="input"
          />
        </div>
        {/* <Selectors countryName={"eur"} />
        <Selectors countryName={"eur"} /> */}

        <div className="w-full px-5 mt-32">
          <button className="bg-red-700 w-full p-2 text-2xl text-white rounded-xl ">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
