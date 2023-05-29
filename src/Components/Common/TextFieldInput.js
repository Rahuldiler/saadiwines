import React from 'react';
import { TextField } from '@mui/material';

const TextFieldInput = ({ label, type, value, onChange,name,id ,autoComplete }) => {
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextFieldInput;