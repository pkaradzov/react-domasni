// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Age = ({user1, user2, user3, user4}) => {
    
    return (<div>
        <p>Ime: {user1.ime} Prezime: {user1.prezime} Adresa: {user1.adresa} Godini: {user1.godini < 18 ? "Less than 18" : user1.godini}</p>
        <p>Ime: {user2.ime} Prezime: {user2.prezime} Adresa: {user2.adresa} Godini: {user2.godini < 18 ? "Less than 18" : user2.godini}</p>
        <p>Ime: {user3.ime} Prezime: {user3.prezime} Adresa: {user3.adresa} Godini: {user3.godini < 18 ? "Less than 18" : user3.godini}</p>
        <p>Ime: {user4.ime} Prezime: {user4.prezime} Adresa: {user4.adresa} Godini: {user4.godini < 18 ? "Less than 18" : user4.godini}</p>
    </div>)
}