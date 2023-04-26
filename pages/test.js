// // import { useState, useEffect } from 'react';
// import useSWR from 'swr'

// import Link from 'next/link'; 


// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// function Test() {
//   const { data, error } = useSWR('/api/users', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <>
//         <div>
//           <h1>Users</h1>
//           <ul>
//             {data != null ? data.map(user => (
//               <li key={user.id}>
//                 {user.username}, {user.password}
//               </li>
//             )) : <li>loading...</li>}
//           </ul>
//         </div>
//         <Link
//         href={'/zuhdi'}>
//           Ke halaman zuhdi
//         </Link>
//         </>
//   )
// }
// // function Test() {
// //   const [data, setData] = useState(null)
// //   const [isLoading, setLoading] = useState(false)

// //   useEffect(() => {
// //     setLoading(true)
// //     fetch('/api/')
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setData(data)
// //         setLoading(false)
// //       })
// //   }, [])

// //   if (isLoading) return <p>Loading...</p>
// //   if (!data) return <p>No profile data</p>

// //   return (
// //     <>
// //     <div>
// //       <h1>Users</h1>
// //       <ul>
// //         {/* {data != null ? data.map(user => (
// //           <li key={user.id}>
// //             {user.username}, {user.password}
// //           </li>
// //         )) : <li>loading...</li>} */}
// //       </ul>
// //     </div>
// //     <Link
// //     href={'/zuhdi'}>
// //       Ke halaman zuhdi
// //     </Link>
// //     </>
// //   );
// // }

// // function Test() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       const res = await fetch('/api/users');
// //       const data = await res.json();
// //       setData(data);
// //     }
// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //     <div>
// //       <h1>Users</h1>
// //       <ul>
// //         {data != null ? data.map(user => (
// //           <li key={user.id}>
// //             {user.username}, {user.password}
// //           </li>
// //         )) : <li>loading...</li>}
// //       </ul>
// //     </div>
// //     <Link
// //     href={'/zuhdi'}>
// //       Ke halaman zuhdi
// //     </Link>
// //     </>
// //   );
// // }


// export default Test();
