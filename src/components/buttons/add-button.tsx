import React from 'react';
import { Button } from "@/components/ui/button"

interface AddButtonProps {
  text: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text }) => {
  return (
    <Button>
      + {text}
    </Button>
  );
};

export default AddButton;

