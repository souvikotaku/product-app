import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

// import Carousel from "react-native-snap-carousel";

function Detailscreen({ navigation }) {
  const isCarousel = React.useRef(null);
  //   const data = [
  //     { id: "1", uri: "https://example.com/image1.jpg" },
  //     { id: "2", uri: "https://example.com/image2.jpg" },
  //     { id: "3", uri: "https://example.com/image3.jpg" },
  //   ];

  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          //   backgroundColor: "red",
          height: 300,
        }}
      >
        <Text style={styles.detailheader}>Item name</Text>

        <View style={{ flex: 1 }}>
          {/* <Carousel
            loop
            width={350}
            height={300 / 2}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            
            renderItem={renderItem}
          /> */}
          <Carousel
            width={width}
            height={width / 2}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            renderItem={renderItem}
            // sliderWidth={width}
            // itemWidth={width}
          />
        </View>
      </View>
    </View>
  );
}

export default Detailscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 40,
    // width: "100%",
  },
  detailheader: {
    fontSize: 50,
    fontWeight: "bold",
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
