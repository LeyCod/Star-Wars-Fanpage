import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//Services
import { Context } from "../store/appContext";
import { getPeople } from "../service/people.js"
import { getPlanets } from "../service/planets.js";
import { getVehicles } from "../service/vehicles.js";
//Styles
import "../../styles/home.css";
//Components
import Card from "../component/card.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [peopleList, setPeopleList] = useState([]);
	console.log("store:", store);
	console.log("actions", actions);

	const getData = async () => {

		try {
			const peopleRes = await getPeople();
			const peopleJson = await peopleRes.json()
			actions.setPeople(peopleJson.results)
			const planetsRes = await getPlanets();
			const planetsJson = await planetsRes.json()
			actions.setPlanets(planetsJson.results)
			const vehiclesRes = await getVehicles(); 
			const vehiclesJson = await vehiclesRes.json()
			actions.setVehicles(vehiclesJson.results)
			console.log(vehiclesJson.results)

		} catch (err) {
			console.log(err);
		} 
	};

	useEffect (() => {
		getData();
	}, []);
	
	return (
		<div className="container-fluid bg-dark">
            <div className="row justify-content-center">
                <div className="col-10 g-0">
                    <div className="main-section-content ">
                        <h1 className="sec-Title my-3 text-warning text-center">Characters</h1>
                        <div className="sec-cards bg-dark row justify-content-center">
							{store.storePeople.map((people, index)=> <Card name={people.name} key={index}/>)}
						</div>
                    </div>
                </div>
            </div>
			<div className="row justify-content-center">
                <div className="col-10 g-0">
                    <div className="main-section-content ">
                        <h1 className="sec-Title my-3 text-warning text-center">Planets</h1>
                        <div className="sec-cards row justify-content-center">
							{store.storePlanets.map((planet, index)=> <Card name={planet.name} key={index}/>)}
						</div>
                    </div>
                </div>
            </div>
			<div className="row justify-content-center">
                <div className="col-10 g-0">
                    <div className="main-section-content ">
                        <h1 className="sec-Title my-3 text-warning text-center">Vehicles</h1>
                        <div className="sec-cards row justify-content-center">
							{store.storeVehicles.map((vehicle, index)=> <Card name={vehicle.name} key={index}/>)}
						</div>
                    </div>
                </div>
            </div>
        </div>
	);
};
