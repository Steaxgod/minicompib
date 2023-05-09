import React from "react";

function Button({ color, onClick, children }) {
  const styles = {
    backgroundColor: color || "gray",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
