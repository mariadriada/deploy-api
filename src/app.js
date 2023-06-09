import express from "express";
import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js";
import gestorProjectRouter from "./routes/gestorproject.route.js";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res)=>{
res.send("hello!!")
})

app.use("/gestor", gestorRoutes);
app.use("/project", projectRoutes);
app.use("/gestor-project", gestorProjectRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Initialized...");
});
