import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZlwOnKfv1QppMnLg5Z0OeWVD0G5hDWutm1SKOOaXztY",
  },
});
