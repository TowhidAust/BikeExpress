import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';


export default function BasicCard(props) {
    let { icon, title, description, buttonText, onclickCallback } = props;
    return (
        <div className="bike-hub-basic-card" onClick={onclickCallback}>
            <Card>
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </div>
    );
}