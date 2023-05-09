import React from "react";
import Box from "./Box";
import Text from "./Text";
import Button from "./Button";

const MyComponent = () => {
  return (
    <Box size="small">
      <Text size="medium" color="red">
      😂Try It😂
      </Text>
      <Button
        color="blue"
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        💀Click Me💀
      </Button>
    </Box>
  );
};

export default MyComponent;
