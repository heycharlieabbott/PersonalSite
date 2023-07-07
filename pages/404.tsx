import * as React from 'react';
import Navbar from '../components/navbar'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div>
     <Navbar/>
    </div>
  );
}
