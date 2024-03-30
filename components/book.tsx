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
      <div className={styles.title}>{book.results.list_name}</div>
      <div className={styles.container}>
        {book.results.books.map((i) => (
          <div className={styles.contents} key={i.rank}>
            <a href={i.amazon_product_url} title={i.title} target="_blank">
              <div>
                <img className={styles.img} src={i.book_image} alt={i.title} />
              </div>
              <div>
                <p>{i.title}</p>
                <p className={styles.text}>Buy Now</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
