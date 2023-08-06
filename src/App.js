import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';
import { useState, Fragment } from 'react';

function App() {
  const [userData, setUserData] = useState([]);

  const getDataHandler = userInput => {
    setUserData(prevState => {
      return [...prevState, userInput];
    });
  }

  return (
    <Fragment className="App">
        <UserInput onGetData={getDataHandler}/>
        {!userData && <p>No Users Found</p>}
        {userData && <UserList userDataList={userData} key={Math.random().toString()}/>}
    </Fragment>
  ); 
}

export default App;
