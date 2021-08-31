import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../logo/logo';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles({
    root: {
      width: "100%",
      // background: "red",
      minHeight: '15em',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // background: "linear-gradient(to right, #384569, #542d2d)"
    }
  });
export default function CommonCard() {
    const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="common-card-root container">
      <h1 className="text-center mb-5">One Stop For Countless Benefits</h1>
      <div className="row" style={{width:"100%", margin:0}}>
          <div className="col-md-4">
              <Card className={classes.root}>
              <CardContent>
                  <div><Logo/></div>
                  <h3 className="text-center">BUY USED BIKES</h3>
                  <p className="text-center">Buy the best quality used bikes from BIKEHUB</p>
              </CardContent>
              </Card>
          </div>

          <div className="col-md-4">
              <Card className={classes.root}>
              <CardContent>
                  <div><Logo/></div>
                  <h3 className="text-center">SELL YOUR BIKE</h3>
                  <p className="text-center">Sell your bike to BIKEHUB at the best price with instant payment </p>
              </CardContent>
              </Card>
          </div>

          <div className="col-md-4">
              <Card className={classes.root}>
              <CardContent>
                  <div><Logo/></div>
                  <h3 className="text-center"> EXCHANGE YOUR BIKE </h3>
                  <p className="text-center"> Bring your old bike and get it exchanged with a new bike at the best price from BIKEHUB </p>
              </CardContent>
              </Card>
          </div>
      </div>
    </div>
    )
}
