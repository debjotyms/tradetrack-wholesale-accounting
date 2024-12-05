import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface AddButtonProps {
  text: string;
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text, className }) => {
  return (
    <Button className={className}>
      <Plus/> {text}
    </Button>
  );
};

export default AddButton;