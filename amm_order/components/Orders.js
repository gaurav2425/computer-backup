import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Orders = () => {
  const dataBuy = [
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "50",
      bidPrice: "999",
    },
    {
      order: "460",
      bidPrice: "899.7",
    },
    {
      order: "420",
      bidPrice: "867",
    },
    {
      order: "320",
      bidPrice: "970",
    },
    {
      order: "10",
      bidPrice: "777",
    },
  ];
  const dataSell = [
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "400",
      bidPrice: "899",
    },
    {
      order: "400",
      bidPrice: "899",
    },
  ];
  return (
    <View style={styles.orderbook_container}>
      <View style={styles.orderbook_container_left}>
        <View style={styles.orderbook_container_left_header}>
          <Text style={styles.header_txt}>Order</Text>
          <Text style={styles.header_txt}>Bid</Text>
        </View>
        <View>
          {dataBuy?.map((item, index) => {
            return (
              <View style={styles.bid_order_row} key={index}>
                <Text>{item?.order}</Text>
                <Text style={styles.price_bid}>{item?.bidPrice}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.orderbook_container_right}>
        <View style={styles.orderbook_container_right_header}>
          <Text style={styles.header_txt}>Ask</Text>
          <Text style={styles.header_txt}>Order</Text>
        </View>
        <View>
          {dataBuy?.map((item, index) => {
            return (
              <View style={styles.ask_order_row} key={index}>
                <Text>{item?.order}</Text>
                <Text style={styles.price_bid}>{item?.bidPrice}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  orderbook_container: {
    flexDirection: "row",
    borderColor: "#000",
    // borderWidth: 1,
    width: "100%",
  },
  orderbook_container_left: {
    width: "50%",
    // borderColor: "#000",
    // borderWidth: 1,
  },
  orderbook_container_right: {
    width: "50%",
    // borderColor: "#000",
    // borderWidth: 1,
  },
  orderbook_container_left_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    // backgroundColor: "green",
  },
  orderbook_container_right_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    // backgroundColor: "red",
  },
  bid_order_row: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ee6b6e",
    // opacity: 0.5,
  },
  ask_order_row: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1fd655",
  },
  header_txt: {
    fontWeight: "400",
    color: "#305CDE",
  },
  price_bid: {
    fontSize: 13,
  },
});
