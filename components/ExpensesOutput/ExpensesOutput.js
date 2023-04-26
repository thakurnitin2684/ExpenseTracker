import { StyleSheet, Text, View, button } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import IconButton from "../UI/IconButton";
function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
  isFetching,
  getExpenses,
}) {
  let content = (
    <View style={styles.refreshButton}>
      <Text style={styles.infoText}>{fallbackText}</Text>
      <View>
        <IconButton
          icon="refresh-circle"
          size={40}
          color={GlobalStyles.colors.primaryDark}
          onPress={getExpenses}
        />
      </View>
    </View>
  );

  if (expenses.length > 0) {
    content = (
      <ExpensesList
        expenses={expenses}
        isFetching={isFetching}
        getExpenses={getExpenses}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
  refreshButton: {
    alignItems: "center",
  },
});
