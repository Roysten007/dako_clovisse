import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  target: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ target, suffix = "", label }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-3xl sm:text-4xl font-heading font-extrabold text-primary"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        {count}{suffix}
      </motion.p>
      <p className="text-sm text-text-secondary font-body mt-1">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
