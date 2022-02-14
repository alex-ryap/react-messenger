import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { ContactEdit } from '../../components/ContactEdit';
import { Input } from '../../components/Input';
import { PageTitle } from '../../components/PageTittle';
import { Sidebar } from '../../components/Sidebar';
import { selectAllUsers, selectAllUsersId } from '../../store/Users/selectors';
import human2 from '../../img/human2.png';
import './style.scss';
import { addUserWithFb, initUsersTracking } from '../../store/Users/actions';
import { v4 as uuid } from 'uuid';

export const Contacts = () => {
  const contacts = useSelector(selectAllUsers);
  const contactsId = useSelector(selectAllUsersId);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(initUsersTracking());
  }, []);

  const handleAddContact = (e) => {
    e.preventDefault();

    const id = uuid();
    const newContact = {
      userId: id,
      avatar: human2,
      name: 'Bob',
      date: new Date().getTime(),
    };

    dispatch(addUserWithFb(newContact));
  };

  return (
    <>
      <Sidebar />
      <div className="contacts">
        <div className="contacts__wrapper">
          <div className="contacts__header">
            <PageTitle title="Contacts" subtitle="Your contacts list" />
            <Button
              title="New contact"
              icon="fa-plus"
              eventClick={handleAddContact}
            />
          </div>
          <div className="contacts__search">
            <Input placeholder="Search" icon="fa-search" />
          </div>
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
        {userId && contactsId.includes(userId) && (
          <ContactEdit contactId={userId} />
        )}
      </div>
    </>
  );
};
