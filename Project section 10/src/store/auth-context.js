import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')
        
        if (storedUserLoggedInInfo === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
            </AuthContext.Provider>
    );
}

export default AuthContext;

// const example = () => {
//     let a = 1;
//     return {
//         getA: () => (a),
//         incrementA: () => {a++}
//     }
// }

// export default example();

/*
<File First.js>
const A = 1;
const B = 2;

export default A;
export B;

<File Second.js>
import C from "./First" => imports A as C, so now on file Second.js you can call C and it will be 1;

alterantively you can:
import {B} from "./First" => imports B into Second.js and you can then call B which will be 2;

Lastly, if you have a non-default export which you want to change the name while importing, you can:
import {B as C} from "./First" => imports B as C, so now on file Second.js you can call C which will be 2

--------------------




*/