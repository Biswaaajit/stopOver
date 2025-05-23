type FormInputProps = {
  type: string;
  value: string;
  children: React.ReactNode;
  setFunc: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
};

export default function FormInput({
  type,
  value,
  setFunc,
  children,
  disabled = true,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <input
        type={type}
        value={value}
        onChange={(e) => setFunc(e.target.value)}
        disabled={disabled}
        className={`bg-zinc-300 text-black px-2 py-1.5 rounded-md ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
}
