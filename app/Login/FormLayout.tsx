type FormLayoutProps = {
  children: React.ReactNode;
  handleForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function FormLayout({ children, handleForm }: FormLayoutProps) {
  return (
    <form
      className="w-[90%] flex flex-col justify-center items-center gap-8"
      onSubmit={handleForm}
    >
      {children}
    </form>
  );
}
