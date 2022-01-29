import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const categories = [
  {
    icon: <AntDesign name="star" size={20} color="white" />,
    category: "Popular",
  },
  {
    icon: <FontAwesome5 name="chair" size={20} color="white" />,
    category: "Chair",
  },
  {
    icon: <MaterialCommunityIcons name="table-chair" size={20} color="white" />,
    category: "Table",
  },
  {
    icon: (
      <MaterialCommunityIcons name="chair-rolling" size={20} color="white" />
    ),
    category: "ArmChair",
  },
  {
    icon: <Ionicons name="bed-outline" size={20} color="white" />,
    category: "Bed",
  },
  {
    icon: <MaterialCommunityIcons name="floor-lamp" size={20} color="white" />,
    category: "Lamp",
  },
];

export const products = [
  {
    id: 1,
    image: require("../assets/images/product1.png"),
    name: "Black Simple Lamp",
    price: "$ 12.00",
  },
  {
    id: 2,
    image: require("../assets/images/product2.png"),
    name: "Minimal Stand",
    price: "$ 25.00",
  },
  {
    id: 3,
    image: require("../assets/images/product3.png"),
    name: "Coffee Chair",
    price: "$ 20.00",
  },
  {
    id: 4,
    image: require("../assets/images/product4.png"),
    name: "Simple Desk",
    price: "$ 50.00",
  },
  {
    image: require("../assets/images/product1.png"),
    name: "Coffee Chair",
    price: "$ 20.00",
  },
  {
    id: 5,
    image: require("../assets/images/product2.png"),
    name: "Simple Desk",
    price: "$ 50.00",
  },
  {
    id: 6,
    image: require("../assets/images/product3.png"),
    name: "Office Desk",
    price: "$ 90.00",
  },
  {
    id: 6,
    image: require("../assets/images/product4.png"),
    name: " School Table",
    price: "$ 70.00",
  },
];
