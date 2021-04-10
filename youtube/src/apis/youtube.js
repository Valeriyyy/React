import axios from "axios";

const KEY = "AIzaSyBJKXZ6DEsbIR4gDZOjvQtqJ3WQt8C5PS0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
