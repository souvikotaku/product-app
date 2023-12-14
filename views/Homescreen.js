import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { productId } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const Homescreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [productdata, setProductdata] = useState();
  const [favorites, setFavorites] = useState();
  const [favoritearray, setFavoritearray] = useState();
  const productArrayredux = useSelector(
    (state) => state.data.productobjectarray
  );
  const Item = ({ title, item }) => (
    // <View style={styles.item}>
    //   <Text style={styles.title}>{title}</Text>
    // </View>
    <View style={styles.prodcarddiv}>
      <View
        style={{
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={{
            // backgroundColor: "#F8F9FB",
            pointerEvents: "none",
            zIndex: 1,
            width: 20,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            position: "absolute",
            left: 0,
            marginLeft: "2%",
            marginTop: "2%",
            // elevation: 5,
            // shadowColor: "black",
          }}
        >
          {/* {favorites === true ? (
            <Ionicons name="heart-sharp" color={"red"} size={30} />
          ) : (
            <Ionicons name="heart-outline" color={"red"} size={30} />
          )} */}

          {favoritearray?.some((obj) => obj.id === item.id) ? (
            <Ionicons name="heart-sharp" color={"#f08080"} size={20} />
          ) : (
            <Ionicons name="heart-outline" color={"#f08080"} size={20} />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(productId(item?.id));
          navigation.navigate("Details", { item });
        }}
      >
        <View>
          <Image source={{ uri: item?.thumbnail }} style={styles.prodimage} />
          <Text
            style={{
              marginTop: 10,
            }}
          >{`$${item?.price}`}</Text>
          <Text>{item?.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    axios
      // .get("https://dummyjson.com/products")
      .get("https://dummyjson.com/products")
      .then((res) => {
        // console.log("data", res?.data?.products);
        setProductdata(res?.data?.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const renderItem = ({ item }) => <Item title={item.title} item={item} />;

  useEffect(() => {
    // function itemExistsinfavorite(id) {
    //   return productArrayredux.some(function (el) {
    //     return el.id === id;
    //   });
    // }
    // itemExistsinfavorite(productId);
    // console.log("itemExistsinfavorite", itemExistsinfavorite(productId));
    // function itemExistsinfavorite(id) {
    //   return productArrayredux.some(function (el) {
    //     return el.id === id;
    //   });
    // }
    const newArrayprod = [];
    productArrayredux &&
      productArrayredux?.map((item) => {
        const filteredObj = productdata?.find((obj) => obj?.id === item?.id);

        // console.log("filteredObj", filteredObj);
        // newArrayprod.push(filteredArr);
        if (filteredObj) {
          newArrayprod.push(filteredObj); // Push each filteredObj into the array
        }
      });
    // console.log("newArrayprod", newArrayprod);
    setFavoritearray(newArrayprod);
  }, [productArrayredux]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.nameheading}>Hey, Rahul</Text>
          <TextInput
            style={styles.input}
            placeholder="Search Products or store"
            placeholderTextColor="white"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "6%",
            }}
          >
            <View>
              <Text style={styles.letterone}>DELIVERY TO</Text>
              <Text style={styles.lettertwo}>Green Way 3000, Sylhet</Text>
            </View>

            <View>
              <Text style={styles.letteroneright}>WITHIN</Text>
              <Text style={styles.lettertworight}>1 Hour</Text>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 270,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("./assets/cardnew1.png")}
                  // style={{ width: "100%", height: 250 }}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </TouchableOpacity>
              {/* <Text>Child 1</Text> */}
            </View>

            <View
              style={{
                width: 270,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("./assets/cardnew2.png")}
                  // style={{ width: "100%", height: 250 }}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </TouchableOpacity>
              {/* <Text>Child 1</Text> */}
            </View>
          </ScrollView>
        </View>

        <View style={styles.container4}>
          <Text style={styles.recommendedheader}>Recommended</Text>
          {/* <ScrollView
            style={{
              paddingTop: 10,
            }}
            // showsVerticalScrollIndicator={false}
          > */}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{
              paddingTop: 10,
            }}
            numColumns={2}
            data={productdata && productdata}
            // horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    justifyContent: "start",
  },
  container2: {
    // flex: 1,
    paddingTop: "17%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#2A4BA0",
    width: "100%",
    height: 270,
  },
  prodcarddiv: {
    backgroundColor: "#F8F9FB",
    width: "47%",
    height: "max-content",
    margin: 6,
    padding: 12,
    borderRadius: 12,
    // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

    elevation: 5,
    shadowColor: "black", // marginBottom: 10,
  },

  container3: {
    // flex: 1,
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white",
    width: "100%",
    height: 160,
  },
  prodimage: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
  },
  container4: {
    // flex: 1,
    paddingTop: "3%",
    // paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white",
    width: "100%",
    height: 360,
    // flex: 1,
    // flexDirection: "row",
  },
  nameheading: {
    textAlign: "left",
    // fontFamily: "Manrope",
    // fontWeight: "bold",
    fontSize: 22,
    lineHeight: 30,
    color: "white",
  },
  input: {
    height: 40,
    backgroundColor: "#153075",
    marginTop: 30,
    borderRadius: 28,
    height: 56,
    padding: 20,
    color: "white",
  },
  letterone: {
    fontSize: 11,
    color: "#F8F9FB",
    opacity: 0.5,
  },
  letteroneright: {
    fontSize: 11,
    color: "#F8F9FB",
    opacity: 0.5,
    textAlign: "right",
  },
  lettertwo: {
    fontSize: 14,
    color: "#F8F9FB",
  },
  lettertworight: {
    fontSize: 14,
    color: "#F8F9FB",
    textAlign: "right",
  },
  recommendedheader: {
    fontSize: 30,
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
