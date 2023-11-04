import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "text"
    | "black-bis"
    | "black-ter"
    | "white-bis"
    | "white-ter"
    | "grey-darker"
    | "grey-dark"
    | "grey-light"
    | "grey-lighter"
    | string;

  sizeb?: "small" | "medium" | "large" | string;
  /**
   * Whether Button should have an outline.
   */
  outlined?: boolean;
  /**
   * Whether Button should have an inverted color scheme. Useful when button is used on colored background
   */
  inverted?: boolean;
  submit?: boolean;
  reset?: boolean;
  status?: "focus" | "hover" | "active";
  loading?: boolean;
  /**
   * Whether Button should occupy the full width of parent
   */
  fullwidth?: boolean;
  disabled?: boolean;
  remove?: boolean;
  /**
   * Whether Button is selected. Useful in a Button.Group.
   */
  isSelected?: boolean;
  /**
   * Whether Button is non-interactive/static.
   */
  isStatic?: boolean;
  /**
   * Whether Button should have fully-rounded corners
   */
  rounded?: boolean;
  /**
   * Whether Button is a text button.
   */
  text?: boolean;
  renderAs?: string | React.ComponentType<React.PropsWithChildren<unknown>>; //Component
}
