import './App.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import UserList from '../UserList/UserList';
import Preloader from '../Preloader/Preloader';
import * as Api from '../../utils/Api';

function App() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [usersFetched, setUsersFetched] = useState(false);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [searchFailed, setSearchFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchUsers(emailFromInput, numberFromInput) {
    setEmail(emailFromInput);
    setNumber(numberFromInput);
    setUsersFetched(true);
  }

  useEffect(() => {
    if (usersFetched) {
      setIsLoading(true);
      Api.getUsers(email, number)
        .then((res) => setFilteredUsersList(res))
        .catch((err) => {
          setSearchFailed(true);
          console.log(`Ошибка: ${err.status}`);
        })
        // Если отключить искусственную задержку на бэке, то раскомментировать эту строку
        // .finally(() => setTimeout(() => setIsLoading(false), 800));
        .finally(() => setIsLoading(false));
    }
  }, [email, number]);

  return (
    <main className='page'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <SearchForm onSubmit={ handleSearchUsers } />
          <UserList
            filteredUsersList={ filteredUsersList }
            usersFetched={ usersFetched }
            searchFailed = { searchFailed } />
        </>
      )}
    </main>
  );
}

export default App;
