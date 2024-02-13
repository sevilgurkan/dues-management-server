import express, { Router } from "express";

export async function createApp() {
  const app = express();

  app.get("/healthcheck", async (_, res) => {
    res.send({
      uptime: process.uptime(),
      message: "OK",
    });
  });

  return app;
}
