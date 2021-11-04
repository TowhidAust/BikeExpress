import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Logo from '../common/logo/logo';
import { AiOutlineDollar } from 'react-icons/ai';
import { RiMotorbikeLine } from 'react-icons/ri';
import {GiCardExchange, GiSellCard} from 'react-icons/gi'
const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      height: "18em",
      justifyContent: "center",
      alignItems: "center",
      marginBottom:"5%"
      // background: "linear-gradient(to right, #384569, #542d2d)"
    }
  });
export default function CommonCard() {
    const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="common-card-root container">
      <h1 className="text-center mb-5 mt-5">One stop for countless benefits</h1>
      <div className="row common-card-inner-row" style={{width:"100%", margin:0}}>
          <div className="col-md-4 mb-2 common-card-col">
              <Card className={`card-inner ${classes.root}`}>
              <CardContent>
                  <div className="common-card-icon"> <AiOutlineDollar color="red"/></div>
                  <h4 className="text-center">BUY USED BIKES</h4>
                  <p className="text-center">Buy the best quality used bikes from BIKEHUB</p>
              </CardContent>
              </Card>
          </div>

          <div className="col-md-4 mb-2 common-card-col">
              <Card className={`card-inner ${classes.root}`}>
              <CardContent>
                  <div className="common-card-icon"><GiSellCard color="red"/></div>
                  <h4 className="text-center">SELL YOUR BIKE</h4>
                  <p className="text-center">Sell your bike to BIKEHUB at the best price with instant payment </p>
              </CardContent>
              </Card>
          </div>

          <div className="col-md-4 mb-2 common-card-col">
              <Card className={`card-inner ${classes.root}`}>
              <CardContent>
                  <div className="common-card-icon"><GiCardExchange color="red"/></div>
                  <h4 className="text-center"> EXCHANGE YOUR BIKE </h4>
                  <p className="text-center"> Bring your old bike and get it exchanged with a new bike at the best price from BIKEHUB </p>
              </CardContent>
              </Card>
          </div>
      </div>
    </div>
    )
}
