import './UserList.css';

function UserList(props) {
  return (
    <section className='user-list page__section'>
      <>
        {props.usersFetched && props.filteredUsersList.length === 0 && <h2 className="user-list__title">Пользователи не найдены</h2>}
        {props.searchFailed
          && <h2 className="movies-card-list__message">
            Во время запроса произошла ошибка. Возможно,
            проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </h2>}
      </>
    </section>
  );
}

export default UserList;
