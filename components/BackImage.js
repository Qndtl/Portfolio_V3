import styles from "../styles/BackImage.module.css";

export default function BackImage({ aboutRef }) {
  const onClick = () => {
    window.scrollTo(0, aboutRef.current.offsetTop - 60);
  }
  return (
    <section className={styles.bgImage}>
      <div className={styles.texts}>
        <h1>WEB PORTFOLIO</h1>
        <span style={{ textAlign: "center" }}>안녕하세요.</span>
        <span style={{ textAlign: "center" }}>웹 개발자를 꿈꾸고 있는 조현덕입니다.</span>
        <button className={styles.moreBtn} onClick={onClick}>MORE</button>
      </div>
    </section>
  )
}
