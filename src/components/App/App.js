import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import UserList from '../UserList/UserList';

function App() {
  return (
    <main className='page'>
      <SearchForm />
      <UserList />
    </main>
  );
}

export default App;
