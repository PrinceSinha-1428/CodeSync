import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/Button';
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    isJoinMeeting: boolean;
}
const MeetingModal = ({isOpen,onClose,title,isJoinMeeting}:MeetingModalProps) => {
    const [meetingURL, setMeetingURL] = useState<string>("");
    const createMeeting = async () => {};
    const joinMeeting = async () => {};
    const handleStart = () => {};
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className='space-y-4 pt-4'>
            {isJoinMeeting && (
                <Input 
                    placeholder="Paste meeting link here.."
                    value={meetingURL}
                    onChange={(e) => setMeetingURL(e.target.value)}
                />
            )}
            <div className='flex justify-end gap-3 '>
                <Button variant={"outline"} onClick={onClose}>
                    Cancel
                </Button>
                <Button onClick={handleStart} disabled={isJoinMeeting && !meetingURL.trim()}>
                  {isJoinMeeting ? "Join Meeting" : "Start Meeting"}
                </Button>
            </div>  
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MeetingModal
