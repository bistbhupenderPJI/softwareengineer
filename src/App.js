import React, { useState, Fragment } from 'react'
import AddStartupForm from './forms/AddStartupForm'
import EditStartupForm from './forms/EditStartupForm'
import StartupTable from './tables/StartupTable'

const App = () => {
	// Data
	const startupsData = [
		{ id: 1, name: 'ABC', country: 'India' },
		{ id: 2, name: 'DEF', country: 'Singapore' },
		{ id: 3, name: 'HIJ', country: 'Malesia' },
	]

	const initialFormState = { id: null, name: '', country: '' }

	// Setting state
	const [ startups, setStartups ] = useState(startupsData)
	const [ currentStartup, setCurrentStartup ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addStartup = startup => {
		startup.id = startups.length + 1
		setStartups([ ...startups, startup ])
	}

	const deleteStartup = id => {
		setEditing(false)

		setStartups(startups.filter(startup => startup.id !== id))
	}

	const updateStartup = (id, updateStartup) => {
		setEditing(false)

		setStartups(startups.map(startup => (user.id === id ? updateStartup : user)))
	}

	const editRow = startup => {
		setEditing(true)

		setCurrentStartup({ id: startup.id, name: startup.name, country: startup.country })
	}

	return (
		<div className="container">
			<h1>Welcome to Start up World</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditStartupForm
								editing={editing}
								setEditing={setEditing}
								currentStartup={currentStartup}
								updateStartup={updateStartup}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>New Startup</h2>
							<AddStartupForm addStartup={addStartup} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>List of Starups</h2>
					<StartupTable startups={startups} editRow={editRow} deleteStartup={deleteStartup} />
				</div>
			</div>
		</div>
	)
}

export default App