import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from "./ContactListItem.styled";

import { useDeleteContactMutation } from "redux/contacts/contactsApi";

interface IProps {
  name: string;
  phone: string;
  id: string;
}

export const ContactListItem: React.FC<IProps> = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{phone}</span>
      </ContactTextWrapper>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </ContactItem>
  );
};
