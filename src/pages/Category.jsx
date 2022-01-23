import {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {getFilterCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealsList} from "../components/MealsList";

function Category() {
  const {name} = useParams()
  const [meals, setMeals] = useState([])
  const {goBack} = useHistory()

  useEffect(() => {
    getFilterCategory(name)
      .then(data => setMeals(data.meals))
      .catch(error => console.error(error))
  }, [name])
  return (
    <>
      <button
        className='btn'
        onClick={goBack}
      >Go Back
      </button>
      {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
    </>
  )
}

export {Category}