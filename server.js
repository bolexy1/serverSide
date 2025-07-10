const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/flights', (req, res) => {
  res.json({
    flights: [
      {
        departure: "New York",
        arrival: "London",
        duration: "7h 30m",
        seat: "12A",
        date: "2025-08-15",
        time: "10:00 AM"
      },
      {
        departure: "Paris",
        arrival: "Tokyo",
        duration: "13h 15m",
        seat: "8B",
        date: "2025-08-16",
        time: "1:45 PM"
      },
      {
        departure: "Dubai",
        arrival: "Sydney",
        duration: "14h 20m",
        seat: "22C",
        date: "2025-08-18",
        time: "9:10 AM"
      },
      {
        departure: "Toronto",
        arrival: "Los Angeles",
        duration: "5h 40m",
        seat: "3D",
        date: "2025-08-20",
        time: "4:30 PM"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
