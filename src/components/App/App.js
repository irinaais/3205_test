import './App.css';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import UserList from '../UserList/UserList';
import Preloader from '../Preloader/Preloader';
import * as Api from '../../utils/Api';

function App() {
  const [usersFetched, setUsersFetched] = useState(false);
  const [filteredUsersList, setFilteredUsersList] = useState([]);
  const [searchFailed, setSearchFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchUsers(emailFromInput, numberFromInput) {
    setIsLoading(true);
    Api.getUsers(emailFromInput, numberFromInput)
      .then((res) => setFilteredUsersList(res))
      .catch((err) => {
        setSearchFailed(true);
        console.log(`Ошибка: ${err.status}`);
      })
      // Если отключить искусственную задержку на бэке, то раскомментировать эту строку
      // .finally(() => setTimeout(() => setIsLoading(false), 800));
      .finally(() => {
        setIsLoading(false);
        setUsersFetched(true);
      });
  }

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
