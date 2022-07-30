import React from 'react'

export const Table = ({ users }) => {
    return (
        <>

            <h1>Search Table</h1>
            <hr />


            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>

                    {users.map((item) => (
                        <tr key={item.id}>
                            <th>{item.first_name}</th>
                            <th>{item.last_name}</th>
                            <th>{item.email}</th>


                        </tr>
                    ))}
                </tbody>

            </table>

        </>
    )
}
