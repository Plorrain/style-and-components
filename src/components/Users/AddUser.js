import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(enteredUsername, enteredAge);
      if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: 'Invalid Input',
          message: 'Please enter name and age (non-empty values).'
        });
        return;
      };
      if (+enteredAge < 1) {
        setError({
          title: 'Invalid Age',
          message: 'Please enter a valid age (greater than 0 years old).'
        });
        return;
      };
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
            />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
            />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
    )
  }

export default AddUser;
