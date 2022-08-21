import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signoutRedirectCallback } from './user-service';

const SignoutOidc: FC<{}> = () => {
    const history = useNavigate();
    useEffect(() => {
        const signoutAsync = async () => {
            await signoutRedirectCallback();
            history('/');
            window.location.reload();
        };
        signoutAsync();
    }, [history]);
    return <div>Redirecting...</div>;
};

export default SignoutOidc;