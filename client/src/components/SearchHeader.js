import React from 'react';
import {Input, Container} from 'semantic-ui-react';

const SearchHeader = ({onChangeText}) => {
    return (
        <Container>
            <Input fluid icon='users' iconPosition='left' placeholder='Search users...' onChange={onChangeText} />
        </Container>
    )
}

export default SearchHeader;
