import React from 'react';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
const look = [
    {
        a: '123',
        b: "hello"
    },
    {
        a: '456',
        b: "my"
    },
    {
        a: '789',
        b: "friend"
    }
];
function MyApp() {
    return (
        <div>
            <Header name={look} />
            <RegistrationForm />
        </div>
    )
}
export default MyApp;