const Marquee = () => {
  const items = [
    "FULL-STACK DEVELOPER",
    "⚡",
    "REACT + SPRING BOOT",
    "🔥",
    "CLOUD NATIVE",
    "💻",
    "MICROSERVICES",
    "🚀",
    "OPEN TO WORK",
    "✨",
    "UNIVERSITY OF MICHIGAN",
    "🎓",
  ];

  return (
    <div className="bg-deep py-4 tilt-1 -mx-4 brutal-border-2 border-x-0 relative z-20 overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white font-display font-bold text-xl md:text-2xl uppercase mx-6 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
