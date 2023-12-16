import React from "react";
import { Button } from 'antd';

const StyledButton = ({ children, ...props }) => {
  return (
    <Button size="large" {...props}>
      {children}
    </Button>
  );
};

export default StyledButton;
