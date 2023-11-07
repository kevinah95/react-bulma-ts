import clsx from "clsx";
import Element from "../Element/Element";


interface BoxProps extends React.BaseHTMLAttributes<HTMLDivElement> {}

export const Box = ({ className, ...props }: BoxProps) => {
    return <Element renderAs="div" {...props} className={clsx('box', className)} />;
}
