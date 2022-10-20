import React, { useState } from "react";


export default function Copy() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  }

  return (
    <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
  );
}
