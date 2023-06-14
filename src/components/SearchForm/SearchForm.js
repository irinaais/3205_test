import './SearchForm.css';

function SearchForm() {
  return (
    <main className='search-form__container'>
      <form className='search-form'>
        <input
          className='search-form__input'
          type='email'
          placeholder='Почта'
          required
          name='email'
        />
        <input
          className='search-form__input'
          type='number'
          placeholder='Номер'
          name='number'
          />
        <button className="search-form__button" type="submit" aria-label="Найти пользователя"/>
      </form>
    </main>
  );
}

export default SearchForm;
