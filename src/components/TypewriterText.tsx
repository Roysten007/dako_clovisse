import { motion } from "framer-motion";

const TypewriterText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

export default TypewriterText;
