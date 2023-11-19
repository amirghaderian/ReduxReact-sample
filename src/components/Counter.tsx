import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          incrementByAmount
        </button>
        <button onClick={() => dispatch(incrementAsync(13 ))}>
          incrementAsync
        </button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
