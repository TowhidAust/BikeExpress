import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';

export default function ProductCard(props) {
  let { id, title, price, description, discount, postedDate, modelYear, cc, location, kmRun, owner, condition, picture, seeDetailsClickHandler } = props;
  
  
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={picture || "/images/default-bike.jpg"}
        alt="Paella dish"
      />
      <CardHeader
        action={
          <div className="product-discount">{discount}%</div>
        }
        title={<div style={{fontSize:"14px", fontWeight: "bold"}}><abbr title={title}>{title.slice(0,16)}</abbr></div>}
        subheader={postedDate}
      />
      <CardContent className="pb-0">
        <div className="product-card-content">
          <Box sx={{ flexGrow: 1, color: "#9d9d9d" }}>
            <Grid container spacing={2}>

              <Grid className="pt-1 flex-start font-weight-bold" item xs={12} md={12} color="#384569">
                <div>TK {price}</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <DateRangeIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> {modelYear} </div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <BuildOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>{condition}</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <SettingsOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>{cc} CC</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <LocationOnOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div>{location}</div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <AvTimerOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> {kmRun} kms </div>
              </Grid>
              <Grid className="pt-1 flex-start" item xs={12} md={6}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: 20, marginBottom: "5px", marginRight: "5px" }} />
                <div> {owner} owner </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="text" size="small" color="primary">ADD TO CART</Button>
        <Button variant="text" size="small" color="primary" onClick={(e)=>{seeDetailsClickHandler(e, id)}}>SEE MORE</Button>
      </CardActions>
    </Card>
  );
}
