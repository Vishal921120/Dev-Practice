import React from "react";

const UserContext = React.createContext("Jai shree Ram"); // here jai shree ram is default value 
// when there is no userprovider above the component then this value will be given to the userconsumer

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}