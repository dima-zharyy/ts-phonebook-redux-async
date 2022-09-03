import { TContacts } from "redux/contacts/contactsApi";

export const isContactInList = (
  contacts: TContacts,
  newName: string
): boolean => {
  return contacts.some(
    ({ name }) => name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  );
};
