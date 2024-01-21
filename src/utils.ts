export function formatPrice(
  price: number | Record<string, number | undefined>,
) {
  if (typeof price === "number") {
    price = price / 100;
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  const prices = Object.entries(price).map(([key, value]) => {
    if (!value) return "";
    value = value / 100;
    const priceUSD = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    key = key.replace("_", " ");

    return key + ": " + priceUSD;
  });

  return prices.join(" | ");
}
