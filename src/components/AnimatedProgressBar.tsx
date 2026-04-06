import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedProgressBar = ({ value, label }: { value: number; label?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-xs font-body text-text-secondary">{label}</span>
          <span className="text-xs font-body text-primary">{value}%</span>
        </div>
      )}
      <div className="w-full h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
