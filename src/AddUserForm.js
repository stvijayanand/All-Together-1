import React, {Component} from "react"
import ErrorMessage from "./ErrorMessage";

class AddUserForm extends Component{

    state = {
        firstName: '',
        lastName: '',
        username: '',
        isError: false
    }

    handleInputChange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const {users} = this.props;
        if(name === 'username'){
            this.setState({
                isError: false        
            });

            const usersMatched = users.filter(user => user.username === value);
            if(usersMatched.length > 0){
                this.setState({
                    isError: true        
                });
                return;
            }
        }

        this.setState({
            [name]: value
        });
    }

    onAddUser = (event) => {
        event.preventDefault();

        const {users, onAdd} = this.props;
        const {firstName, lastName, username, } = this.state;
        const usersMatched = users.filter(user => user.username === username);

        this.setState({
            isError: false        
        });
        if(usersMatched.length > 0){
            this.setState({
                isError: true        
            });
            return;
        }

        const user = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            games: 0
        }

        onAdd(user);
    }

    render() {
        const {firstName, lastName, username, isError} = this.state;

        const duplicateMessage = " already exists."


        return (<div><form onSubmit={this.onAddUser}>
            <input
                name="firstName"
                type="text"
                placeholder="Enter Last Name"
                value={firstName}
                onChange={this.handleInputChange}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Enter First Name"
                value={lastName}
                onChange={this.handleInputChange}
            />
            <input
                name="username"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.handleInputChange}
            />
            <button className="ActionButton">Add</button>
            <br></br>
            <ErrorMessage show={isError}
                          message={duplicateMessage}
                          username={username}></ErrorMessage>
        </form></div>);
    }
}

export default AddUserForm