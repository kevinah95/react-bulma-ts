import clsx from "clsx";
import Element from "../Element/Element";


interface BlockProps extends React.BaseHTMLAttributes<HTMLDivElement> {}

export const Block = ({ className, ...props }: BlockProps) => {
    return <Element renderAs="div" {...props} className={clsx('block', className)} />;
}
