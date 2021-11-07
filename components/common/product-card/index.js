import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function ProductCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image="/images/default-bike.jpg"
        alt="Paella dish"
      />
      <CardHeader
        action={
          <div className="product-discount">10%</div>
        }
        title="Yamaha r15 v3"
        subheader="September 14, 2016"
      />
      <CardContent className="pb-0">
        <div className="product-card-content">
          <Box sx={{ flexGrow: 1, color: "#9d9d9d" }}>
            <Grid container spacing={2}>
              
              <Grid className="pt-1 flex-start font-weight-bold" item xs={12} md={12} color="#384569">
                <div>BDT 280000 </div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <DateRangeIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> 2021 </div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <BuildOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>Used</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <SettingsOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>110 CC</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <LocationOnOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>Dhaka</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <AvTimerOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> 4418 kms </div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> 1 owner </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
