import { motion } from "framer-motion";

const shapes = [
  { type: "triangle", x: "10%", y: "20%", size: 20, delay: 0, duration: 7 },
  { type: "square", x: "80%", y: "15%", size: 14, delay: 1, duration: 8 },
  { type: "circle", x: "70%", y: "70%", size: 10, delay: 2, duration: 6 },
  { type: "triangle", x: "25%", y: "75%", size: 16, delay: 0.5, duration: 9 },
  { type: "square", x: "90%", y: "50%", size: 12, delay: 1.5, duration: 7 },
  { type: "circle", x: "50%", y: "10%", size: 8, delay: 3, duration: 8 },
  { type: "triangle", x: "5%", y: "50%", size: 18, delay: 2, duration: 10 },
  { type: "square", x: "40%", y: "85%", size: 10, delay: 0.8, duration: 6 },
];

const Shape = ({ type, size }: { type: string; size: number }) => {
  const color = "hsl(47 100% 48% / 0.15)";
  if (type === "circle")
    return <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />;
  if (type === "square")
    return <rect width={size} height={size} fill={color} />;
  return (
    <polygon
      points={`${size / 2},0 ${size},${size} 0,${size}`}
      fill={color}
    />
  );
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: s.x, top: s.y }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: s.duration,
          delay: s.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width={s.size} height={s.size}>
          <Shape type={s.type} size={s.size} />
        </svg>
      </motion.div>
    ))}
  </div>
);

export default FloatingParticles;
