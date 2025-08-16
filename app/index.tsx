import { Redirect } from 'expo-router';
import { useEffect } from 'react';
// import { useAuthStore } from '@/store/authStore';

export default function Index() {
    //   const { isAuthenticated } = useAuthStore();
    useEffect(() => {
        console.log("eh")
    }, [])

    //   return isAuthenticated ? 
    return false ?
        <Redirect href="/(tabs)" /> :
        <Redirect href="/(auth)" />;
}