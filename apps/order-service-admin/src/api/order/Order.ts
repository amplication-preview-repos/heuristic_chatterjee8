export type Order = {
  createdAt: Date;
  customer: string | null;
  id: string;
  orderDate: Date | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
