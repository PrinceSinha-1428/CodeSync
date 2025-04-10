"use client";

import LoaderUI from '@/components/LoaderUI';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import useGetCallById from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const {id} = useParams();
    const {isLoaded} = useUser();
    const {call,isCallLoading} = useGetCallById(id);
    const [isSetupComplete, setIsSetupComplete] = useState(false);
    if(!isLoaded || isCallLoading) return <LoaderUI/>
   if(!call){
    return (
        <div className='flex items-center justify-center h-screen'>
            <p className='text-2xl font-semibold'>Meeting Not Found</p>
        </div>
    )
   }
  return (
    <StreamCall call={call}>
        <StreamTheme>
            {!isSetupComplete ? (
                <MeetingSetup onSetupCompelete={() => setIsSetupComplete(true)}/>
            ) : (
                <MeetingRoom/>
            )}
        </StreamTheme>
    </StreamCall>
  )
}

export default page
