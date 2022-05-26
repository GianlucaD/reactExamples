import React, { useState } from "react";

type Props = {};

const MyPromise = (_props: Props) => {
  const [counter, setCounter] = useState<number>(1);
  const [text, setText] = useState("ok");

  const prom = new Promise<number>((resolve, reject) => {
    console.log("Demo to show promise in Typescript !!");
    if (counter >= 5) {
      reject(-1);
    } else {
      resolve(counter);
    }
  });

  const increase = () => {
    prom
      .then((res) => {
        setCounter(counter + 1);
        return true;
      })
      .catch((error) => {
        setText("Error occurred");
        return -1;
      });
  };

  const increaseAwait = async () => {
    try {
      const c = await prom;
      setCounter(c + 1);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <h2>MyPromise is here</h2>
      <p>value: {counter}</p>
      <p>{text}</p>
      <button onClick={increaseAwait}> increase Counter</button>
    </>
  );
};

export default MyPromise;
