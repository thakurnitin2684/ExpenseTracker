import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  View,
} from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses, isFetching, getExpenses }) {
  return (
    <View>
      {isFetching ? <ActivityIndicator /> : null}
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={getExpenses} />
        }
      />
    </View>
  );
}

export default ExpensesList;
