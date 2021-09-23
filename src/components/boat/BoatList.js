import BoatItem from "./BoatItem";
import classes from "./BoatList.module.css";

function BoatLists(props) {
  return (
    <ul className={classes.list}>
      {props.boats.map((boat) => (
        <BoatItem
          key={boat.id}
          name={boat.boatname}
          type={boat.boattype}
          sog={boat.sog}
          cog={boat.cog}
        />
      ))}
    </ul>
  );
}

export default BoatLists;
