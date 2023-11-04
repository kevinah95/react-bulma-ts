import * as React from "react";
import { Example, Example2 } from "./types";
import clsx from "clsx";
import { useElementClassNames } from "./classNames";

const Element = ({ className, ref, children, ...allProps }: Example & Example2) => {
  //const { renderAs } = allProps;
  const [classNames, props] = useElementClassNames(allProps);
  const { renderAs, ...restProps } = props;
  return React.createElement(
    renderAs,
    { className: clsx(className, classNames) || undefined, ref, ...restProps } as React.ClassAttributes<{}>,
    children,

  );
};

export default Element;

