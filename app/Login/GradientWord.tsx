type GradientWordProps = {
  name: string;
};

export default function GradientWord({ name }: GradientWordProps) {
  return (
    <p className="bg-gradient-to-tr from-cyan-400 leading-none  to-blue-800 bg-clip-text text-transparent text-[6vw] sm:text-3xl pb-4 md:text-5xl font-bold">
      {name}
    </p>
  );
}
