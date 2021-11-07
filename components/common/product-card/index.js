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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image="/images/default-bike.jpg"
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red", fontSize: 12 }} aria-label="recipe">
            10%
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Yamaha r15 v3"
        subheader="September 14, 2016"
      />
      <CardContent>
        <div className="product-card-content">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                Price: 280000 BDT
              </Grid>
              <Grid item xs={12} md={6}>
                Used
              </Grid>
              <Grid item xs={12} md={6}>
                110 CC
              </Grid>
              <Grid item xs={12} md={6}>
                Dhaka
              </Grid>
              <Grid item xs={12} md={6}>
                4418 kms
              </Grid>
              <Grid item xs={12} md={6}>
                1 owner
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
