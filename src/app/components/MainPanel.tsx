'use client'
import { IconButton } from "@mui/material";
import { Camera, Copy, Dislike, DocumentUpload, HambergerMenu, Like, Like1, LogoutCurve, Maximize3, Microphone, Notification, OceanProtocol, Paperclip, PlayCircle, Refresh, Refresh2, Send2, VolumeLow, VolumeLow1 } from "iconsax-react";
import Image from "next/image";
import AutoSizedTextarea from "./AutoSizedTextarea";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useContext } from 'react';
import { GlobalContext } from '../context/global-context';

export default function MainPanel() {
    const globalContest = useContext(GlobalContext)
    if (!globalContest) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }
    const {isLoged, setIsLoged, isMaximised, setIsMaximised, isSideOpened, setIsSideOpened} = globalContest;


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    function logout(){
        setIsLoged(false);
        setIsMaximised(false);
        handleClose2();
    }
    return (
        <div className="bg-white flex flex-col rounded-[16px] transition-all duration-500 border-border-primary lg:border-[1px] w-full">
            <div className="border-b-[1px] flex justify-between items-center border-border-primary py-[8px] px-[20px]">
                    <IconButton className="[&&]:lg:hidden" onClick={() => {setIsSideOpened(!isSideOpened)}}>
                        <HambergerMenu size={24} color="#64676C" />
                    </IconButton>
                {isLoged && (
                    <IconButton className="[&&]:hidden [&&]:lg:inline-block" onClick={() => {setIsMaximised(!isMaximised)}}>
                        <Maximize3 size={24} color="#64676C" />
                    </IconButton>
                )}
                <span className="text-[20px] text-dark-primary font-[500]">Welcome back, John Doe</span>
                {isLoged && (
                    <div onClick={handleClick2} className="relative cursor-pointer">
                        <Image src="/img/profile.jpeg" className="rounded-full" width={44} height={44} alt="" />
                        <div className="absolute bottom-0 right-0 translate-x-[3px] translate-y-[3px] h-[20px] w-[20px] border-[1px] border-border-highlight rounded-full bg-white">
                            <Notification className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={16} variant="Bold" color="#FD7E14" />
                        </div>
                    </div>
                )}
                {!isLoged && (
                    <div className="relative">
                        <OceanProtocol color="#007BFF" size={44}/>
                    </div>
                )}
            </div>
            <div className="lg:p-[20px] flex flex-col h-full justify-between">
                <div className="lg:p-[0px] p-[20px] lg:flex-grow h-[calc(100vh-125px)] lg:h-full flex flex-col gap-[50px] overflow-y-auto">
                    <div className="flex justify-end">
                        <div>
                            <div className="py-[10px] px-[16px]">
                               <Image className="rounded-[10px]" src="/img/hamster.jpeg" width={212} height={2012} alt="hamster" />
                            </div>
                            <div className="flex items-center justify-end">
                                <span className="text-[14px] text-dark-secondary font-[400]">12:59</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <OceanProtocol color="#4f4f4f" size={24} />
                        </div>
                        <div>
                            <div className="py-[10px] px-[16px]">
                                This is the hamster. Hamsters are small and cute rodents. They are often kept as pets and there are different types, the most popular being Syrian hamsters and dwarf hamsters. They are nocturnal animals, so they are usually active at night. Hamsters like to live alone and in nature they carry their food in their cheek pouches. They need toys such as running wheels in their cages because they need to move around a lot. They are easy to care for, but their teeth can grow back quickly if care is not taken, so appropriate food and toys must be provided. Their average lifespan is 2-3 years.
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center">
                                        <IconButton>
                                            <Copy size={20} color="#4f4f4f" />
                                        </IconButton>
                                        <IconButton>
                                            <VolumeLow1 size={20} color="#4f4f4f" />
                                        </IconButton>
                                        <IconButton>
                                            <Refresh size={20} color="#4f4f4f" />
                                        </IconButton>
                                        <IconButton>
                                            <Like1 variant="Outline" size={20} color="#4f4f4f" />
                                        </IconButton>
                                        <IconButton>
                                            <Dislike size={20} color="#4f4f4f" />
                                        </IconButton>
                                    </div>
                                    <span className="text-[14px] text-primary font-[400] cursor-pointer">See translation</span>
                                </div>
                                <span className="text-[14px] text-dark-secondary font-[400]">12:59</span>
                            </div>
                        </div>
                       
                    </div>

                    <div className="flex justify-end">
                        <div>
                            <div className="py-[10px] px-[16px] gap-[12px] flex justify-end items-center">
                               <PlayCircle variant="Bold" color="#007BFF" size={32} />
                               <img src="/img/waveform.svg" alt="" />
                               <span className="text-[14px] text-dark-primary font-[500]">0:05</span>
                            </div>
                            <div className="flex items-center justify-end">
                                <span className="text-[14px] text-dark-secondary font-[400]">12:59</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full h-full flex justify-center items-center">
                        <OceanProtocol color="#007BFF" size={108} />
                    </div> */}
                </div>
                <div className="px-[20px] py-[6px] lg:p-0 border-t-[1px] lg:border-none border-border-primary">
                    <div className="px-[12px] flex justify-between items-center min-h-[44px] bg-gray-light-1 rounded-[10px]">
                        <IconButton className="-ml-[9px]" onClick={handleClick}>
                            <Paperclip size={24} color="#64676C" />
                        </IconButton>
                        <AutoSizedTextarea className="py-[10px] px-[10px]" />
                        <IconButton className="-mr-[9px]">
                            <Send2 size={24} color="#64676C" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <Menu
                className="-translate-y-[15px]"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                MenuListProps={{
                'aria-labelledby': 'basic-button'
                }}
            >
                <div className="border-[1px] border-border-primary rounded-[10px] shadow-2xl">
                    <div className="cursor-pointer flex w-[283px] px-[12px] py-[10px] gap-[6px] border-b-border-primary border-b-[1px]" onClick={handleClose}>
                        <Camera size={24} color="#4F4F4F" />
                        <span className="font-urbanist font-[300]">Photo</span>
                    </div>
                    <div className="cursor-pointer flex w-[283px] px-[12px] py-[10px] gap-[6px]" onClick={handleClose}>
                        <Microphone size={24} color="#4F4F4F" />
                        <span className="font-urbanist font-[300]">Audio</span>
                    </div>
                    <div className="cursor-pointer flex justify-between items-center w-[283px] px-[12px] py-[10px] gap-[6px] border-t-border-primary border-t-[1px]" onClick={handleClose}>
                        <div className="flex gap-[6px] items-center">
                            <DocumentUpload size={24} color="#4F4F4F" />
                            <span className="font-urbanist font-[300]">Select file</span>
                        </div>
                        <span className="text-[10px] font-[400] text-dark-secondary">max 10MB</span>
                    </div>
                </div>
            </Menu>
                <Menu
                    className="translate-y-[50px] -translate-x-[7px]"
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button'
                    }}
                >
                <div className="border-[1px] border-border-primary rounded-[10px] shadow-2xl">
                    <div className="cursor-pointer flex w-[203px] px-[12px] py-[10px] gap-[6px] border-b-border-primary border-b-[1px]" onClick={logout}>
                        <LogoutCurve size={24} color="#4F4F4F" />
                        <span className="font-urbanist font-[300]">Logout</span>
                    </div>
                </div>
                
            </Menu>
        </div>
    )
}