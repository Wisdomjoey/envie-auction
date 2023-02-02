import store from "../store"

const increment = () => {
  store.dispatch({
    type: 'counter/increment'
  });
}

export { increment };
