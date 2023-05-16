export const getDiscountPercentage = (price, originalPrice) => {
  if(originalPrice && originalPrice > price) {
    const discount = (originalPrice || 0) - price;
    return ((discount / originalPrice) * 100).toFixed(2);
  }
  return 0;
}