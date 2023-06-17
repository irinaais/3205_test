import './User.css';

function User(props) {
  return (
    <li className='user'>
      <p className='user__info'>{props.user.email} - {props.user.number} </p>
    </li>
  );
}

export default User;
