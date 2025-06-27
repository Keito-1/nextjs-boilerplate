"use client";
import { useEffect, useState } from "react";

type HelloWorldProps = {
  name: string;
};

const HelloWorld = ({ name }: HelloWorldProps) => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div style={{ fontSize: "32px" }}>Hello {showName ? name : "world"}</div>;
};

export default HelloWorld;
