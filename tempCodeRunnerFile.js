nst dotenv = require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

//router import
const userRoutes = require("./routes/userRouter");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);