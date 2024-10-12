import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <div
        className="h-screen w-full flex items-center flex-col  "
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-3xl font-bold text-center">
          Click to change the background color!
        </h1>
        <div className="flex gap-5">
          <Button text="Red" bgColor="red" setBgColor={setBgColor} />
          <Button text="Yellow" bgColor="yellow" setBgColor={setBgColor} />
          <Button text="Green" bgColor="green" setBgColor={setBgColor} />
          <Button text="Purple" bgColor="purple" setBgColor={setBgColor} />
          <Button text="Orange" bgColor="orange" setBgColor={setBgColor} />
        </div>
      </div>
    </>
  );
}
