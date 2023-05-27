import React, { useState } from 'react';
import Login from './components/Login'
import SignUp from './components/Sign-up';


export default function Myaccount() {
  const [handle, setHandle] = useState(true);
  return (
    <>{handle ?
      <Login setHandle={setHandle}/> :
      <SignUp setHandle={setHandle}/>
    }
    </>
  )
}
