import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: StringNullableFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
