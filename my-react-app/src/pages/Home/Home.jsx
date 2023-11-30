import { Button, Typography } from "@mui/material";
import "./Home.css";
import ReactPlayer from "react-player";
import Reviews from "../../components/Reviews/Reviews";
import { Link } from "react-router-dom";
//{localStorage.rol === "admin" && <Button onClick= {onGetAllUsers} variant='contained'>Get all users</Button>}
export default function Home() {
  /*   function onGetAllUsers(){
      navigate("/home/users")

  } */
  return (
    <div className="homeContainer">
      <div className="videoBackground">
        <ReactPlayer
          width="100%"
          height="100%"
          frameBorder="0"
          className="video"
          title="YouTube Video"
          url="../src/assets/video/videobackground.mp4"
          controls={false} // Configura controls en false para ocultar los controles
          playing={true} // Auto-reproducción
          loop={true}
          volume={1}
        ></ReactPlayer>
      </div>

      <div className="homeInfo">
        <Typography
          style={{
            fontSize: "1.3rem",
            margin: "9rem",

            "@media screen and (max-width: 700px)": {
              margin: "4rem",
              fontSize: "0.3rem",
            },
          }}
        >
          Welcome to Glowork! Explore a world of unique cultural experiences and
          volunteer opportunities through our platform. We believe in the value
          of cultural exchange and the spirit of giving and receiving. Whether
          you're an adventurous traveler or a company seeking volunteer support,
          Glowork is designed to connect people from all corners of the globe.
          Join us and embark on your volunteer journey where you can explore,
          learn, grow, and share.
        </Typography>
        <Link to="/homeInfo">
          <Button className="infoButtom" style={{ color: "white" }}>
            HOW IT WORKS
          </Button>
        </Link>
      </div>

      <div className="reviewsInfo">
        <Reviews />
      </div>
    </div>
  );
}
