/* EventBus: function - returns: {subscribe, emit}
 * subscribe: function - returns: function - callback function
 * emit: function - returns: function - callback function
 * usage: const { subscribe, emit } = EventBus();
 * subscribe(key, callback) - returns: function - callback function
 * emit(key, value) - returns: function - callback function
 * usage: const { subscribe, getState, setState emit } = EventBus();
 *
 * The EventBus is a simple event emitter that allows you to subscribe to
 * events and emit events. I've also added state so that you can update and
 * emit the state to the subscribers. This can be useful for things like
 * updating the UI when the state changes. You can also share state between
 * components. This is a simple implementation of the EventBus pattern.
 * Take a look - https://en.wikipedia.org/wiki/Event-driven_architecture
 *******************************************************************************/
export const EventBus = (state) => {
  const listeners = {};
  const STATE_CHANGE_EVENT = "stateChange";

  const getState = () => {
    return state;
  };

  const logState = () => {
    console.table(getState());
  };

  const emit = (event, ...args) => {
    if (listeners[event]) {
      listeners[event].forEach((listener) => {
        listener(...args);
      });
    }
  };

  const on = (event, listener) => {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(listener);
  };

  const subscribe = (event, listener) => {
    if (Array.isArray(event)) {
      event.forEach((event) => {
        on(event, listener);
      });
    } else {
      on(event, listener);
    }
  };

  const off = (event, listener) => {
    if (listeners[event]) {
      listeners[event] = listeners[event].filter((l) => l !== listener);
    }
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    emit(STATE_CHANGE_EVENT, state);
  };

  return {
    emit,
    on,
    off,
    getState,
    logState,
    subscribe,
    setState,
  };
};
