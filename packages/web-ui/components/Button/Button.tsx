import React from 'react';
import "./Button.css";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
}

export default function Button(props: ButtonProps) {
  return(
    <button className="p-2 bg-green-400 rounded-lg text-green-800" onClick={props.onClick}>
      {props.label}
    </button>
  );
}