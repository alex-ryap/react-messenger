import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/Users/actions';
import { selectUser } from '../../store/Users/selectors';
import { EditableField } from '../EditableField';
import { UserInfo } from '../UserInfo';
import './style.scss';

export const ContactEdit = ({ contactId }) => {
  const contact = useSelector(selectUser(contactId));
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(contactId));
  };

  return (
    <div className="contact-edit">
      <div className="contact-edit__wrapper">
        <div className="contact-edit__header">
          <UserInfo user={contact} direction="column" size={100} />
        </div>
        <div className="contact-edit__content">
          <EditableField title="Name" value={contact.name} />
        </div>
        <div className="contact-edit__actions">
          <button className="dialog__btn btn-success">Save</button>
          <button className="dialog__btn btn-close" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
