import React from 'react'

const StartupTable = props => (
  <table>
    <thead>
      
    </thead>
    <tbody>
      {props.startups.length > 0 ? (
        props.startups.map(startup => (
          <tr key={startup.id}>
            <td>{startup.id}</td>
            <td>{startup.name}, {startup.country}</td>
            
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Startups</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default StartupTable