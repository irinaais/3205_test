import './SearchForm.css';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IMaskInput } from 'react-imask';

function SearchForm(props) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangeNumber(evt) {
    setNumber(evt.target.value.replace(/[^0-9]/g, ''));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(email, number);
  }

  return (
    <section className='search-form__container page__section' >
      <h1 className='search-form__title'>Поиск пользователя</h1>
      <form className='search-form' onSubmit={ handleSubmit }>
        <input
          className='search-form__input'
          type='email'
          placeholder='Почта'
          required
          name='email'
          onChange={ handleChangeEmail }
        />
        <IMaskInput
          mask='00-00-00'
          className='search-form__input'
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
