import React, { useState } from 'react'

const AddStartupForm = props => {
	const initialFormState = { id: null, name: '', country: '' }
	const [ startup, setStartup ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setStartup({ ...startup, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!startup.name || !startup.country) return

				props.addStartup(startup)
				setStartup(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={startup.name} onChange={handleInputChange} />
			<label>Country</label>
			<input type="text" name="country" value={startup.country} onChange={handleInputChange} />
			<button>Create New</button>
		</form>
	)
}

export default AddStartupForm