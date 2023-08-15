import PropTypes from "prop-types";
import styles from "./buttonExample.module.css";

function ButtonExample({ text }) {
  return (
    <div>
      <p>CSS 모듈 예시</p>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}
ButtonExample.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ButtonExample;
