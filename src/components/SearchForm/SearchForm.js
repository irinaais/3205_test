import './SearchForm.css';
import { useState } from 'react';

function SearchForm(props) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangeNumber(evt) {
    setNumber(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(email, number);
  }

  return (
    <section className='search-form__container page__section' >
      <form className='search-form' onSubmit={ handleSubmit }>
        <input
          className='search-form__input'
          type='email'
          placeholder='Почта'
          required
          name='email'
          onChange={ handleChangeEmail }
        />
        <input
          className='search-form__input'
          type='number'
          placeholder='Номер'
          name='number'
          onChange={ handleChangeNumber }
          />
        <button className="search-form__button" type="submit" aria-label="Найти пользователя"/>
      </form>
    </section>
  );
}

export default SearchForm;
