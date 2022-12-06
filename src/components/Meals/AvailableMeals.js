import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'PIZZA',
    description: 'best item while enjoying',
    price: 18.99,
  },
  {
    id: 'm2',
    name: 'Falooda',
    description: 'Full of nuts and Butterscotch icecream',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Biryani',
    description: 'Veg or chicken',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Healthy...and green...',
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    decription={meal.description}
    price={meal.price} 
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;