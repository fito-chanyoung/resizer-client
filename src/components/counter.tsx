import React from "react";

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = (props) => {
  const { name } = props;
  return <p>{name}</p>;
};

export default Counter;
