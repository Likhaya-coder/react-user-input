import Card from "./Card";
import classes from './ErrorModal.module.css';
import PrimaryButton from "./PrimaryButton";

const ErrorModal = (props) => {
    return ( 
        <div className={classes.backdrop} onClick={props.onConfirm}>
            <Card className={classes.modal}>
                <header className={classes.title}>
                    <h3>{props.title}</h3>
                </header>
                <div className={classes.content}>
                    <p>{props.content}</p>
                </div>
                <footer className={classes.actions}>
                    <PrimaryButton onClick={props.onConfirm}>Okay</PrimaryButton>
                </footer>
            </Card>
        </div>
     );
}
 
export default ErrorModal;