import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    location:[],
    information:[]
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setLocation(state,payload){
      state.location=payload
    },
    setInformation(state,payload){
      state.information=payload
    },
  },
  actions: {
    async getCharacters({ commit },url='https://rickandmortyapi.com/api/character/') {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();
        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
        commit("setInformation", data.info);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    filterByGender({ commit, state }, gender) {
      const filter = state.characters.filter((character) => {
        return character.gender.includes(gender);
      });
      commit("setCharactersFilter", filter);
    },
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit("setCharactersFilter", filter);
    },
    async getLocations({ commit },url) {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();
        commit("setLocation", data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
