import clsx from "clsx";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { normalizeAlign } from "../../../utils/normalizer";
import { Example, Example2 } from "../../Element/Element.types";
import Element from "../../Element/Element";

export const ButtonGroup = ({
  className,
  hasAddons,
  align,
  size,
  ...props
}: ButtonGroupProps & Example & Example2) => {
  return (
    <Element
      renderAs="div"
      {...props}
      className={clsx("buttons", className, {
        "has-addons": hasAddons,
        [`is-${[normalizeAlign(align)]}`]: align,
        [`are-${size}`]: size,
      })}
    />
  );
};
