const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			character: {},
			planet: {},
			vehicle: {}
		},
		actions: {
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/")
					const data = await response.json()
					const characterList = await Promise.all(
						data.results.map(char => fetch(char.url).then(res => res.json()).then(resData => resData.result.properties))
					)
					console.log(data.results)
					setStore({ characters: characterList })
				} catch (error) {
					console.log(error)
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					const data = await response.json()
					const vehicleList = await Promise.all(
						data.results.map(char => fetch(char.url).then(res => res.json()).then(resData => resData.result.properties))
					)
					console.log(data.results)
					setStore({ vehicles: vehicleList })
				} catch (error) {
					console.log(error)
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					const planetList = await Promise.all(
						data.results.map(char => fetch(char.url).then(res => res.json()).then(resData => resData.result.properties))
					)
					console.log(data.results)
					setStore({ planets: planetList })
				} catch (error) {
					console.log(error)
				}
			},

			addFavorite: async (title) => {
				try {
					if (getStore().favorites.includes(title)) {
						let aux = []
						aux = getStore().favorites.filter((elemento) => elemento !== title)
						setStore({ favorites: aux })
					}
					else {
						setStore({ favorites: [...getStore().favorites, title] })
					}
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},

			deleteFavorite: async (title) => {
				try {
					let aux = []
					aux = getStore().favorites.filter((elemento) => elemento !== title)
					setStore({ favorites: aux })
				} catch (error) {
					console.log(error)
					return false
				}
			},

			getCharacter: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/" + id);
					const data = await response.json();

					if (data) {
						setStore({ character: data.result.properties });
					} else {
						console.error("No se encontró información del personaje.");
					}
				} catch (error) {
					console.log("Error en getCharacter:", error);
				}
			},

			getPlanet: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/" + id);
					const data = await response.json();

					if (data.result) {
						setStore({ planet: data.result.properties });
					} else {
						console.error("No se encontró información del planeta.");
					}
				} catch (error) {
					console.log("Error en getPlanet:", error);
				}
			},

			getVehicle: async (id) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/" + id);
					const data = await response.json();

					if (data.result) {
						setStore({ vehicle: data.result.properties });
					} else {
						console.error("No se encontró información del vehículo.");
					}
				} catch (error) {
					console.log("Error en getVehicle:", error);
				}
			}

		}
	};
};

export default getState;
