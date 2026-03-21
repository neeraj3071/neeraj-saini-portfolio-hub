const Marquee = () => {
  const items = [
    "FULL-STACK DEVELOPER",
    "★",
    "REACT + SPRING BOOT",
    "★",
    "CLOUD NATIVE",
    "★",
    "MICROSERVICES",
    "★",
    "OPEN TO WORK",
    "★",
    "UNIVERSITY OF MICHIGAN",
    "★",
  ];

  return (
    <div className="bg-black py-4 border-y-4 border-white relative z-20 overflow-hidden" style={{ transform: "rotate(1deg)", margin: "0 -2%" }}>
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white font-display font-extrabold text-xl md:text-2xl uppercase mx-6 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
