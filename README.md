# Event Bus 

I built this to help understand event driven architechture, I've also found it very useful when developing JavaScript components that require state. Hopefully other people will find it useful as well. 

Below are some examples of how to use this Event Bus, they are just examples though. You can use this tool in any way you deem suitable. 

    const { emit, getState, setState, on, logState } = EventBus({ count: 0 });
    
    const events = {
      INCREMENT: "increment",
      DECREMENT: "decrement",
    };
    
    const increment = () => {
      setState({ count: getState().count + 1 });
    };
    
    const decrement = () => {
      setState({ count: getState().count - 1 });
    };
    
    const methods = {
      increment: () => {
        emit("increment");
      },
      decrement: () => {
        emit("decrement");
      },
    };
    
    methods.increment();
    methods.decrement();
    
    on(events.INCREMENT, increment());
    on(events.INCREMENT, increment());
    on(events.INCREMENT, increment());
    on(events.DECREMENT, decrement());
    
    logState();
