import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: "#ECEFF1",
        borderRadius: 10,
        flex: 1,
    },
    image: {
        width: '100%',
        height: 150, // Resim yüksekliğini ayarla
        backgroundColor: "grey",
        borderRadius: 10,
    },
    bottom: {
        margin:10,
        alignItems: 'left',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        opacity: 0.5,
        fontWeight: 'bold',
    },
    inStock: {
        color: "red",
        fontWeight: "bold",
        paddingTop: 5,
        fontSize: 15,
    },
});
