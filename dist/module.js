const $747425b437e121da$export$5087227eb54526 = (state)=>{
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
const { emit: $747425b437e121da$var$emit , setState: $747425b437e121da$var$setState , on: $747425b437e121da$var$on , logState: $747425b437e121da$var$logState  } = $747425b437e121da$export$5087227eb54526({
    count: 0
});
const $747425b437e121da$var$actions = {
    increment: ()=>{
        $747425b437e121da$var$setState({
            count: state.count + 1
        });
    },
    decrement: ()=>{
        $747425b437e121da$var$setState({
            count: state.count - 1
        });
    }
};
const $747425b437e121da$var$methods = {
    increment: ()=>{
        $747425b437e121da$var$emit("increment");
    },
    decrement: ()=>{
        $747425b437e121da$var$emit("decrement");
    }
};
$747425b437e121da$var$on($747425b437e121da$var$methods.increment, $747425b437e121da$var$actions.increment);
$747425b437e121da$var$on($747425b437e121da$var$methods.increment, $747425b437e121da$var$actions.increment);
$747425b437e121da$var$on($747425b437e121da$var$methods.increment, $747425b437e121da$var$actions.increment);
$747425b437e121da$var$on($747425b437e121da$var$methods.increment, $747425b437e121da$var$actions.increment);
$747425b437e121da$var$on($747425b437e121da$var$methods.decrement, $747425b437e121da$var$actions.decrement);
$747425b437e121da$var$logState();


export {$747425b437e121da$export$5087227eb54526 as EventBus};
//# sourceMappingURL=module.js.map
