
import './App.css';
import { useState } from 'react';

// export  function MyApp() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <h1>Juntos</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </>
//   );

//   function MyButton({ count, onClick }) {
//     return (
//       <button onClick={onClick}>
//         Hiciste clic {count} veces
//       </button>
//     );
//   }
  
// }





// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Foto de ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// export function Lista() {
//   const products = [
//     { title: 'Col', isFruit: false, id: 1 },
//     { title: 'Ajo', isFruit: false, id: 2 },
//     { title: 'Manzana', isFruit: true, id: 3 },
//   ];

//   const listItems = products.map(product =>
//     <li key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//       >
//       {product.title}
//     </li>
//   );
  
//   return (
//     <ul>{listItems}</ul>
//   );
// }


function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
      setValue('X');
  }
  return <button
    className="square"
    onClick={handleClick}>{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

