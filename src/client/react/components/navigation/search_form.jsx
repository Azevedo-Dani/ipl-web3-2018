import React from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


const SearchForm = ({
   history, 
}) => {
    let searchInput = null;

    function handleSearch(){
        const path = `/hello/${searchInput.value}`;
        history.push(path);
    }

    return (
        <Form inline onSubmit={handleSearch}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={(input) => {searchInput = input} } />
          <Button variant="outline-info">Search</Button>
        </Form>
    );
}

const SearchFormWithRouter = withRouter(SearchForm);
export default SearchFormWithRouter;