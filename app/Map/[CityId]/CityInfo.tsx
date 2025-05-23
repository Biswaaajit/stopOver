type CityInfoProps = {
  label: string;
  children: React.ReactNode;
};

export default function CityInfo({ label, children }: CityInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-zinc-500 font-semibold text-sm">{label}</p>
      {children}
    </div>
  );
}
