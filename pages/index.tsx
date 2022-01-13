import type { NextPage } from 'next'
import { FontAwesome } from '@expo/vector-icons';
import { NativeBaseProvider, Box, Icon } from 'native-base';

const Home: NextPage = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Icon as={FontAwesome} name="search"></Icon>
        Madhav
      </Box>
    </NativeBaseProvider>
  )
}

export default Home
