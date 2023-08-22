import React from 'react';
import { useService } from '../common/service';

export function useLoadedService() {
    const [isServiceLoadingComplete, setServiceLoadingComplete] = React.useState(false);
    React.useEffect(() => {
        async function loadServiceAndDataAsync() {
            try {
            } catch (e) {
                console.warn(e);
            } finally {
                setServiceLoadingComplete(true);
            }
        }

        loadServiceAndDataAsync();
    }, []);

    return isServiceLoadingComplete;
}
