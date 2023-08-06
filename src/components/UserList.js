import classes from './UserList.module.css';
import Card from './Card';

const UserList = (props) => {
    return ( 
        <Card className={classes['list-wrapper']}>
            <ul  key={props.userDataList.key}>
                {props.userDataList.map(userData => (
                    <li>
                        <p>{userData.username}</p>
                        <p>{userData.age + " years old"}</p>
                    </li>
                ))}
            </ul>
        </Card>
     );
}
 
export default UserList;