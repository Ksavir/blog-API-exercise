const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            planets: [],
            peoples: [],
            vehicles: [],
            details: {},
            favoriteListing: [],
        },
        actions: {
            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },
            getPeoples: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ peoples: data.results }))
            },
            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
            },
            getDetailPlanet: (plan) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + plan;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailCharacter: (char) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + char;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailVehicles: (vehicle) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/vehicles/' + vehicle;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getData: (data) => {
                setStore({ details: data })
            },
            addFavorite: (item) => {
                const store = getStore();
                const actions = getActions();
                if (!store.favoriteListing.includes(item)) {
					setStore({ favoriteListing: [...store.favoriteListing, item] });
				} else {
					const array = store.favoriteListing;
					const condition = currentFavorite => currentFavorite === item;
					let index = array.findIndex(condition);
					if (index > -1) actions.removeFavorite(index);
				}
            },
            removeFavorite: favoriteIndex => {
                const store = getStore();
				store.favoriteListing.splice(favoriteIndex, 1);
                setStore({ favoriteListing: store.favoriteListing });
			},
        },
    };
};

export default getState;