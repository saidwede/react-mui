"use client"
import Button from '@mui/material/Button';
import { Add } from 'iconsax-react';
import SidePanel from './components/SidePanel';
import MainPanel from './components/MainPanel';
import LoginForm from './components/LoginForm';
import { GlobalContext } from './context/global-context';
import { useContext } from 'react';
import { IconButton } from '@mui/material';

export default function Home() {
  const globalContest = useContext(GlobalContext)
  if (!globalContest) {
    throw new Error('SomeComponent must be used within a MyProvider');
  }
  const {isLoged, setIsLoged, isMaximised, setIsMaximised, isSideOpened, setIsSideOpened} = globalContest;
  return (
    <div className='flex gap-[32px] h-full'>
      {!isMaximised && (
        <div className={`
        ${isLoged ? 'lg:w-[310px] w-screen' : 'lg:w-[700px] w-screen'} 
        fixed lg:static top-0 left-0 z-10 transition-all duration-300 ${isSideOpened ? 'translate-x-[0px]' : 'translate-x-[-100vw]'} lg:translate-x-[0px]
        h-full bg-white flex justify-center`}>
          <IconButton className="lg:hidden absolute top-[10px] right-[10px]" onClick={() => {setIsSideOpened(!isSideOpened)}}>
            <Add className='-rotate-45' size={24} color="#64676C" />
          </IconButton>
          {isLoged && (
            <SidePanel />
          )}
          {!isLoged && (
            <LoginForm />
          )}
        </div>
      )}
      <MainPanel />
    </div>
  );
}
