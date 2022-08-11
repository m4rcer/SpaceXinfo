import React, {ReactNode} from 'react';
import { getClasses } from '../../../utils/classes';
import { ButtonVariants } from './ButtonVariants';

export interface IButtonProps {
    variants: ButtonVariants[];
    children: ReactNode;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FunctionComponent<IButtonProps> = (
    {variants,
    children,
    ...props}
) => {

    const classes = getClasses("btn", variants);

    return (
        <button {...props}
        className={classes}>
            {children}
        </button>
    )
}
export default Button;