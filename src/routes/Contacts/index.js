import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { ContactEdit } from '../../components/ContactEdit';
import { Input } from '../../components/Input';
import { PageTitle } from '../../components/PageTittle';
import { Sidebar } from '../../components/Sidebar';
import { selectAllUsers, selectAllUsersId } from '../../store/Users/selectors';
import './style.scss';
import { addUserWithFb, initUsersTracking } from '../../store/Users/actions';
import { CreateContactDialog } from '../../components/CreateContactDialog';

export const Contacts = () => {
  const contacts = useSelector(selectAllUsers);
  const contactsId = useSelector(selectAllUsersId);

  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    dispatch(initUsersTracking());
  }, []);

  const openDialog = useCallback(() => {
    setShowDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setShowDialog(false);
  }, []);

  const createContact = (newContact) => {
    dispatch(addUserWithFb(newContact));
  };

  return (
    <>
      <Sidebar />
      <div className="contacts">
        {showDialog && (
          <CreateContactDialog save={createContact} close={closeDialog} />
        )}
        <div className="contacts__wrapper">
          <div className="contacts__header">
            <PageTitle title="Contacts" subtitle="Your contacts list" />
            <Button
              title="New contact"
              icon="fa-plus"
              eventClick={openDialog}
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
