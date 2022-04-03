import "./App.css";
// import { MovieList } from "./MovieList";
import { useState } from "react";
// import { AddColor } from "./AddColor";
import { Switch, Route, Redirect } from "react-router-dom";
// import { MovieDetails } from "./MovieDetails";
// import { Notfound } from "./Notfound";
// import { Welcome } from "./Welcome";
// import { AddMovie } from "./AddMovie";
// import { EditMovie } from "./EditMovie";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
// import { BasicForm } from "./BasicForm";
// import { TicTacToe } from "./TicTacToe";

// const initial_movies = [
//   {
//     name: "Royal Enfild",
//     poster:
//       "https://i.pinimg.com/originals/d9/a0/a2/d9a0a223cc75b5a879f08f39878506a1.png",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//   },
//   {
//     name: "Royal Enfild",
//     poster:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3zyMtbBhY2sssaMY_6It_Z3M-YFUHVoAmA&usqp=CAU",
//     rating: 7.9,
//     summary:
//       "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.",
//   },
//   {
//     name: "Free Guy",
//     poster: "https://cdn.wallpapersafari.com/51/70/zMxcIR.jpg",
//     rating: 7.2,
//     summary:
//       "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
//   },
//   {
//     name: "Tenet",
//     poster: "https://cdn.mos.cms.futurecdn.net/wJ4s9FFL6FdxAoKixtr4FS.jpg",
//     rating: 7.4,
//     summary:
//       "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
//   },
//   {
//     name: "Ready Player One",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
//     rating: 7.4,
//     summary:
//       "James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.",
//   },
//   {
//     name: "Alita battle angel",
//     poster:
//       "https://i1.wp.com/nwasianweekly.com/wp-content/uploads/2019/02/MOVIES-Alita.jpg?resize=1100%2C576",
//     rating: 7.3,
//     summary:
//       "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
//   },
// ];

export default function App() {
  console.log("Hi");
  // const initial_movies = [
  //   {
  //     name: "Interstellar",
  //     poster:
  //       "https://i.pinimg.com/originals/d9/a0/a2/d9a0a223cc75b5a879f08f39878506a1.png",
  //     rating: 8.6,
  //     summary:
  //       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  //     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  //   },
  //   {
  //     name: "Arrival",
  //     poster:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3zyMtbBhY2sssaMY_6It_Z3M-YFUHVoAmA&usqp=CAU",
  //     rating: 7.9,
  //     summary:
  //       "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.",
  //   },
  //   {
  //     name: "Free Guy",
  //     poster: "https://cdn.wallpapersafari.com/51/70/zMxcIR.jpg",
  //     rating: 7.2,
  //     summary:
  //       "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
  //   },
  //   {
  //     name: "Tenet",
  //     poster: "https://cdn.mos.cms.futurecdn.net/wJ4s9FFL6FdxAoKixtr4FS.jpg",
  //     rating: 7.4,
  //     summary:
  //       "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
  //   },
  //   {
  //     name: "Ready Player One",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg",
  //     rating: 7.4,
  //     summary:
  //       "James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death. Wade, a teenager, sets out on a quest to find the keys and the fortune.",
  //   },
  //   {
  //     name: "Alita battle angel",
  //     poster:
  //       "https://i1.wp.com/nwasianweekly.com/wp-content/uploads/2019/02/MOVIES-Alita.jpg?resize=1100%2C576",
  //     rating: 7.3,
  //     summary:
  //       "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
  //   },
  // ];

  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static" style={{ marginBottom: "24px" }}>
            <Toolbar variant="dense">
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/movies")}
              >
                Movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/add-movies")}
              >
                Add Movies
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/color-game")}
              >
                Color game
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/tic-tac-toe")}
              >
                Tic-Tac-Toe Game
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("form")}
              >
                Basic form
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                style={{ marginLeft: "auto" }}
                variant="text"
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              {/* <Welcome /> */}
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/edit/:id">{/* <EditMovie /> */}</Route>
            <Route path="/movies/:id">{/* <MovieDetails /> */}</Route>
            <Route path="/movies">{/* <MovieList /> */}</Route>
            <Route path="/add-movies">{/* <AddMovie /> */}</Route>
            <Route path="/color-game">{/* <AddColor /> */}</Route>
            <Route path="/tic-tac-toe">{/* <TicTacToe /> */}</Route>
            <Route path="/form">{/* <BasicForm /> */}</Route>
            <Route path="**">{/* <Notfound /> */}</Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
