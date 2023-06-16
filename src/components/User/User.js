import './User.css';

function User(props) {
  return (
    <li className='user'>
      <p className='user__email'>{props.user.email} - {props.user.number} </p>
    </li>
  );
}

export default User;
