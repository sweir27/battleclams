import express from "express";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackMiddleware from "webpack-dev-middleware";
import React from 'react'
import { renderToString } from "react-dom/server";
import RoutesContainer from "./client/components/routes";
import { StaticRouter } from 'react-router-dom'
import clams from './client/data/clam_results'

const app = express();

const isDevelopment = process.env.NODE_ENV !== "production";
const appUrl = process.env.APP_URL

if (isDevelopment)  {
  const compiler = webpack(webpackConfig);
  // Set up webpack hot reloading
  app.use(webpackMiddleware(webpack(webpackConfig)));

  app.use(require("webpack-hot-middleware")(compiler));
}

// View engine setup
app.set("views", path.join(__dirname, "client/views"));
app.set("view engine", "pug");

app.use(
  logger("dev", {
    skip: () => app.get("env") === "test"
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "What's your battleclam?",
    teaserImage: `${appUrl}/images/logo.png`
  });
});

app.get("/whats-your-battleclam", (req, res) => {
  res.render("battleclam", {
    title: "What's your battleclam?",
    teaserImage: `${appUrl}/images/logo.png`
  });
});

app.get("/clams/:type", (req, res) => {
  const context = {};
  const clamType = req.params.type
  const clam = clams.filter(cl => cl.id === clamType)[0];

  const html = renderToString(<StaticRouter location={req.url} context={context}>
      <RoutesContainer />
    </StaticRouter>);
  res.render("battleclam", {
    title: `You got: ${clam.name}`,
    content: html,
    teaserImage: `${appUrl}/images/${clam.img}`
  });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).render("error", {
    message: err.message
  });
});

export default app;
