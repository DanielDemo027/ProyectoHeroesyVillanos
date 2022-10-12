


import React, { useState } from 'react'
import UserTable from './tablas/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import "./index.css"

const Heroes = () => {
  const usersData = [
    { id: 1, nombrereal: ' Bruce Wayne', nombredevillano: 'Batman', edad: '38 años', afiliacion: 'DC', descrripcion: 'un personaje de ficción, perteneciente a DC Comics y el archienemigo de Batman, además de su antítesis. El Joker es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo.', archienemigo: 'Joker'},
    { id: 2, nombrereal: 'Thanos The Titan', nombredevillano: 'Thanos', edad: '1.000 años', afiliacion: 'Marvel', descrripcion: 'Thanos era el hijo de Mentor y su esposa Sui-San, y hermano del vengador Eros, alias Starfox. A diferencia de la mayor parte de su especie, Thanos portaba genes viciados, pertenecientes a la raza prima de los Titanes, los Desviantes. Debido a ello, su aspecto era simiesco y deforme.', archienemigo: 'Joker'},
    { id: 3, nombrereal: 'Uxas', nombredevillano: 'Darkseid', edad: '71', afiliacion: 'DC', descrripcion: 'Darkseid es gobernador del planeta Apokolips, rival de Nuevo Génesis, planeta que sirve de hogar para los Nuevos Dioses. Su nombre verdadero es Uxas y su maldad comienza a manifestarse ya durante su juventud, cuando asesina a los antiguos Dioses para hacerse con el poder de la Fuerza Omega.', archienemigo: 'Joker'},
  ]

  const initialFormState = { id: null, nombrereal: '', nombredevillano: '', edad: '', afiliacion: '', descrripcion: '', archienemigo: ''}

	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, nombrereal: user.nombrereal, nombredevillano: user.nombredevillano,  edad: user.edad, afiliacion: user.afiliacion,  descrripcion: user.descrripcion  })
  }
  

  const addUser = (user) => {

 
    user.id = users.length + 1
    setUsers([...users, user])
    
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  return (
    <div className="container-xxl">
      <h1>CRUD DE HEROES</h1>
      <div className="flex-row">
      <div className="flex-large">
  {editing ? (
    <div>
      <h2>Editar Heroes</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Agregar Heroes</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>Tabla de los Heroes</h2>
          <br></br> <br></br>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default Heroes