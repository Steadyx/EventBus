# Event Bus 

I built this to help understand event driven architechture, I've also found it very useful when developing JavaScript components that require state. Hopefully other people will find it useful as well. 

Here are the methods of the Event Bus:
## getState
```js
const { getState } = EventBus({ count: 0 })
getState() -> { count: 0 };
```
getState retrieves state.

----
## logState
```js
const { logState } = EventBus({ count: 0 })
logState() -> { count: 0 };
```
logs our state in table format

----

## on
```js
const { on } = EventBus({ count: 0 })
on(event, action);
```
on listens for an event from emit. when it recieves that event it can execute an action. 

----

## subscribe
```js
const { subscribe } = EventBus({ count: 0 })
subscribe(event || [event1, event2], callback);
```
Like the `on` method, subscribe can take a single event or multiple events, it listens for events that have been emmited the data gets passed from the emitted function into the callback.

----

## off
```js
const { off } = EventBus({ count: 0 })
off(event, callback)
```
Turns off en event

----

## setState
```js
const { setState, getState } = EventBus({ count: 0 })
setState({ count: getState.count + 1 })
```
setState takes an object that can be updated, it can be used in conjunction with getState to help set the new state. 

----

## Examples

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
 
on(INCREMENT, increment);
on(INCREMENT, increment);
on(INCREMENT, increment);
on(DECREMENT, decrement);

emit(INCREMENT);
emit(DECREMENT);

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
