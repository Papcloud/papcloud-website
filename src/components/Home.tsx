import VideoPlayer from "./VideoPlayer";

function Home() {
  return (
    <div>
      <div>
        <h2>
          Papcloud is Photograph, AI Production and Cloud consulting company
        </h2>
        <p>We help businesses grow through creative digital solutions.</p>
      </div>
      <div>
        <VideoPlayer src="https://sexlbucket.s3.us-east-2.amazonaws.com/hr/Branding_Video.mp4" />
      </div>
    </div>
  );
}

export default Home;
