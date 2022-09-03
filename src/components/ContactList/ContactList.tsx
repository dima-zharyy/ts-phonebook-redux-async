import { ContactListItem } from "components";
import { Loader } from "components/Loader/Loader";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import { getFilter } from "redux/filter/filterSlice";
import { useAppSelector } from "redux/hooks";

export const ContactList: React.FC = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useAppSelector(getFilter);
  const filteredContacts = !isLoading
    ? contacts?.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : null;

  if (isLoading) {
    return <Loader />;
  }

  if (!contacts) {
    return <p>Your contact book is empty</p>;
  }

  return contacts.length > 0 ? (
    <ul>
      {filteredContacts?.map(({ id, name, phone }) => {
        return <ContactListItem key={id} name={name} phone={phone} id={id} />;
      })}
    </ul>
  ) : (
    <p>Your contact book is empty</p>
  );
};
