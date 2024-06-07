const LoadingSpinner = () => {
  const sunset = (
    <div className="flex absolute -bottom-10 mx-auto w-24 h-24 rounded-t-full bg-orange-500"></div>
  );

  const dolphins = (
    <div className="flex relative bottom-3 right-6">
      <div className="flex animate-[spin_1.5s_ease-in-out_infinite] origin-bottom-right">
        <span className="-scale-x-100">🐬</span>
      </div>
      <div className="flex animate-[spin_1.5s_ease-in-out_-0.75s_infinite] origin-bottom-right ml-1">
        <span className="-scale-x-100">🐬</span>
      </div>
    </div>
  );

  const waves = (
    <span className="absolute sepia-[.5] -bottom-3">
      <span className="inline-block animate-[bounce_2s_-1.5s_linear_infinite]">
        🌊
      </span>
      <span className="inline-block animate-[bounce_2s_-1s_linear_infinite]">
        🌊
      </span>
      <span className="inline-block animate-[bounce_2s_linear_-0.5s_infinite]">
        🌊
      </span>
      <span className="inline-block animate-[bounce_2s_linear_infinite]">
        🌊
      </span>
    </span>
  );

  return (
    <div className="relative flex flex-1 flex-col justify-center items-center pt-8 text-5xl overflow-hidden my-8">
      {sunset}
      {dolphins}
      {waves}
    </div>
  );
};

export default LoadingSpinner;
