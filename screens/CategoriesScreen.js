import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = (itemData) => {
    navigation.navigate("MealsOverview", {
      categoryId: itemData.item.id
    });
  };

  return (
    <FlatList 
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={() => pressHandler(itemData)} />}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;