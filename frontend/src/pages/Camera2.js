import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { handleError, handleSuccess } from "../utils";

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};

const Camera = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const { signupInfo } = location.state || {}; 
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    console.log("imageSrc", imageSrc);

    if (imageSrc) {
      try {
        const url = `http://localhost:8080/auth/signup`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...signupInfo,
                faceImage: imageSrc
            })
        });
        const result = await response.json();
        const { success, message, error } = result;
        if (success) {
            handleSuccess(message);
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } else if (error) {
            const details = error?.details[0]?.message || 'Signup failed.';
            handleError(details);
            navigate('/signup');
        } else {
            handleError(message);
            navigate('/signup');
        }
    } catch (err) {
        handleError('An error occurred while signing up.');
        navigate('/signup');
    }
    }

    
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      {/* <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      <button onClick={capturePhoto} className="w-[100px] bg-[#4FACFE] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">Capture</button>
      <button onClick={() => setUrl(null)} className="w-[100px] bg-[#4FACFE] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">Refresh</button>
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )} */}
      <div className="flex flex-col items-center mt-10 bg-gray-900 text-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        className="rounded-md border border-gray-700 mb-4"
      />

      <div className="flex gap-4">
        <button
          onClick={capturePhoto}
          className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition"
        >
          Capture
        </button>
        <button
          onClick={() => {
            setUrl(null);

          }}
          className="bg-gray-600 px-4 py-2 rounded-md text-white hover:bg-gray-700 transition"
        >
          Refresh
        </button>
        
      </div>

      {url && (
        <div className="mt-4">
          <p className="mb-2 font-medium">Captured Image:</p>
          <img src={url} alt="Captured face" className="rounded shadow-md max-w-full" />
        </div>
      )}

      
    </div>
    </>
  );
};

export default Camera;
