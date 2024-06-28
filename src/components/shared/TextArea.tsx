import React from "react";

const TextArea = ({
  name,
  handleChange,
  value,
}: {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}) => {
  return (
    <div
      className={`w-full border-[#86A3AD] border-[0.5px] border-solid rounded-3xl`}
    >
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full h-[170px] border-0 bg-inherit outline-0 p-4 text-[#888] "
        placeholder="Hi! Are you available for a conversation?"
      ></textarea>
    </div>
  );
};

export default TextArea;
