import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import React from "react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const EndCallButton = () => {
  const router = useRouter();
  const call = useCall();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const updateInterviews = useMutation(api.interviews.updateInterviews);
  const interview = useQuery(api.interviews.getInterviewsByStreamCallId, {
    streamCallId: call?.id!,
  });

  if (!call || !interview) return null;
  const isMeetingOwner = localParticipant?.userId === call.state.createdBy?.id;
  if (!isMeetingOwner) return null;
  const endCall = async () => {
    try {
      await call.endCall();
      await updateInterviews({
        id: interview._id,
        status: "completed",
      });
      router.push("/");
      toast.success("Meeting Ended for Everyone");
    } catch (error) {
      toast.error("Failed to End Meeting");
    }
  };
  return (
    <Button variant={"destructive"} onClick={endCall}>
      End Meeting
    </Button>
  );
};

export default EndCallButton;
