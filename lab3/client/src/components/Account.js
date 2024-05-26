import React, { useEffect } from 'react';
import './stylies/style.css';
import './stylies/style_article.css';
import Top from "./Top";

const Account = () => {
    useEffect(() => {
        const firstName = sessionStorage.getItem('first_name');
        const lastName = sessionStorage.getItem('last_name');
        const email = sessionStorage.getItem('email');

        if (firstName) {
            document.getElementById('first_name').textContent = firstName;
        }
        if (lastName) {
            document.getElementById('last_name').textContent = lastName;
        }
        if (email) {
            document.getElementById('email').textContent = email;
        }
    }, []);

    return (
        <div>
            <Top/>
            <main>
                <table>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td id="first_name">-</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td id="last_name">-</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td id="email">-</td>
                    </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Account;
