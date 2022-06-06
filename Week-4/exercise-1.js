/*
Exercise-4.1:
    Implement a function named 'getNumber' which generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.
    
    1.JS promises should not be used.
    2.A custom promise function should be created.
    3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
    4.Should be able to accept callbacks as props.
*/

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

//creating the state object.
const STATE = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

class Pramise {
  //callback is a function.
  state = STATE.PENDING; //Initial state of Promise is empty.
  value = undefined;
  then_callbacks = [];
  catch_callbacks = [];

  constructor(callback) {
    //Invoking the callback function by passing the presolve and the preject function of our class.
    try {
      callback(this.presolve, this.preject, time);
    } catch (error) {
      this.preject(error);
    }
  }

  //presolve() method.
  presolve(value) {
    this.updateState(value, STATE.RESOLVED);
  }

  //preject() method.
  preject(error) {
    this.updateState(error, STATE.REJECTED);
  }

  /* creating the updateState() method */
  updateState(value, state) {
    if (this.state !== STATE.PENDING) {
      return;
    }
    this.value = value;
    this.state = state;
    this.execute_callbacks();
  }

  execute_callbacks() {
    if (this.state === STATE.RESOLVED) {
      this.then_callbacks.forEach((callback) => {
        callback(this.value);
      });
      this.then_callbacks = [];
    } else {
      this.then_callbacks.forEach((callback) => {
        callback(this.value);
      });
      this.then_callbacks = [];
    }
  }

  then(then_cb, catch_cb) {
    if (this.then_cb !== null) this.then_callbacks.push(callback);
    if (this.catch_cb !== null) this.catch_callbacks.push(callback);
    this.execute_callbacks();
  }

  catch(onFail) {}
}
