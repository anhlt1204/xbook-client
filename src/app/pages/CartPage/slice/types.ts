/* --- STATE --- */
export interface CartState {
  detailCart: { orderItems: OrderItem[]; total: number; totalPrice: number };

  addStatus: string;
  removeStatus: string;

  loadingPayment: boolean;
  paymentStatus: string;
}

interface OrderItem {
  id: number;
  quantity: number;
  product: Product;
}

interface Product {
  id: number;
  title: string;
  price: number;
  product_images: [{ imageUrl: string }];
  current_number: number;
}
