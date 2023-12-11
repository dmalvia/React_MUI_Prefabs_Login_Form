import "./App.css";
import {
  Box,
  Typography,
  InputBase,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import movieBg from "./images/movie-bg.jpg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email : ${email} and Password : ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${movieBg})`,
          height: "100vh",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          p={4}
          sx={{
            width: "100%",
            background: "rgba(0,0,0,0.75)",
            maxWidth: "380px",
          }}
        >
          <Typography variant="h2" mb={3} fontSize="1.25rem">
            Sign In
          </Typography>
          <Box
            component="form"
            sx={{
              color: '"#fff"',
            }}
            onSubmit={handleSubmit}
          >
            <InputBase
              placeholder="Email address"
              type="email"
              fullWidth={true}
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                background: "white",
                padding: "5px 10px",
                fontSize: "15px",
                mb: 2,
              }}
            />
            <InputBase
              placeholder="password"
              type="password"
              fullWidth={true}
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                background: "white",
                padding: "5px 10px",
                fontSize: "15px",
                mb: 2,
              }}
            />

            <FormControlLabel
              control={
                <>
                  <Checkbox defaultChecked />
                </>
              }
              label="Remember me"
              sx={{
                color: "white",
              }}
            />
            <Button
              variant="contained"
              fullWidth={true}
              sx={{
                marginTop: 2,
              }}
              type="submit"
            >
              Sign In
            </Button>

            <Box>
              <Typography fontWeight="300" mt={2}>
                <Link href="#" underline="hover" color="white">
                  Forgot Password
                </Link>
              </Typography>
              <Typography fontWeight="300" mt={2}>
                <Link href="#" underline="hover" color="white">
                  Don't have an account ? Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
