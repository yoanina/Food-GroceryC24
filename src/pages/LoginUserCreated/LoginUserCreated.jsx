import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AccountCircle, Lock, SupervisorAccount } from '@mui/icons-material';
import { DriveEta } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

const LoginUserCreated = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', rol: '', nombre: '', correo: '', pass: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // getUsers();
  }, []);

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get('http://52.20.145.207:3000/api/users');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const addUser = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post('http://52.20.145.207:3000/api/user', newUser);
        // getUsers();
        setNewUser({ id: '', rol: '', nombre: '', correo: '', pass: '' });
        setError('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    if (!newUser.id || !newUser.rol || !newUser.nombre || !newUser.correo || !newUser.pass) {
      setError('Por favor, completa todos los campos');
      return false;
    }
    return true;
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://52.20.145.207:3000/api/user/${userId}`);
      // getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <><h2 className='w-full h-full  flex justify-center' style={{marginTop:40, fontSize:19, marginBottom:39}}>Nos alegra tenerte de vuelta!</h2>
    <div className='container ' style={{ backgroundColor: "rgba(10, 150, 160, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", marginLeft:'27%',padding:55, marginBottom:65 , width:700, borderRadius:10}}>
      
      {/* <h1>Usuarios</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.nombre} - {user.correo}
          <button onClick={() => deleteUser(user.id)}>Eliminar</button>
        </li>
      ))}
    </ul> */}


      <form onSubmit={addUser} >
        
        {/* <div style={{marginBottom:5}}>
        <DriveEta style={{ marginRight: 10 }} />
        <input
          type="text"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })} 
          style={{borderRadius:5, width:250, height:35}}/>
          </div>
          <div style={{marginBottom:5}}>
          <SupervisorAccount style={{ marginRight: 10 }} />
        <input
          type="text"
          placeholder="Rol"
          value={newUser.rol}
          onChange={(e) => setNewUser({ ...newUser, rol: e.target.value })}
          style={{borderRadius:5, width:250, height:35}} />
          </div>
          <div style={{marginBottom:5}}>
          <AccountCircle style={{ marginRight: 10 }} />
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.nombre}
          onChange={(e) => setNewUser({ ...newUser, nombre: e.target.value })} 
          style={{borderRadius:5, width:250, height:35}}/>
          </div> */}
          <div style={{marginBottom:15}}>
          <Email style={{ marginRight: 10 }} />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={newUser.correo}
          onChange={(e) => setNewUser({ ...newUser, correo: e.target.value })}
          style={{borderRadius:5, width:250, height:35}} />
          </div>
          <div style={{marginBottom:15}}>
          <Lock style={{ marginRight: 10 }} />
        <input
          type="password"
          placeholder="Contraseña"
          value={newUser.pass}
          onChange={(e) => setNewUser({ ...newUser, pass: e.target.value })} 
          style={{borderRadius:5, width:250, height:35}}/>
          </div>
          
        <button type="submit" className='w-full h-full  flex justify-center' style={{marginTop:25, fontSize:19,backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius:5, height:30}} >Ingresar</button>
        
      </form>
      {error && <p>{error}</p>}
    </div></>
  );
};

export default LoginUserCreated;
