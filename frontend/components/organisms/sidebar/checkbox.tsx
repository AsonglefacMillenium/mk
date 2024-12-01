import React from "react";
import styles from "./styles.module.css";

interface CheckboxProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (id: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, isChecked, onChange }) => {
  return (
    <div className={styles.checkbox_wrapper}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => onChange(id)}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
