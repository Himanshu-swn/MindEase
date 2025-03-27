import {React,useContext} from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { AuthContext } from "../../context/AuthContext.jsx";






const VideoChat = () => {
    const roomID = "Health_for_you";

    
    // const { user } = useContext(AuthContext);
    // const userName = user.name;

    const user = {
        name : "Dinesh Surya"
    }

    let myMeeting = async (element) => {
   // generate Kit Token
    // const appID = process.env.APP_Id;
    // const serverSecret = process.env.SERVER_SECRET;
    const appID = 572130434;
    const serverSecret = "c552f92f407bf9779df8b8f04fea4d8a";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), user.name);

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },

    });

  
};

return (
  <div
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
);
}

export default VideoChat
