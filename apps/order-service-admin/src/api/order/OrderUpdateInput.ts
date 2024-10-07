export type OrderUpdateInput = {
  customer?: string | null;
  orderDate?: Date | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
