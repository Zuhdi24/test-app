import React from 'react';
import Link from 'next/link'; 

function Test({ users }) {
  return (
    <>
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}, {user.password}
          </li>
        ))}
      </ul>
    </div>
    <Link
    href={'/zuhdi'}>
      Ke halaman zuhdi
    </Link>
    </>
  );
}

export async function getStaticProps() {
//   const { params } = context;
//   const { id } = params;

  const res = await fetch(`http://localhost:3000/api/users`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Test;
