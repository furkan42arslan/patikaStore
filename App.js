import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView, 
  Text, 
  View, 
  TextInput,
  FlatList, 
  StyleSheet, 
  ScrollView,
} from 'react-native';
import products from './products.json';
import ProductCard from './src/components/ProductCard/ProductCard';

export default function App() {
  const renderItem = ({item}) => (
    <ProductCard
      title={item.title}
      imgURL={item.imgURL}
      price={item.price}
      inStock={item.inStock ? "" : "STOKTA YOK"}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
        <View style={styles.header_container}>
          <Text style={styles.header_text}>PATIKASTORE</Text>
          <TextInput style={styles.search_bar} placeholder="Ara..."></TextInput>
        </View>

          <FlatList 
            data={products}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            ListHeaderComponent={() => null}

          />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50,
  },
  header_container:{
    justifyContent:'flex-start',
    textAlign:'left',
  },
  header_text:{
    fontSize:30,
    fontWeight:'bold',
    padding:10,
    color:"#EB3678"
  },
  search_bar:{
    margin:10,
    padding:10,
    borderRadius:15,
    textAlign:'left',
    backgroundColor:"#ECEFF1",
    color:"#EB3678"
  },
  list:{
    paddingHorizontal:10
  }
});
