import './App.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import UserList from '../UserList/UserList';
import * as Api from '../../utils/Api';

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
      Api.getUsers(email, number)
        .then((res) => setFilteredUsersList(res))
        .catch((err) => {
          setSearchFailed(true);
          console.log(`Ошибка: ${err.status}`);
        });
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
