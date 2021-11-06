import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function OneStopCard(props) {
    let {icon, title, description, buttonText, onclickCallback} = props;
    return (
        <div className="one-stop-card">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="text-center">
                        {icon}
                    </div>
                    <h5 className="text-center">
                        {title}
                    </h5>
                    <Typography variant="body2" textAlign="center">
                        {description}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}