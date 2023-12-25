// import { add } from './calculator' 
import { add, sub } from "./calulator";
test('add function', () => {
  expect(add(1, 2)).toBe(3);
});

test('sub function', () => {
  expect(sub(3, 1)).toBe(2);
});
