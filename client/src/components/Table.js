import React from 'react'
import { Table } from 'semantic-ui-react'

const UserTable = ({users}) => {
    return (
       <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Sl No.</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>User name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Website</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {users.map((user)=> (
          <Table.Row>
        <Table.Cell>{user?.id ?? '-'}</Table.Cell>
        <Table.Cell>{user?.name ?? '-'}</Table.Cell>
        <Table.Cell>{user?.username ?? '-'}</Table.Cell>
        <Table.Cell>{user?.email ?? '-'}</Table.Cell>
        <Table.Cell>{`${user?.address?.street} ${user?.address?.suite} ${user?.address?.city} - ${user?.address?.zipcode}`}</Table.Cell>
        <Table.Cell>{user?.phone ?? '-'}</Table.Cell>
        <Table.Cell>{user?.website ?? '-'}</Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer>
    </Table.Footer>
  </Table>
    )
}

export default UserTable;
