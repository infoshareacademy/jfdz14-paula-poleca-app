import React, { Component } from 'react';
import {DATABASE_URL} from '..';
import firebase from 'firebase';
import AccountItem from './AccountItem';
import AccountItemEdit from './AccountItemEdit';
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { addAvatar } from '../state/reducer';
import '../styles/Account.css';

class Account extends Component {
    state = {
        user: null,
        uid: null,
        userData: null,
        editId: '',

        file: null,
        url: ''        
    }

    fetchData = () => {
        
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState(() => ({
                    user: user,
                }));
                this.setState(prevState => ({
                uid: prevState.user !== null ? prevState.user.uid : null,  
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
                    });
                    this.fetchAvatar();

                });                 
            }
   
        });        
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
    
    componentDidMount() {
        this.fetchData();
    }

    // componentWillUnmount() {
        // this.state.unsubscribe();        
    // }

    fetchAvatar = () => {

            firebase.storage().ref('avatars/' + this.state.uid)
            .getDownloadURL()
            .then(url => {
                this.setState({
                    url,
                }, () => {
                    this.props.addNewAvatar(this.state.url);
                }) 
            })           
    }

    handleOnChange = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            file: event.target.files[0]
        })
    }  

    handleSaveAvatar = () => {
        console.log('Send avatar');
        if(this.state.file) {
            firebase.storage().ref('avatars/' + this.state.uid)
                .put(this.state.file)
                .then(() => {
                    this.fetchAvatar();
                });            
        } else {
            console.log('Nie wybrane img');
        }     
    }

    render() { 
        return (
            <div className="AccountContainer">
                <h2>Konto &nbsp;

                </h2>
                {
                this.props.user 
                ?
                (
                <>
                    {
                    this.state.user 
                    ? - this.state.user.email 
                    : null
                    }                
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
                            // user={this.state.user}
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

                    <div>
                        <hr/>
                        <h2>Dodaj/Zmień swój avatar</h2>
                        <input type='file' onChange={this.handleOnChange}/>
                        <Button onClick={this.handleSaveAvatar}>Add</Button>
                        <div className="avatarDiv">
                            <img className="avatarImg" src={this.state.url} />     
                        </div> 
                        <br/> 
                    </div>                 
                    </>
                )
                : 
                (
                    <h4>Musisz być zalogowany aby mieć dostęp do opcji konta</h4>    
                )
                }


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {img: state};
}
const mapDispatchToProps = {
    addNewAvatar: addAvatar
}
export default connect(mapStateToProps, mapDispatchToProps)(Account);