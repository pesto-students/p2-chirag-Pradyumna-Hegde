
function CreateStack() {
    const items = [];
    return {

        push(item) {
            items.push(item);
        },

        pop() {
            return items.pop();
        }
    };
}
const stack = CreateStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items);// undefined
