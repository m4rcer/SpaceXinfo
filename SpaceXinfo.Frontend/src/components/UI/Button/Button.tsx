import React, {ReactNode} from 'react';
import { signinRedirect } from '../../../auth/user-service';
import { useActions } from '../../../hooks/useActions';
import { getClasses } from '../../../utils/classes';
import { ButtonVariants } from './ButtonVariants';

export interface IButtonProps {
    variants: ButtonVariants[];
    OnClick?: () => any;
    children: ReactNode;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FunctionComponent<IButtonProps> = (
    {variants,
    OnClick,
    children,
    ...props}
) => {
    const classes = getClasses("btn", variants);


    return (
        <button {...props}
        className={classes}
        onClick={OnClick}>
            {children}
        </button>
    )
}
export default Button;