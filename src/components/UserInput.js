import {useRef, useState} from 'react';
import classes from './UserInput.module.css';
import PrimaryButton from './PrimaryButton';
import Card from './Card';
import ErrorModal from './ErrorModal';

const UserInput = (props) => {
    const usernameInput = useRef();
    const ageInput = useRef();
    const [error, setError] = useState();

    const modalDismissHandler = () => {
        setError(null);
    }

    const submitHandler = e => {
        e.preventDefault();

        const username = usernameInput.current.value;
        const age = ageInput.current.value;

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                content: "Please enter a valid inputs (username and age cannot be empty)",
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid Age",
                content: "Please enter a valid age",
            });
            return;
        }

        const userInput = {
            username: username,
            age: age,
        }

        props.onGetData(userInput);

        usernameInput.current.value = '';
        ageInput.current.value = '';
    }

    return ( 
        <div>
            {error && <ErrorModal title={error.title} content={error.content} onConfirm={modalDismissHandler}></ErrorModal>}
            <Card className={classes['form-wrapper']}>
                <h1>Add User</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="uname">Username</label>
                    <input type="text" ref={usernameInput} id="uname"/>

                    <label htmlFor="age">Age</label>
                    <input type="number" ref={ageInput} id="age"/>

                    <PrimaryButton type="submit">Add User</PrimaryButton>
                </form>
            </Card>
        </div>
     );
}
 
export default UserInput;