import React, { useState, useEffect } from 'react'

const EditStartupForm = props => {
  const [ startup, setUser ] = useState(props.currentStartup)

  useEffect(
    () => {
      setUser(props.currentStartup)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...startup, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateStartup(startup.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={startup.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="country" value={startup.country} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditStartupForm