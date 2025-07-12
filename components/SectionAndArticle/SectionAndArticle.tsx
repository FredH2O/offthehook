type Props = {
  title: string;
  description: string;
};

const SectionAndArticle = ({ title, description }: Props) => {
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default SectionAndArticle;
