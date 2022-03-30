
export const numberFormatter = (num) => {
  let vnCurrency = Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return vnCurrency.format(num);
}

export const numberNoCurrency = (num) => {
  let vnCurrency = Intl.NumberFormat("vi-VN");
  return vnCurrency.format(num);
}