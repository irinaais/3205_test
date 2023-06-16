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
  const [usersFetched, setUsersFetched] = useState(false);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [searchFailed, setSearchFailed] = useState(false);

  function handleSearchUsers(emailFromInput, numberFromInput) {
    setEmail(emailFromInput);
    setNumber(numberFromInput);
    setUsersFetched(true);
  }

  useEffect(() => {
    if (usersFetched) {
      const filteredUsers = usersList.find((user) => user.email === email);

      if (filteredUsers == null) {
        setFilteredUsersList([]);
      } else {
        setFilteredUsersList(filteredUsers);
      }
      // TODO добавить поиск по number
      // filteredUsers = filteredUsers.find((user) => user.number === number);
      // setFilteredUsersList(filteredUsers);
    }
  }, [email, number]);

  return (
    <main className='page'>
       <SearchForm onSubmit={ handleSearchUsers } />
       <UserList
         filteredUsersList={ filteredUsersList }
         usersFetched={ usersFetched }
         searchFailed = { searchFailed } />
    </main>
  );
}

export default App;
