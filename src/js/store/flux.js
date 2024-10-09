

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters:async()=>{
				try {
					const response=await fetch("https://swapi.dev/api/people")
					const data=await response.json()
					console.log(data.results)
					setStore({characters:data.results})
				} catch (error) {
				console.log(error)
				}
			}
			
			
		}
	};
};

export default getState;
