import React, { useState, useEffect,  Fragment } from 'react'
import AddStartupForm from './forms/AddStartupForm'
import EditStartupForm from './forms/EditStartupForm'
import StartupTable from './tables/StartupTable'

import axios from 'axios'

const App = () => {
	const initialFormState = { id: null, name: '', country: '' }

	// Setting state
	const [ startups, setStartups ] = useState([])
	const [ currentStartup, setCurrentStartup ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  useEffect(async () => {
    const result = await axios(
      'https://bb-se.bhupenderbist.repl.co/startups/all',
    );
    setStartups(result.data);
  }, []);


	// CRUD operations
	const addStartup = startup => {
		//startup.id = startups.length + 1
    axios.post('https://bb-se.bhupenderbist.repl.co/startups/create', startup)
        .then((result) => {
          //setShowLoading(false);
          //props.history.push('/show/' + result.data._id)
        }).catch((error) => console.log(error));

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