# Event Bus 

I built this to help me understand event driven architechture, I've also found it very useful when developing JavaScript components that require state. Hopefully other people will find it useful as well. 

Below are some examples of how to use this Event Bus, they are just examples though. You can use this tool in any way you deem suitable. 

```js
const { emit, getState, setState, on, logState } = EventBus({ count: 0 });

const { INCREMENT, DECREMENT } = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};


const increment = () => {
  setState({ count: getState().count + 1 });
};

const decrement = () => {
  setState({ count: getState().count - 1 });
};

emit(INCREMENT");
emit(DECREMENT);
 
on(INCREMENT, increment());
on(INCREMENT, increment());
on(INCREMENT, increment());
on(DECREMENT, decrement());

logState();
```
This package can also listen to many other events with what's called a subscription. Below is an example of the subscription that's listening on multiple events:

```js
const { emit, on, getState, setState, subscribe, logState } = EventBus({
  count: 0,
});

const { INCREMENT, DECREMENT } = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const increment = () => {
  setState({ count: getState().count + 1 });
  emit(INCREMENT, { increment: getState().count });
};

const decrement = () => {
  setState({ count: getState().count - 1 });
  emit(DECREMENT, { decrement: getState().count });
};

subscribe([INCREMENT, DECREMENT], (data) => {
  if (data.increment) {
    console.log(`${data.increment} has been incremented`);
  } else {
    console.log(`${data.decrement} has been decremented`);
  }
});

increment();
increment();
increment();
decrement();

logState();
```
