import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeUser,
  deleteUserWithFb,
  updateUserWithFb,
} from '../../store/Users/actions';
import { selectUser } from '../../store/Users/selectors';
import { EditableField } from '../EditableField';
import { UserInfo } from '../UserInfo';
import './style.scss';

export const ContactEdit = ({ contactId }) => {
  const contact = useSelector(selectUser(contactId));
  const [name, setName] = useState(contact?.name);
  const dispatch = useDispatch();

  const handlerDelete = () => {
    dispatch(deleteUserWithFb(contactId));
  };

  const handlerSave = () => {
    const changedUser = {
      ...contact,
      name: name,
    };

    dispatch(updateUserWithFb(changedUser));
  };

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="contact-edit">
      <div className="contact-edit__wrapper">
        <div className="contact-edit__header">
          <UserInfo user={contact} direction="column" size={100} />
        </div>
        <div className="contact-edit__content">
          <EditableField
            title="Name"
            value={name}
            onChange={handlerChangeName}
          />
        </div>
        <div className="contact-edit__actions">
          <button className="dialog__btn btn-success" onClick={handlerSave}>
            Save
          </button>
          <button className="dialog__btn btn-close" onClick={handlerDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
