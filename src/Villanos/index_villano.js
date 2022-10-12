


import React, { useState } from 'react'
import UserTable from './tablas/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import "./index.css"

const App = () => {
  const usersData = [
    { id: 1, nombrereal: ' Jack Oswald White', nombredevillano: 'Joker', edad: '80 años', afiliacion: 'DC', descrripcion: 'un personaje de ficción, perteneciente a DC Comics y el archienemigo de Batman, además de su antítesis. El Joker es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo.'  },
    { id: 2, nombrereal: 'Thanos The Titan', nombredevillano: 'Thanos', edad: '1.000 años', afiliacion: 'Marvel', descrripcion: 'Thanos era el hijo de Mentor y su esposa Sui-San, y hermano del vengador Eros, alias Starfox. A diferencia de la mayor parte de su especie, Thanos portaba genes viciados, pertenecientes a la raza prima de los Titanes, los Desviantes. Debido a ello, su aspecto era simiesco y deforme.'  },
    { id: 3, nombrereal: 'Uxas', nombredevillano: 'Darkseid', edad: '71', afiliacion: 'DC', descrripcion: 'Darkseid es gobernador del planeta Apokolips, rival de Nuevo Génesis, planeta que sirve de hogar para los Nuevos Dioses. Su nombre verdadero es Uxas y su maldad comienza a manifestarse ya durante su juventud, cuando asesina a los antiguos Dioses para hacerse con el poder de la Fuerza Omega.'  },
  ]

  const initialFormState = { id: null, nombrereal: '', nombredevillano: '', edad: '', afiliacion: '', descrripcion: ''}

	
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
    <div className="container">
      <h1>CRUD DE VILLANOS</h1>
      <div className="flex-row">
      <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit Villanos</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Agregar Villanos</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>Tabla de los villanos</h2>
          <br></br> <br></br>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App