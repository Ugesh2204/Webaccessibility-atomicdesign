
import './App.css';
import tw from "tailwind-styled-components"
import Home from './pages/Home';

function App() {
  return (
    <>
    <Home/>
    </>


    // <div className="App">
    //   <header className="App-header">
        
    //     <Container>
    //     <h1>Use the Container as any other React Component</h1>
    //     </Container>

    //     <Downloadlink href="document.docx">
    //       <span>Download Document</span><span>Microsoft Word, 246KB</span>
    //     </Downloadlink>


    //   </header>

    // </div>
  );
}

export default App;


const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
  font-Redhat 
  font-black
`;


const Downloadlink =  tw.a `  
  flex
  flex-col
  bg-[#4D96A9]
  rounded-[2rem]
  text-[1rem]
  px-[1rem]
  py-[0.5rem]
  hover:underline underline-offset-1
`;

//https://www.npmjs.com/package/tailwind-styled-components
//https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML

//So we were able to write a few rules:

// The Atomic Design should have a file of variables and it must be imported by each component;
// The atoms should be written without margins and positions;
// Only the molecules and organisms can set the positions of atoms, but these stacks can’t have any styles of margins and positions;
// Templates have only one function: to set the grid of pages but never positions of specific components;
// Pages render the components with a template defined and it’s here that the Atomic Design will be connected to the rest of the application;