import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
