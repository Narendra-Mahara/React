import Selectors from "./Components/Selectors";
import { IoMdSwap } from "react-icons/io";

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
            className="p-2 border border-zinc-800 outline-none rounded-md remove-arrow text-xl"
            type="number"
            name=""
            id="input"
            placeholder="Enter Amount"
          />
        </div>

        <div className="flex justify-between items-center p-4 text-left">
          <Selectors labelValue="From" />
          <IoMdSwap size={30} />
          <Selectors labelValue="To" />
        </div>

        <div className="w-full px-5 ">
          <button className="bg-red-700 w-full p-2 text-2xl text-white rounded-xl ">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
