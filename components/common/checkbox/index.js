import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BikeHubCheckBox(props) {
    let {onClickCallBack} = props;
    return (
        <div>
            <Checkbox {...label} sx={{
                color: "darkred",
                '&.Mui-checked': {
                    color: "darkred",
                },
            }} />
        </div>
    );
}