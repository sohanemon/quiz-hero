const Blogs = () => {
  return (
    <>
      <ol className='border-l border-gray-300 w-full md:w-3/4 text-justify mx-auto'>
        {data.map((el) => (
          <li key={el.ques}>
            <div className='flex flex-start items-center pt-3'>
              <div className='bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3'></div>
            </div>
            <div className='mt-0.5 ml-4 mb-6'>
              <h4 className='text-gray-800 font-semibold text-xl mb-1.5'>
                {el.ques}{" "}
              </h4>
              <p className='text-gray-500 mb-3'>{el.ans}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Blogs;

const data = [
  {
    ques: "What is the purpose of using react router?",
    ans: `React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
At its heart, React Router is a state container for the current location , URL. It keeps track of the location and renders different <Route> s as changes, and it also gives you tools to update the location <Link> s and the history API.
    `,
  },
  {
    ques: "How does context api work?",
    ans: `
The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
    `,
  },
  {
    ques: "What is useRef?",
    ans: `
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.

However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
    `,
  },
];
