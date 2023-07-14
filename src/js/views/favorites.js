// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../store/appContext';

// const Favorite = () => {
//   const { store, actions } = useContext(Context);

//   const handleRemoveFavorite = (person) => {
//     const confirmed = window.confirm('¿Estás seguro de que deseas eliminar a esta persona de favoritos?');
//     if (confirmed) {
//       actions.removeFavorite(person);
//     }
//   };

//   return (
//     <>
//       <div className='container mt-4'>
//         <Link to='/'>
//           <button className='btn btn-lg' style={{ backgroundColor: '#ff914d' }}>
//             Volver Atrás
//           </button>
//         </Link>
//         <div className='row g-4 pt-4'>
//           {store.favorites.map((fav) => (
//             <div key={fav.uid} className='col-12 col-md-6 col-lg-4'>
//               <div className='card border border-1 shadow-sm' style={{ background: 'transparent' }}>
//                 <div className='text-center'>
//                   <img src={fav.image} className='img-fluid' alt={fav.name} />
//                 </div>
//                 <div className='card-body d-flex justify-content-between'>
//                   <div>
//                     <h2 className='card-title' style={{ color: '#ff914d' }}>
//                       {fav.name}
//                     </h2>
//                     <p className='card-text'>
//                       <i className='fa-solid fa-house fa-lg fa-fw me-2' style={{ color: '#ff914d' }} />
//                       {fav.asociacion_nombre}
//                     </p>
//                     <p className='card-text'>
//                       <i className='fa-solid fa-location-dot fa-lg fa-fw me-1' style={{ color: '#ff914d' }} />{' '}
//                       {fav.asociacion_provincia}
//                     </p>
//                   </div>
//                   <div className='d-flex align-items-end'>
//                     <button
//                       className='btn btn-lg'
//                       style={{ backgroundColor: '#a96d60', color: 'white' }}
//                       onClick={() => handleRemoveFavorite(fav)}
//                     >
//                       <i className='fa-solid fa-trash'></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Favorite;
