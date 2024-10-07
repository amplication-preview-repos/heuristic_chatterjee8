import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  productName?: string | null;
  quantity?: number | null;
};
