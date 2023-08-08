import { useRouter } from "next/navigation";
import styles from "./Card.module.css";

export default function Card(props) {
  const { preview, price, brand, name, id } = props;
  const { push } = useRouter();
  const handleRoute = () => {
    push(`/product/${id}`);
  };
  return (
    <div onClick={handleRoute} className={styles.card}>
      <div className={styles.image}>
        <img src={preview} alt="image" />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.brand}>{brand}</p>
      <p className={styles.price}>
        RS<span> {price}</span>
      </p>
    </div>
  );
}
