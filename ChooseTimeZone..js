import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@mui/material";

export const ChooseTimeZone = ({ timeZone, setModify, allTimeZones, index }) => {

    const [dropDown, setDropwDown] = useState(false);

    const handleChange = (event) => {
        
        setModify({userAction: true, index: index, newZone: event.target.value});

        setDropwDown(false);
    };

    return (
        <>
            {(!dropDown && timeZone) ? <div className="title" onClick={() => setDropwDown(true)}>{timeZone.split('/')[1].toUpperCase()}</div>
                : <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="selectTimeZone"
                                id="selectTimeZone"
                                value={timeZone}
                                label="Age"
                                onChange={handleChange}
                            >
                                {allTimeZones.map(timeZone => <MenuItem value={timeZone}>{timeZone.split('/')}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Box>
                </div>}
        </>
    )
}