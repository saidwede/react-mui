'use client'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import CustomCheckbox from './CustomCheckBox';
import { Apple, Facebook, Google } from 'iconsax-react';
import { useContext } from 'react';
import { GlobalContext } from '../context/global-context';

export default function LoginForm(){
    const globalContest = useContext(GlobalContext)
    if (!globalContest) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }
    const {isLoged, setIsLoged, isMaximised, setIsMaximised, isSideOpened, setIsSideOpened} = globalContest;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoged(true);
        setIsSideOpened(false);
    };
    return (
        <div className="w-[356px] flex flex-col gap-[20px] pt-[50px]">
            <h1 className="text-dark-primary font-[500] text-[28px] text-center">Sign in to your account</h1>
            <div className="flex flex-col gap-[20px]">
                <form onSubmit={handleSubmit} className='flex flex-col gap-[16px]'>
                    <div className='flex flex-col gap-[6px]'>
                        <div className='flex flex-col gap-[16px]'>
                            <div className='h-[46px] border-[1px] border-border-primary bg-white rounded-[10px] py-2 px-4'>
                                <input 
                                    required
                                    type="text" 
                                    placeholder='Phone number or email' 
                                    className='appearance-none w-full h-full text-[14px] placeholder:text-[14px] placeholder:text-dark-secondary placeholder:font-[400] outline-none'
                                />
                            </div>
                            <div className='h-[46px] border-[1px] border-border-primary bg-white rounded-[10px] py-2 px-4'>
                                <input 
                                    required
                                    type="password" 
                                    placeholder='Password' 
                                    className='appearance-none w-full h-full text-[14px] placeholder:text-[14px] placeholder:text-dark-secondary placeholder:font-[400] outline-none font-[500]'
                                />
                            </div>
                        </div>
                        <p className='text-right text-primary font-[400] text-[16px]'>Forgot password?</p>
                    </div>
                    <Button
                        type='submit'
                        variant="outlined"
                        className=" bg-primary rounded-[10px] h-[46px] w-full"
                    >
                        <span className='text-white normal-case text-[18px] font-[600]'>Sign in</span>
                    </Button>
                </form>
                <div className='h-[76px] border-[1px] border-border-primary flex justify-between items-center px-4'>
                    <div className='flex gap-[20px] items-center'>
                        <CustomCheckbox />
                        <span className='text-[14px] font-[500] text-dark-primary'>I am human</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src="/img/captcha.png" width={40} height={54} alt='' />
                        <span className='text-center text-[12px] font-[400]'>Privacy - Terms</span>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[16px] justify-center items-center'>
                            <div className='bg-border-primary flex-grow h-[1px]'></div>
                            <span className='text-[16px] font-[400] text-center'>Or</span>
                            <div className='bg-border-primary flex-grow h-[1px]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <Button className='flex gap-[16px] h-[46px] w-full rounded-[12px] bg-primary bg-opacity-5'>
                            <Apple variant='Bold' color='#000000' size={28}/>
                            <span className='text-[16px] font-[300] text-dark-primary normal-case'>Sign in with Apple ID</span>
                        </Button>
                        <Button className='flex gap-[16px] h-[46px] w-full rounded-[12px] bg-primary bg-opacity-5'>
                            <img src="/img/google.svg" alt="" />
                            <span className='text-[16px] font-[300] text-dark-primary normal-case'>Sign in with Google</span>
                        </Button>
                        <Button className='flex gap-[16px] h-[46px] w-full rounded-[12px] bg-primary bg-opacity-5'>
                        <img src="/img/facebook.svg" alt="" />
                            <span className='text-[16px] font-[300] text-dark-primary normal-case'>Sign in with Facebook</span>
                        </Button>
                    </div>
                    <p className='text-center text-[18px] font-[500]'>Don’t you have an account? <span className='text-primary cursor-pointer'>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}