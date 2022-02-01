import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BikeHubCheckBox() {
    return (
        <div>
            <Checkbox {...label}
            
            size='small'
            sx={{
                color: "black",
                '&.Mui-checked': {
                    color: "black",
                },
            }} />
        </div>
    );
}