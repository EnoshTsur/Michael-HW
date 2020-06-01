import React from 'react';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {

  const [company,setCompany]= React.useState(null)

  return (
    <div >
      <Header company={company}/>
      {!company &&(<SignUp setCompany = {setCompany}/>)}
    </div>
  );
}

export default App;
