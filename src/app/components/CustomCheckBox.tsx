import { FC } from "react";

interface CustomCheckboxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none h-[32px] w-[32px] border border-[#C5C5C5] rounded-[4px] checked:bg-blue-500 checked:border-transparent focus:outline-none transition duration-200"
      />
    </label>
  );
};

export default CustomCheckbox;
