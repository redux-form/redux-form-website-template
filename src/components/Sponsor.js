import React from "react";
import cx from "classnames";
import styles from "./Sponsor.scss";

export default function Sponsor({ dark }) {
  return (
    <div
      data-ea-publisher="redux-form"
      data-ea-type="image"
      className={cx(styles.benevolentSponsor, {
        [styles.dark]: dark,
      })}
    />
  );
}
