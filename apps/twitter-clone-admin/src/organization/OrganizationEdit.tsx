import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="establishedDate" source="establishedDate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
