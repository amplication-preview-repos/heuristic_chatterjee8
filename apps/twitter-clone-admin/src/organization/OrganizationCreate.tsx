import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="establishedDate" source="establishedDate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
