import React, { useState, useCallback, useMemo, useRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
// const ChildComponent = React.memo(({ onClick }) => {
//   console.log("ChildComponent rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// eslint-disable-next-line react/display-name, react/prop-types
// const ChildComponent = React.memo(({ onClick }) => {
//   console.log("ChildComponent rendered");
//   return <button onClick={onClick}>Click Me</button>;
// });

// export default function Hooks() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     alert("Button clicked!");
//   }, []); // Empty dependency array: function doesn't change

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }

// export default function Hooks() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(0);

//   const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     return num * 2;
//   };

//   const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Memoized Value: {memoizedValue}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setOtherState(otherState + 1)}>
//         Update Other State
//       </button>
//     </div>
//   );
// }

export default function Hooks() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus(); // Focuses on the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
