export const StarIcon = ({color}: {color: string}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0L9.86676 6.13324L16 8L9.86676 9.86676L8 16L6.13324 9.86676L0 8L6.13324 6.13324L8 0Z"
        fill={color}
      />
    </svg>
  );
};
