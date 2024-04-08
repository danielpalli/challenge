interface Props {
  progress: number;
}

export const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="bg-gray-300 h-4 rounded-[0.2rem]">
      <div
        className={`bg-teal-500 h-4 rounded-[0.2rem]`}
        style={{ width: `calc(${progress}% - 0.4rem)` }}
      />
    </div>
  );
};
