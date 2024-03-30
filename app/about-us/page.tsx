import styles from "../../styles/aboutus.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.contents}>
      <h1>
        아 진짜 뭔가 쉬우면서도 겁나 어렵고 하기는 싫은데 재미는 있고 그렇다고
        뭔가 쏙쏙 잘되는 것도 아니고 너무 열받앙
      </h1>
    </div>
  );
}
