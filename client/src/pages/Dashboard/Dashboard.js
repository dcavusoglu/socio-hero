import {useState, useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import {db} from '../../Firebase'
import { collection, getDocs } from "firebase/firestore";
import CurrentUser from '../SignIn/CurrentUser'
import { UserContext } from "../../App";


const Dashboard = () => {
  const [drinks, setDrinks] = useState([]);
  const { currentUser, userName } = useContext(UserContext);

  useEffect(() => {
    const getMarker = async () => {
      const querySnapshot = await getDocs(collection(db, userName));
      querySnapshot.forEach((doc) => {
        const arr = []
        // doc.data() is never undefined for query doc snapshots
        // const favId = ({ ...doc.data()})
        console.log({ ...doc.data()})
        arr.push({...doc.data()})
        setDrinks(...arr)
        // console.log(({ ...doc.data(), id: doc.id }));
      });
    }
    getMarker()
    console.log('drinks', drinks)
  }, [])





  return (
    <div>
      <CurrentUser/>

       {/* {currentUser && drinks ? (
        <div className="flex flex-row flex-wrap justify-center mx-20 ">
          {drinks.map((drink) => {
            return (
              <Link
                to={`/cocktail/${drink.idDrink}`}
                key={drink.idDrink}
                className="m-6 max-w-sm w-44 border border-pink-500/[.25] flex flex-col items-center rounded-b-lg shadow-xl"
              >
                <h2 className="text-sm font-bold text-purple-500 tracking-tight mb-2 h-10 flex items-center">
                  {drink.strDrink}
                </h2>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-44 h-44 rounded-b-lg"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <h1>Nothing</h1>
      )} */}
    </div>
  )
}

export default Dashboard
