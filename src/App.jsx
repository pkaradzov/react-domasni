// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Address } from "./components/Address.jsx";
import { Age } from "./components/Age.jsx";

export function App(){

  let user1 = {ime: "ime1", prezime: "prezime1", adresa: "Skopje", godini: 8};
  let user2 = {ime: "ime2", prezime: "prezime2", adresa: "Prilep", godini: 10};
  let user3 = {ime: "ime3", prezime: "prezime3", adresa: "Veles", godini: 18};
  let user4 = {ime: "ime4", prezime: "prezime4", adresa: "Skopje", godini: 30};
  
  return (
    <div>
      <Age user1 = {user1} user2 = {user2} user3 = {user3} user4 = {user4}/>
      <hr />
      <Address user1 = {user1} user2 = {user2} user3 = {user3} user4 = {user4}/>
    </div>
  )
}