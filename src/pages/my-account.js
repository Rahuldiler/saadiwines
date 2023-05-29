import React, { useState } from 'react';
import Login from '../components/my-account/Login'
import SignUp from '../components/my-account/Sign-up';


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
