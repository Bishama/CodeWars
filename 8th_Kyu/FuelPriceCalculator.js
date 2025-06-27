function fuelPrice(litres, pricePerLitre) {
  // Calculate discount: 5 cents per litre for every 2 litres, capped at 25 cents
  const discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  const finalPrice = litres * (pricePerLitre - discount);
  return Number(finalPrice.toFixed(2));
}
