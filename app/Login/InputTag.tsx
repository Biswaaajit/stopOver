type InputTagProps = {
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  setFunc: (value: string) => void;
};

export default function InputTag({
  type,
  placeholder,
  value,
  setFunc,
  required = true,
}: InputTagProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => setFunc(e.target.value)}
      className="w-full focus-within:outline-none border-b-2 border-zinc-800 hover:border-slate-200 px-0.5 pb-0.5 hover:pb-2 transition-all focus-within:pb-2"
    />
  );
}
