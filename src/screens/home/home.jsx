import { Image, Text, View } from "react-native";
import icons from '../../constants/icons.js';


import { styles } from './home.style.js';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <View style={styles.dashboard}>
        <Text>R$ 1.250,00</Text>
        <Text>Total de Gastos</Text>
        <Image source={icons.money} style={styles.money} />
      </View>

    </View>
  );
}
export default Home;