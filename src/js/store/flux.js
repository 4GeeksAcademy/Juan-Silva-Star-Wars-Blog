const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		favorites: []
	  },
	  actions: {
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
		  // fetch().then().then(data => setStore({ "foo": data.bar }))
		},
		changeColor: (index, color) => {
		  const store = getStore();
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
		  setStore({ demo });
		},
		addFavorite: (person) => {
		  const store = getStore();
		  setStore({ favorites: [...store.favorites, person] });
		},
		removeFavorite: (person) => {
			const store = getStore();
			const updatedFavorites = store.favorites.filter((fav) => fav.name !== person.name);
			setStore({ favorites: updatedFavorites });
		  }
		  
	  }
	};
  };
  
  export default getState;
  