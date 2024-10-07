import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  establishedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
