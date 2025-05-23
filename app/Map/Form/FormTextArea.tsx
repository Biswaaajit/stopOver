type FormTextAreaProps = {
  children: React.ReactNode;
  value: string;
  setFunc: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function FormTextArea({
  children,
  value,
  setFunc,
  placeholder,
}: FormTextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <textarea
        placeholder={placeholder}
        className="bg-zinc-300 text-black px-2 py-1.5 rounded-md h-[15vh] focus-within:outline-none shadow-md hover:shadow-zinc-600 transition-all"
        value={value}
        onChange={(e) => setFunc(e.target.value)}
      ></textarea>
    </div>
  );
}
