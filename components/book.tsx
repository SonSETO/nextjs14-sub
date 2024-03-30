import styles from "../styles/book.module.css";

export async function getBook(id: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  const json = await response.json();
  return json;
}

export default async function BookDetailInfo({ id }: { id: string }) {
  const book = await getBook(id);
  console.log(book);
  return (
    <>
      <h3>{book.results.list_name}</h3>
      <ul>
        {book.results.books.map((b) => (
          <li key={b.rank}>
            <a href={b.amazon_product_url} title={b.title} target="_blank">
              <div>
                <img src={b.book_image} alt={b.title} />
              </div>
              <div>
                <p>{b.title}</p>
                <p>Buy Now</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
