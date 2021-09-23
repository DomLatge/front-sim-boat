import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Sailaway Boat View</div>
      <nav>
        <ul>
          <li><Link to='/'>All Boats</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
