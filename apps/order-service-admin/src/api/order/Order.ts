import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  customer: string | null;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
