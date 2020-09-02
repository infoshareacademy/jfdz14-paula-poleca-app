import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
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
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
              user: user,
              uid: user.uid,
            }, () => {
                fetch(`${DATABASE_URL}/Users.json`)
                .then(response => response.json())
                .then(dataUsers => {
                    console.log(dataUsers);
                    const dataUsersTab = dataUsers
                    ?
                    Object.keys(dataUsers).map(key => ({ ...dataUsers[key], id: key}))
                    : [{name: 'brak', surname: 'brak', city: 'brak', id: this.state.uid}];
                    console.log(dataUsersTab);

                    const DataUser = dataUsersTab.find(data => {
                        if(data.id === this.state.uid) {
                            return data;
                        }
                    })
                    console.log(DataUser);
                    this.setState({
                        userData: DataUser,
                    })

                });                   
            })
        });        
    }

    componentDidMount() {
        this.fetchData();
    }

    handleEdit = () => {
        this.setState({editId: true});
    }
    handleSave = () => {
        console.log('handleSave');
        this.fetchData();
        this.handleClose();
    }
    handleClose = () => {
        this.setState({editId: false});
    }

    render() { 
        return (
            <div>
                {/* {console.log('user ', this.state.user)} */}
                {/* {console.log('user ', this.state.uid)} */}
                {/* {console.log('user email ', this.state.user.email)} */}
                {/* <h2>Konto - {this.state.user.email !== null ? this.state.user.email : null }</h2> */}
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