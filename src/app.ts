import express from "express";
import cors from "cors";
import "dotenv/config";
import { reviewRoutes} from "./reviews/infrastructure/reviewRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/review/', reviewRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`funcionando desde: ${port}`);
});