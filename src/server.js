import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { appPort } from "./env/envoriment";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(appPort, () => {
    console.log(`Server running on port http://localhost:${appPort}/api`);
})