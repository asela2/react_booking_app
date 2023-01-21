import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

const RegisterForm = ({ state, handleChangeValues, handleSubmitForm }) => {
  return (
    <>
      <Card sx={{ minWidth: 275, marginTop: "30px" }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <form onSubmit={handleSubmitForm}>
            <CardHeader
              title="Register"
              sx={{
                textAlign: "center",
              }}
            />
            <CardContent>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  name="name"
                  margin="dense"
                  onChange={handleChangeValues}
                />
                <TextField
                  fullWidth
                  label="Email"
                  id="email"
                  name="email"
                  margin="dense"
                  onChange={handleChangeValues}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  margin="dense"
                  onChange={handleChangeValues}
                />
              </Box>
            </CardContent>
            <CardActions className="register-container__card-actions">
              <Button
                disabled={!state.name || !state.email || !state.password}
                variant="contained"
                type="submit"
                fullWidth
              >
                Register
              </Button>
            </CardActions>
          </form>
        </Grid>
      </Card>
    </>
  );
};

export default RegisterForm;
