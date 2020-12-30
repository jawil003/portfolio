import React from "react";
import styles from "./TextField.module.css";
import Typography from "./Typography";

export interface Props {
  title?: string;
  placeholder?: string;
  area?: boolean;
  rows?: number;
  value: string;
  onChange?: (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
    >,
  ) => void;
}

/**
 * An TextField React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TextField: React.FC<Props> = ({
  title,
  placeholder,
  rows,
  area,
  onChange,
  value,
}) => {
  return (
    <div className={styles.inputRoot}>
      <Typography variant="b1">
        {title}
      </Typography>
      <div
        className={
          styles.inputContainer
        }
      >
        {area ? (
          <textarea
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className={styles.input}
            cols={23}
            rows={rows}
          ></textarea>
        ) : (
          <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input}
          />
        )}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  title: "Bitte Titel eingeben",
  area: false,
  value: "",
};

export default React.memo(
  TextField,
  (prev, next) =>
    prev.value === next.value,
);
