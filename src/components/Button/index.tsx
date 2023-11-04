import clsx from "clsx";
import Element from "../Element";
import { ButtonProps } from "./types";
import { normalizeStatus } from "../../utils/normalizer";

export const Button = ({
  children,
  className,
  renderAs,
  color,
  sizeb,
  outlined,
  inverted,
  submit,
  reset,
  fullwidth,
  status,
  loading,
  disabled,
  remove,
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}: ButtonProps) => {
  let otherProps = {};
  if (submit) {
    otherProps = {
      type: "submit",
      renderAs: "button",
    };
  }
  if (reset) {
    otherProps = {
      type: "reset",
      renderAs: "button",
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: "span",
    };
  }
  return (
    <Element
      tabIndex={disabled ? -1 : 0}
      renderAs={renderAs || 'button'}
      {...props}
      {...otherProps}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={clsx(className, {
        [`is-${color}`]: color,
        [`is-${sizeb}`]: sizeb,
        "is-selected": isSelected,
        "is-static": isStatic,
        "is-rounded": rounded,
        "is-outlined": outlined,
        "is-inverted": inverted,
        "is-fullwidth": fullwidth,
        [`is-${normalizeStatus(status)}`]: status,
        "is-loading": loading,
        "is-text": text,
        delete: remove,
        button: !remove,
      })}
    >
      {children}
    </Element>
  );
};
