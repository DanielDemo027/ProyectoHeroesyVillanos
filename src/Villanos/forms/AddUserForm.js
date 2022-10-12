import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, nombrereal: '', nombredevillano: '', edad: '', afiliacion: '', descrripcion: ''}
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

 

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.nombrereal || !user.nombredevillano || !user.edad || !user.afiliacion || !user.descrripcion) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Nombre real</label>
      <input
        type="text"
        name="nombrereal"
        value={user.nombrereal}
        onChange={handleInputChange}
      />
      <label>Nombre de villano</label>
      <input
        type="text"
        name="nombredevillano"
        value={user.nombredevillano}
        onChange={handleInputChange}
      />
       <label>Edad</label>
      <input
        type="text"
        name="edad"
        value={user.edad}
        onChange={handleInputChange}
      />
       <label>Afiliacion</label>
       <select onChange={handleInputChange} value={user.afiliacion} name='afiliacion'>
            <option value='Marvel'>Marvel</option>
            <option value='DC'>Dc</option>
        </select>
    <label>Descrripcion</label>
    <textarea 
    name="descrripcion" 
    rows="10" 
    cols="50"
    value={user.descrripcion}
    onChange={handleInputChange}
    
    >Write something here</textarea>
  <br></br>
      <div className="container">
      <div className="flex-row">
      <div className="flex-large">

    <div>
    <button>Agregar</button>
      
    </div>
  
 
 
</div>
        <div className="flex-large">
        <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
          
        </div>
      </div>
    </div>
  
    </form>
  )
}

export default AddUserForm