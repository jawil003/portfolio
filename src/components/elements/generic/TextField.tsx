import React from "react";
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
    <div className={"inputRoot"}>
      <style jsx>{`
        .input {
          font-size: 1.15em;
          width: 100%;
          border: none;
          resize: none;
          background: transparent;
        }
        .inputRoot {
          display: grid;
          grid-template-rows: auto auto;
          display: inline-block;
        }

        .input:hover,
        .input:focus {
          border: none;
          outline: none;
        }

        .inputContainer {
          padding: 10px 15px;
          background: var(--lightgrey);
          border-radius: 5px;
          width: 100%;
        }
      `}</style>
      <Typography variant="b1">
        {title}
      </Typography>
      <div className={"inputContainer"}>
        {area ? (
          <textarea
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className={"input"}
            cols={23}
            rows={rows}
          ></textarea>
        ) : (
          <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={"input"}
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
