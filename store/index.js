//path : 0
export const state = () => ({
  counter: 10,
  lsUrlShort: []
});

// path : 1
export const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  addShortUrl: ({ commit }, url) => commit("addShortUrl", url),

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
  addShortUrl(state, url) {
    state.lsUrlShort.push(url);
  }
};

export const getters = {

  getCounter: state => state.counter,
  getlsUrlShort: state => state.lsUrlShort
};
