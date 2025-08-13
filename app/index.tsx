import { Redirect } from 'expo-router';
// import { useAuthStore } from '@/store/authStore';

export default function Index() {
    //   const { isAuthenticated } = useAuthStore();

    //   return isAuthenticated ? 
    return false ?
        <Redirect href="/(tabs)" /> :
        <Redirect href="/(auth)" />;
}