import { Redirect } from 'expo-router';
// import { useAuthStore } from '@/store/authStore';

export default function Index() {
    //   const { isAuthenticated } = useAuthStore();

    //   return isAuthenticated ? 
    return true ?
        <Redirect href="/(tabs)" /> :
        <Redirect href="/(auth)" />;
}