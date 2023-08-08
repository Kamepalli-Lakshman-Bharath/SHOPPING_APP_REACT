import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>online store</th>
            <th>helpful links</th>
            <th>partners</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>men clothing</td>
            <td>home</td>
            <td>zara</td>
            <td>building 101</td>
          </tr>
          <tr>
            <td>women clothing</td>
            <td>about</td>
            <td>pantaloons</td>
            <td>central avenue</td>
          </tr>
          <tr>
            <td>men clothing</td>
            <td>contact</td>
            <td>levies</td>
            <td>la - 902722</td>
          </tr>
          <tr>
            <td colSpan={2}>women accessories</td>
            <td>ucb</td>
            <td>united states</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>+ many more</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}
