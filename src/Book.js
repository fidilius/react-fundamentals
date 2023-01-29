function Book(props) {
  const { img, title, author, number } = props;
  return (
    <article className="book">
      <div className="book-number">{`#${number + 1}`}</div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

export default Book;
