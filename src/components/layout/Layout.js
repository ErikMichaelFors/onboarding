import classes from './Layout.module.css';
import TopNavigation from './TopNavigation';

function Layout(props) {
    return <div>
        <TopNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
}

export default Layout;