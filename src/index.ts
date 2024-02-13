import { createApp } from "./server";

createApp()
  .then((app) => {
    app.listen(8080, () => {
      console.log("Server listenin on PORT 8080");
    });
  })
  .catch(console.log);
