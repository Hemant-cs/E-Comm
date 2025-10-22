import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const t = setTimeout(() => {
            navigate('/signup'); // or without { replace: true } if you want back button to return here
        }, 2000);

        return () => clearTimeout(t);
    }, [navigate]);

    return (
        <>
            <h1>See You Soon!</h1>
        </>
    );
};

export default Logout;