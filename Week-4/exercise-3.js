const Fibonacci = {
  number: 5,
  [Symbol.iterator]: function () {
    let i = 1,
      older = 0,
      newer = 0;
    return {
      next: () => {
        if (i++ <= this.number) {
          [older, newer] = [newer, older + newer || 1];
          return { value: older, done: false };
        } else return { done: true };
      },
    };
  },
};

for (let num of Fibonacci) {
  console.log(num);
}
