import { FC } from "react";

interface CoursePlayerProps {
  videoUrl: string;
  title: string;
}

const CoursePlayer: FC<CoursePlayerProps> = ({ videoUrl, title }) => {
  return (
    <div className=" pt-[56%] relative">
      {videoUrl && (
        <iframe
          src={videoUrl}
          className=" border-none w-full h-full absolute top-0 left-0 "
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
