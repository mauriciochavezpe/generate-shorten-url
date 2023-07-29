//path : 0
export const state = () => ({
  counter: 10,
  lsUrlShort: [],
  darkMode: false,
});

// path : 1
export const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  addShortUrl: ({ commit }, obj) => commit("addShortUrl", obj),
  changeMode: ({ commit }) => commit("changeMode"),

};
//path : 2
export const mutations = {

  increment(state) {
    state.counter++;
  },
  decrement(state) {
   if(state.counter > 0){
    state.counter--;
   }
  },
  addShortUrl(state, obj) {
    state.lsUrlShort.push(obj);
  },
  changeMode(state) {
    state.darkMode = !state.darkMode;
  },
};

export const getters = {

  getCounter: state => state.counter,
  getlsUrlShort: state => state.lsUrlShort,
  getDarkMode: state => state.darkMode,
};
