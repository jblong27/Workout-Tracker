const express =  require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//use mongoose to connect to our database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swoletracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});