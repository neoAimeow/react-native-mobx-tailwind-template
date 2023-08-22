import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLoadedAssets } from './src/hooks/useLoadedAssets';
import { useLoadedService } from './src/hooks/useLoadedService';
import { ModalPortal } from 'react-native-modals';
import { ServiceProvider, services } from './src/common/service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { SheetProvider } from 'react-native-actions-sheet';
import './src/components/sheet/sheet';
import HomeScreen from './src/screens/home-screen/home.screen';

export default function App() {
    const isAssetsLoadingComplete = useLoadedAssets();
    const isServiceLoadingComplete = useLoadedService();

    if (!isAssetsLoadingComplete && isServiceLoadingComplete) {
        return null;
    } else {
        return (
            <SheetProvider>
                {
                    <ToastProvider duration={2000} animationDuration={250} offsetBottom={100}>
                        <ServiceProvider value={services}>
                            <SafeAreaProvider>
                                <StatusBar />
                                <HomeScreen />
                                <ModalPortal />
                            </SafeAreaProvider>
                        </ServiceProvider>
                    </ToastProvider>
                }
            </SheetProvider>
        );
    }
}
