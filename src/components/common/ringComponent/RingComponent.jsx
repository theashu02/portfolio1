

const RingComponent = () => {
  return (
    <div
      className="absolute w-full h-full top-[-202px] left-[-550px]"
      // style={{background: "linear-gradient(141.8deg, #E3FAFF 48.42%, #60B9C4 78.19%)"}}
    >
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(141.8)">
            <stop offset="48.42%" stopColor="#E3FAFF" />
            <stop offset="78.19%" stopColor="#60B9C4" />
          </linearGradient>
        </defs>
        {/* Donut path with gradient */}
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

export default RingComponent;
