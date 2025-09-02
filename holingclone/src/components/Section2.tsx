import styled from "styled-components";
import { useRef, useState } from "react";

function Section2() {
  const videos = [
    "/assets/images/video_01.mp4",
    "/assets/images/video_02.mp4",
    "/assets/images/video_03.mp4",
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    if (currentVideo < videos.length - 1) {
      setCurrentVideo(currentVideo + 1);
    } else {
      setCurrentVideo(0);
    }
  };

  return (
    <Second>
      <SpansDiv>
        <Spans1>초등부터 중·고등까지</Spans1>
        <Spans2>
          <Spans2_1>하루 30분</Spans2_1>
          이면 한 학기 수학을 완성할 수 있어요
        </Spans2>
      </SpansDiv>
      <VideoDiv>
        <VideoPlayDiv>
          <video
            ref={videoRef}
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
              width: "100%",
              display: "block",
              border: "1px solid rgb(191, 197, 203)",
            }}
          />
          <VideoBottomDiv></VideoBottomDiv>
        </VideoPlayDiv>
      </VideoDiv>
    </Second>
  );
}
export default Section2;

const Second = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  box-align: center;
  align-items: center;
  z-index: 0;
  width: 100%;
  position: relative;
  background: linear-gradient(
    rgb(255, 255, 255) 22.41%,
    rgb(209, 242, 254) 100%
  );
  padding: 120px 0px;
`;

const SpansDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-align: center;
  align-items: center;
`;

const Spans1 = styled.span`
  font-family: SUIT;
  font-size: 30px;
  font-weight: 500;
  color: #000;
  text-align: center;
  width: unset;
  white-space: break-spaces;
  line-height: 1.5;
`;

const Spans2 = styled.span`
  font-size: 48px;
  font-family: Maplestory;
  color: #121619;
`;

const Spans2_1 = styled.span`
  font-size: 48px;
  font-family: Maplestory;
  color: #00ab15;
`;

const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  box-align: center;
  align-items: center;
  width: 785px;
`;

const VideoPlayDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10.5px;
  box-align: center;
  align-items: center;
  position: relative;
  border-radius: 35px;
  border: 2px solid rgb(191, 197, 203);
  background: rgb(255, 255, 255);
  padding: 25px 33px;
`;

const VideoBottomDiv = styled.div`
  position: absolute;
  z-index: -1;
  width: 105%;
  height: 52px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 32px;
  background: rgb(183, 233, 239);
  bottom: -8px;
`;
