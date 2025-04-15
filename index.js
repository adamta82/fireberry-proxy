const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FIREBERRY_TOKEN = "d9c9341b-f69e-4872-a926-c9eb42313408";

app.get("/api/order/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`https://api.fireberry.com/api/record/crmorder/${id}`, {
      headers: {
        "Tokenid": FIREBERRY_TOKEN,
        "Accept": "application/json"
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("שגיאה:", error.message);
    res.status(500).json({ error: "שגיאה בשליפת הנתונים" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔥 השרת עובד! כנס לכתובת http://localhost:${PORT}`);
});
