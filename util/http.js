import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-8bf87-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData, token, userId) {
  const response = await axios.post(
    BACKEND_URL + `/expenses/${userId}.json?auth=` + token,
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses(token, userId) {
  const response = await axios.get(
    BACKEND_URL + `/expenses/${userId}.json?auth=` + token
  );

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  console.log("HTTP", userId);
  console.log("HTTP", token.slice(0, 5));
  return expenses;
}

export function updateExpense(id, expenseData, token, userId) {
  return axios.put(
    BACKEND_URL + `/expenses/${userId}/${id}.json?auth=` + token,
    expenseData
  );
}

export function deleteExpense(id, token, userId) {
  return axios.delete(
    BACKEND_URL + `/expenses/${userId}/${id}.json?auth=` + token
  );
}
