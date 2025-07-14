"use client";
import { easeInOut, motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

const SectionAndArticle = ({ title, description }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: easeInOut }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-3xl mx-auto p-6  bg-opacity-60 rounded-lg my-8 border-gray-700"
    >
      <article>
        <h3 className="text-3xl text-center font-serif font-bold text-yellow-400 mb-4 tracking-wide drop-shadow-md">
          {title}
        </h3>
        <p className="text-gray-200 text-center text-lg leading-relaxed font-light">
          {description}
        </p>
      </article>
    </motion.section>
  );
};

export default SectionAndArticle;
