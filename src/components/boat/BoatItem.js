import Card from "../ui/Card";
import classes from "./BoatItem.module.css";

function BoatItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.name}>
          Name: {props.name}
        </div>
        <div className={classes.content}>
          <h3>Type : {props.type}</h3>
          <address>{props.address}</address>
          <p>COG: {props.cog} deg</p>
          <p>SOG: {props.sog} kn</p>
        </div>
      </li>
    </Card>
  );
}
export default BoatItem;
