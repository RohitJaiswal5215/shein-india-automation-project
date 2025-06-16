import CartPage from '../../pages/CartPage';

describe('Cart Test', () => {
  const cartPage = new CartPage();

  it('should add product to cart and validate', () => {
    cartPage.addToCart();
    cartPage.openCart();
    cartPage.validateCart();
  });
});



