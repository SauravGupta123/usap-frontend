// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const adminToken = localStorage.getItem('adminToken');
        const adminUserName = localStorage.getItem('adminUserName');

        if (!adminToken || !adminUserName) {
            navigate('/admin/login');
        }
    }, [navigate]);
};


const subAdminAuth=()=>{
    const navigate = useNavigate();

    useEffect(() => {
        const adminToken = localStorage.getItem('subAdminToken');
        const adminUserName = localStorage.getItem('subAdminUserName');

        if (!adminToken || !adminUserName) {
            navigate('/admin/login');
        }
    }, [navigate]);
}

export  {useAuth,subAdminAuth};
