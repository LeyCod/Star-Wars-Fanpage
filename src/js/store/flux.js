const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			storePeople: [],
			storePlanets: [],
			storeVehicles: [], 
			storeFavorites: []
		},
		
		actions: {
			setPeople: (people)=>{
				const store = getStore()
				setStore({...store, storePeople:people})
			},

			setPlanets: (planets)=>{
				const store = getStore()
				setStore({...store, storePlanets:planets})
			}, 

			setVehicles: (vehicles)=>{
				const store = getStore()
				setStore({...store, storeVehicles:vehicles})
			}, 
			
			setFavorites: (favorite)=>{
				const store = getStore()
				setStore({...store, storeFavorites:[...store.storeFavorites, favorite]})
			} 

			}
		}
	};


export default getState;

/**
 * TODO printear el len de storeFavorites en el numero de favoritos.
 * TODO printear el nombre de cada favorito en el desplegable de favoritos.
 */