import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
        <header clasName={classes.header}>
            <h1>FoodMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!'/>
        </div>
    </Fragment>
);
};

export default Header;