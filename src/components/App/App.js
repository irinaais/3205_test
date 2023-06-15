import './App.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import UserList from '../UserList/UserList';

const usersList = [{
  email: 'jim@gmail.com',
  number: '221122',
}, {
  email: 'jam@gmail.com',
  number: '830347',
}, {
  email: 'john@gmail.com',
  number: '221122',
}, {
  email: 'jams@gmail.com',
  number: '349425',
}, {
  email: 'jams@gmail.com',
  number: '141424',
}, {
  email: 'jill@gmail.com',
  number: '822287',
}, {
  email: 'jill@gmail.com',
  number: '822286',
}];

function App() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function handleSearchUser(emailFromInput, numberFromInput) {
    setEmail(emailFromInput);
    setNumber(numberFromInput);
  }

  useEffect(() => {
    console.log(email, number);
  }, [email, number]);

  return (
    <main className='page'>
      <SearchForm onSubmit={ handleSearchUser }/>
      <UserList />
    </main>
  );
}

export default App;
