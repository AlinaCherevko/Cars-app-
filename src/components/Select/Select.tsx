import { FC } from "react";
import Select from "react-select";

export type Option = { value: string; label: string };

export type ISelect = {
  onChange: (value: string) => void;
  options: Option[] | undefined;
  placeholder: string;
};

const SelectEl: FC<ISelect> = ({ onChange, options, placeholder }) => {
  const onSelectChange = (newValue: unknown) => {
    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;

      if (selectedOption.value === "all") {
        onChange("");
      } else {
        onChange(selectedOption.value);
      }
    }
  };

  return (
    <div className="">
      <Select
        className=""
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectEl;
