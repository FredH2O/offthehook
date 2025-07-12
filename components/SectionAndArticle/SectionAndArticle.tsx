type Props = {
  title: string;
  description: string;
};

const SectionAndArticle = ({ title, description }: Props) => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-gray-900 bg-opacity-60 rounded-lg shadow-lg my-8 border border-gray-700">
      <article>
        <h2 className="text-3xl font-serif font-bold text-yellow-400 mb-4 tracking-wide drop-shadow-md">
          {title}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed font-light">
          {description}
        </p>
      </article>
    </section>
  );
};

export default SectionAndArticle;
