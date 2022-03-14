function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "EventBus", () => $43d7963e56408b24$export$5087227eb54526);
const $43d7963e56408b24$export$5087227eb54526 = (state)=>{
    const listeners = {
    };
    const STATE_CHANGE_EVENT = "stateChange";
    const getState = ()=>{
        return state;
    };
    const logState = ()=>{
        console.table(getState());
    };
    const emit = (event, ...args)=>{
        if (listeners[event]) listeners[event].forEach((listener)=>{
            listener(...args);
        });
    };
    const on = (event, listener)=>{
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(listener);
    };
    const subscribe = (event1, listener)=>{
        if (Array.isArray(event1)) event1.forEach((event)=>{
            on(event, listener);
        });
        else on(event1, listener);
    };
    const off = (event, listener)=>{
        if (listeners[event]) listeners[event] = listeners[event].filter((l)=>l !== listener
        );
    };
    const setState = (newState)=>{
        state = {
            ...state,
            ...newState
        };
        emit(STATE_CHANGE_EVENT, state);
    };
    return {
        emit: emit,
        on: on,
        off: off,
        getState: getState,
        logState: logState,
        subscribe: subscribe,
        setState: setState
    };
};
const { emit: $43d7963e56408b24$var$emit , setState: $43d7963e56408b24$var$setState , on: $43d7963e56408b24$var$on , logState: $43d7963e56408b24$var$logState  } = $43d7963e56408b24$export$5087227eb54526({
    count: 0
});
const $43d7963e56408b24$var$actions = {
    increment: ()=>{
        $43d7963e56408b24$var$setState({
            count: state.count + 1
        });
    },
    decrement: ()=>{
        $43d7963e56408b24$var$setState({
            count: state.count - 1
        });
    }
};
const $43d7963e56408b24$var$methods = {
    increment: ()=>{
        $43d7963e56408b24$var$emit("increment");
    },
    decrement: ()=>{
        $43d7963e56408b24$var$emit("decrement");
    }
};
$43d7963e56408b24$var$on($43d7963e56408b24$var$methods.increment, $43d7963e56408b24$var$actions.increment);
$43d7963e56408b24$var$on($43d7963e56408b24$var$methods.increment, $43d7963e56408b24$var$actions.increment);
$43d7963e56408b24$var$on($43d7963e56408b24$var$methods.increment, $43d7963e56408b24$var$actions.increment);
$43d7963e56408b24$var$on($43d7963e56408b24$var$methods.increment, $43d7963e56408b24$var$actions.increment);
$43d7963e56408b24$var$on($43d7963e56408b24$var$methods.decrement, $43d7963e56408b24$var$actions.decrement);
$43d7963e56408b24$var$logState();


//# sourceMappingURL=index.js.map
