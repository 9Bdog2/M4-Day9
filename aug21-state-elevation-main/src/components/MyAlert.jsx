import { Alert } from 'react-bootstrap'
import React from 'react'

const MyAlert = ({ selected }) => (
    <Alert variant="success">
        {selected || 'No Character Selected'}
    </Alert>
)

export default MyAlert