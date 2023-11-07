import * as React from "react";

export interface Example extends React.PropsWithChildren<Props>{
    renderAs: string | React.ElementType<React.PropsWithChildren<unknown>>; //Component
    disabled?: boolean
}

type MarginPaddingAreaType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | number | string;

type TextSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | string | number;

type TextAlignType = "center" | "justify" | "left" | "right";

type DisplayType =
  | "block"
  | "flex"
  | "inline"
  | "inline-block"
  | "inline-flex"
  | "hidden";

export type DisplayBreaks = {
  textSize?: TextSizeType;
  textAlign?: TextAlignType;
  display?: DisplayType;
};

export type OnlyType = {
    only?: boolean;
};

export interface Props {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "start"
    | "end"
    | "baseline";
  alignItems?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  backgroundColor?:
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "text"
    | string;
  className?: string;
  clearfix?: boolean;
  clickable?: boolean;
  clipped?: boolean;
  colorVariant?: "light" | "dark";
  display?: DisplayType & "relative";
  /**
   * Reference to Dom element
   */
  domRef?: object;
  // Flex
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexGrow?: 0 | 1 | 2 | 3 | 4 | 5;
  italic?: boolean;
  invisible?: boolean;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  m?: MarginPaddingAreaType;
  mt?: MarginPaddingAreaType;
  mr?: MarginPaddingAreaType;
  mb?: MarginPaddingAreaType;
  ml?: MarginPaddingAreaType;
  mx?: MarginPaddingAreaType;
  my?: MarginPaddingAreaType;
  marginless?: boolean;
  overlay?: boolean;
  paddingless?: boolean;
  p?: MarginPaddingAreaType;
  pt?: MarginPaddingAreaType;
  pr?: MarginPaddingAreaType;
  pb?: MarginPaddingAreaType;
  pl?: MarginPaddingAreaType;
  px?: MarginPaddingAreaType;
  py?: MarginPaddingAreaType;
  pull?: undefined | "right" | "left";
  radiusless?: boolean;
  /**
   * A string with the name of an Html element or a React Component
   */
  renderAs?: string | React.ComponentType<React.PropsWithChildren<unknown>>;

  shadowless?: boolean;
  srOnly?: boolean;
  textAlign?: TextAlignType;
  textColor?:
    | "primary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark"
    | "text"
    | string;
  textFamily?: string;
  textSize?: TextSizeType;
  textTransform?: "capitalized" | "lowercase" | "uppercase";
  textWeight?: "light" | "normal" | "semibold" | "bold";
  unselectable?: "on" | "off" | boolean;

  mobile?: DisplayBreaks;
  tablet?: DisplayBreaks & OnlyType;
  desktop?: DisplayBreaks & OnlyType;
  widescreen?: DisplayBreaks & OnlyType;
  fullhd?: DisplayBreaks;
  touch?: DisplayBreaks;
  untilWidescreen?: DisplayBreaks;
  untilFullhd?: DisplayBreaks; // TODO verify centered property
}

export interface Example2 extends React.AllHTMLAttributes<HTMLElement> {
    ref?: any
    cambio?: React.ElementType
}
