import { useState } from 'react';
import { Dialog } from '../Dialog';
import { AVATAR } from '../../utils/constants';
import { EditableField } from '../EditableField';
import { v4 as uuid } from 'uuid';

export const CreateContactDialog = ({ save, close }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState(false);

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handlerSave = () => {
    if (!name) {
      setError(true);
      return;
    }

    setError(false);
    const newUser = {
      userId: uuid(),
      avatar: AVATAR,
      name: name,
      surname: surname,
      fullname: `${name} ${surname}`,
      date: new Date().getTime(),
    };
    save(newUser);
    close();
  };

  return (
    <Dialog title="Add new contact" save={handlerSave} close={close}>
      <EditableField title="Name" value={name} onChange={handlerChangeName} />
      <EditableField
        title="Surname"
        value={surname}
        onChange={handlerChangeSurname}
      />
      <p
        className="dialog__error"
        style={error ? { opacity: 1 } : { opacity: 0 }}
      >
        Please, enter required field <b>Name</b>
      </p>
    </Dialog>
  );
};
