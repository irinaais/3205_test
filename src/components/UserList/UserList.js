import './UserList.css';
import User from '../User/User';

function UserList(props) {
  return (
    <section className='user-list page__section'>
      <>
        {props.filteredUsersList != null
          && props.usersFetched && props.filteredUsersList.length === 0 && <h2 className="user-list__title">Пользователи не найдены</h2>}
        {props.searchFailed
          && <h2 className="user-list__title">
            Во время запроса произошла ошибка. Возможно,
            проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </h2>}
        <ul className='user-list__list'>
          {props.filteredUsersList != null
            && props.usersFetched && props.filteredUsersList.length > 0
            && <>
              <h2 className="user-list__title">Результаты поиска:</h2>
              {props.filteredUsersList.map((user, index) => <User key={ index } user={ user } />)}
            </>
          }
        </ul>
      </>
    </section>
  );
}

export default UserList;
