const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sensorRoutes = require("./routes/sensorRoutes");
const { listenToFirebase } = require("./services/firebaseListener"); // Corrected import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", sensorRoutes);

// Start listening for new IoT data in Firebase
listenToFirebase();  // Corrected function name

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
