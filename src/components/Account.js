import React, { Component } from 'react';
import {DATABASE_URL} from '..';
import firebase from 'firebase';
import AccountItem from './AccountItem';
import AccountItemEdit from './AccountItemEdit';

class Account extends Component {
    state = {
        user: null,
        uid: null,
        userData: null,
        editId: '',
    }

    fetchData = () => {
        // firebase.auth().onAuthStateChanged(user => {
            if(this.props.user) {
            const user = this.props.user;
            this.setState(() => ({
                user: user,
            }));
            this.setState(prevState => ({
              uid: prevState.user.uid,  
            }));

            fetch(`${DATABASE_URL}/Users.json`)
            .then(response => response.json())
            .then(dataUsers => {
                const dataUsersTab = dataUsers
                ?
                Object.keys(dataUsers).map(key => ({ ...dataUsers[key], id: key}))
                : [];

                const DataUser = dataUsersTab.find(data => {
                    if(data.id === this.state.uid) {
                        return data;
                    }
                })
                this.setState({
                    userData: DataUser,
                })
            });                  
            }    
        // });        
    }

    componentDidMount() {
        this.fetchData();
    }

    handleEdit = () => {
        this.setState({editId: true});
    }
    handleSave = () => {
        this.fetchData();
        this.handleClose();
    }
    handleClose = () => {
        this.setState({editId: false});
    }

    // componentWillUnmount() {
        // this.state.unsubscribe();        
    // }

    render() { 
        return (
            <div>
                <h2>Konto - &nbsp;
                    {
                    this.state.user 
                    ? this.state.user.email 
                    : null
                    }
                </h2>
                <br/>

                {
                this.state.userData ?
                <>
                    {this.state.editId
                    ?
                    (
                    <AccountItemEdit 
                        name={this.state.userData.name}
                        surname={this.state.userData.surname}
                        city={this.state.userData.city}
                        onSave={this.handleSave}
                        onClose={this.handleClose}
                        user={this.state.user}
                    />
                    )
                    : 
                    (
                    <AccountItem 
                        name={this.state.userData.name}
                        surname={this.state.userData.surname}
                        city={this.state.userData.city}
                        onEdit={this.handleEdit}
                    />
                    )
                    }

                </>
                : 
                <>
                    <h4>Brak danych</h4> 
                </>
                }

            </div>
        );
    }
}
 
export default Account;