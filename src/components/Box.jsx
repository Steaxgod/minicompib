import React from "react";

function Box({ size, children }) {
  const styles = {
    backgroundColor: "lightgray",
    padding: "20px",
    margin: "20px",
    borderRadius: "5px"
  };

  if (size === "s" || size === "small" || size === "sm") {
    styles.width = "200px";
    styles.height = "200px";
  } else if (size === "m" || size === "medium" || size === "md") {
    styles.width = "400px";
    styles.height = "400px";
  } else if (size === "l" || size === "large" || size === "lg") {
    styles.width = "800px";
    styles.height = "800px";
  }

  return <div style={styles}>{children}</div>;
}

export default Box;
