import React,  { createContext, Component } from 'react';

export const MyContext = createContext();

class MyContextProvider extends Component {

    state = {
        isAuthorized : false
    }
    render() {
        return (
            <MyContext.Provider value={{...this.state, login:this.login}} >
                {this.props.children}
            </MyContext.Provider>
        );
    }

    login = () => {
        this.setState({isAuthorized : true});
    }
}


export default MyContextProvider;