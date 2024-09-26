import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const CommonSearch = (props: any) => { 

    const handleInputChange = (event: any) => {
        props?.onSearch(event.target.value);
        props?.searchResult(event.target.value)
    };
  return (
    <>
        <Form.Control
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </>
  )
}

export default CommonSearch