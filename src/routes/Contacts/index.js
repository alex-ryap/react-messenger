import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { ContactEdit } from '../../components/ContactEdit';
import { PageTitle } from '../../components/PageTittle';
import { SearchInput } from '../../components/SearchInput';
import { selectAllUsers, selectAllUsersId } from '../../store/Users/selectors';
import './style.scss';

export const Contacts = () => {
  const contacts = useSelector(selectAllUsers);
  const contactsId = useSelector(selectAllUsersId);
  const { userId } = useParams();

  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__header">
          <PageTitle title="Contacts" subtitle="Your contacts list" />
          <Button
            title="New contact"
            icon="fa-plus"
            eventClick={() => {
              console.log('ok');
            }}
          />
        </div>
        <SearchInput />
        <div className="contacts__content">
          {contacts.length === 0 && (
            <p className="contacts__empty">No contacts</p>
          )}
          <ul className="contacts__list">
            {contacts.map((contact) => (
              <Contact contact={contact} key={contact.userId} />
            ))}
          </ul>
        </div>
      </div>
      {userId && contactsId.includes(+userId) && (
        <ContactEdit contactId={+userId} />
      )}
    </div>
  );
};
