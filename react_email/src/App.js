import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from 'primereact/api';   
import {  useState } from 'react';     
import MainMenu from './Components/Menu/Menu';
import Signup from './Components/Authentification/Signup';
import Sigin from './Components/Authentification/Sigin';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';
import Contenu from './Components/Contenu/Contenu';
import { useDispatch } from 'react-redux';
import { removeUser } from './Redux/UserSlice';
function App() {
  const [authentification, setAuthentification] = useState(false);
  const [showsignIn, setShowSignIn] = useState(false);
  const [showsignup, setShowSignup] = useState(false);
  const user =useSelector(selectUser);
  const dispatch=useDispatch()  ;
 

 
  const HandleLogin = (value) => {
    setAuthentification(value);
  }
  const itemsMenu = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },
    ...(
        user.token!==""    ? 
        [
            {
                label: 'Sign Out',
                icon: 'pi pi-user-minus',
                className: 'costum-sign-in',
                command: () => {
                    setAuthentification(false);
                    setShowSignIn(false);
                    setShowSignup(false);
                    dispatch(removeUser());
                    
                }
            }
        ] : 
        [
            {
                label: 'Sign In',
                icon: 'pi pi-user',
                className: 'costum-sign-in',
                command: () => {
                    setShowSignIn(!showsignIn);
                    setShowSignup(false);
                }
            },
            {
                label: 'Sign Up',
                icon: 'pi pi-user-plus',
                className: 'costum-sign-up',
                command: () => {
                    setShowSignup(!showsignup);
                    setShowSignIn(false);
                }
            }
        ]
    )
];
  return (
    <>  
    <PrimeReactProvider value={{ unstyled: false }}>
    <ChakraProvider>
      <>
      <MainMenu items={itemsMenu}/>
      {
        showsignIn && !showsignup && !authentification ? <Sigin  HandleLogin={HandleLogin} /> : null
      }

      {
        showsignup && !showsignIn && !authentification ? <Signup  Handleup={()=>{
          setShowSignup(false)
          setShowSignIn(true)
        }} /> : null
      }
      {
        user.token!=="" ? <Contenu email={user.email} password={user.password}/> : null
      }
      
      </>
      
    
    </ChakraProvider>    
    </PrimeReactProvider>

    </>
  );
}

export default App;
