const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="flex space-x-4">
        <div className="loader">
          <svg viewBox="0 0 80 80" className="w-11 h-11">
            <circle r={32} cy={40} cx={40} className="loader-circle" />
          </svg>
        </div>
        <div className="loader">
          <svg viewBox="0 0 86 80" className="w-12 h-11">
            <polygon points="43 8 79 72 7 72" className="loader-triangle" />
          </svg>
        </div>
        <div className="loader">
          <svg viewBox="0 0 80 80" className="w-11 h-11">
            <rect height={64} width={64} y={8} x={8} className="loader-rect" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loader;
