import { Link } from 'react-router-dom';
import classes from './TopNavigation.module.css';

function TopNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Eways Academy Portal</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Onboarding Tasks</Link>
                    </li>
                    <li>
                        <Link to="/current-tasks">Current Tasks</Link>
                    </li>
                    <li>
                        <Link to="/completed-tasks">Completed Tasks</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default TopNavigation;