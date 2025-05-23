type MessageBoxProps = {
  message: string;
};
export default function MessageBox({ message }: MessageBoxProps) {
  return (
    <div className="w-full h-full lg:h-[40vh]  flex justify-center items-center">
      <p className="text-lg text-center">{message}</p>
    </div>
  );
}
