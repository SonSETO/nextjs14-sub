import { API_URL } from "../constants";
import styles from "../../styles/home.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

async function getBooks() {
  // const response = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Homepage() {
  const books = await getBooks();
  return (
    <div>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div className={styles.container}>
        {books.results.map((book) => (
          <div className={styles.contents} key={book.list_name_encoded}>
            <Link href={`/list/${book.list_name_encoded}`}>
              {book.display_name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
