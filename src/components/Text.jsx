import React from "react";

function Text({ size, color, children }) {
  const styles = {
    fontSize: size === "small" ? "1rem" : size === "medium" ? "1.5rem" : "2rem",
    color: color
  };

  return <span style={styles}>{children}</span>;
}

export default Text;
