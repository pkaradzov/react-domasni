// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Address = ({user1, user2, user3, user4}) => {

    return (
        <div>
            {user1.adresa === "Skopje" && <p>Ime: {user1.ime} Prezime: {user1.prezime} Adresa: {user1.adresa} Godini: {user1.godini}</p>}
            {user2.adresa === "Skopje" && <p>Ime: {user2.ime} Prezime: {user2.prezime} Adresa: {user2.adresa} Godini: {user2.godini}</p>}
            {user3.adresa === "Skopje" && <p>Ime: {user3.ime} Prezime: {user3.prezime} Adresa: {user3.adresa} Godini: {user3.godini}</p>}
            {user4.adresa === "Skopje" && <p>Ime: {user4.ime} Prezime: {user4.prezime} Adresa: {user4.adresa} Godini: {user4.godini}</p>}
        </div>
    )
}