import React from "react";
import styles from "./TextField.module.css";
import Typography from "./Typography";

interface Props {
  title: string;
  placeholder?: string;
  area?: boolean;
  rows?: number;
}

/**
 * An TextField React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TextField: React.FC<Props> = ({ title, placeholder, rows, area }) => {
  return (
    <div className={styles.inputRoot}>
      <Typography variant="b1">{title}</Typography>
      <div className={styles.inputContainer}>
        {area ? (
          <textarea
            placeholder={placeholder}
            className={styles.input}
            cols={23}
            rows={rows}
          ></textarea>
        ) : (
          <input placeholder={placeholder} className={styles.input} />
        )}
      </div>
    </div>
  );
};

TextField.defaultProps = { area: false };

export default TextField;
