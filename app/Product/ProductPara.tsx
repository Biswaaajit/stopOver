type ProductParaProps = {
  children: React.ReactNode;
};
export default function ProductPara({ children }: ProductParaProps) {
  return (
    <p className="text-base text-justify md:text-lg font-medium">{children}</p>
  );
}
