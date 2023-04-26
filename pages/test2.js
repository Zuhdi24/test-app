// import { useState, useEffect } from 'react';
import useSWR from 'swr'

import Link from 'next/link'; 

export default function Test2(props){
    const users = props.users; // data yang diimpor dari file JSON
    return (
        <ul>
            {users != null ? users.map(user => (
              <li key={user.id}>
                {user.username}, {user.password}
              </li>
            )) : <li>loading...</li>}
          </ul>
    )
};

export async function getStaticProps(context) {
    const users = await import('./api/users.json');
    return {
      props: {
        users: users.default
      }
    }
  }