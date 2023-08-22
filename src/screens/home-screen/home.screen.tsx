import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';

const HomeScreen = ({ }) => {

    return (
        <SafeAreaView>
            <Text className='text-red-500'>test</Text>
        </SafeAreaView>
    );
};

export default observer(HomeScreen);
