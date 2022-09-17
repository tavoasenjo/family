# Context

## 1 - Context Folder and File

- Create a folder **context** and add a file **FamilyContext.jsx**
- Our Context will be in **src/context/FamilyContext**

## 2 - In your **FamilyContext** file:

- Import **createContext** from react:
  `import { createContext, useState } from "react";`
- Create a variable and assign to it the method **createContext**
  `const FamilyContext = createContext()`
- Create a **provider function** and export it immediately.
- Pass the **props children**
- Create the **state** you will want to pass through your components
- Return the new _'Component'_: **FamilyContext.Provider** and pass it the value of the state you want to spread
- Pass the children prop in between the **FamilyContext.Provider** tags
- Finally _export default_ your FamilyContext variable.

```js
export const FamProvider = ({ children }) => {
  // STATE
  const [family, setFamily] = useState(famData);
  return (
    <FamilyContext.Provider value={{ family }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
```

## 3- Implement Provider in your parent Component

- In your top **Component Parent**, this case is **App.js**, import the provider function from the **FamilyContext.jsx** file
  `import { FamProvider } from './context/FamilyContext';`
- _Wrap_ all your return elements with your **Provider component**

```js
function App() {
  return (
    <FamProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path=':memberId' element={<Member />} />
        </Routes>
      </Router>
    </FamProvider>
  );
}
```

- Note that if App.js requires data, we should wrap <App /> in **index.js**

## 4- Get the data in your components
