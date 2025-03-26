import { createContext } from "react";

export const TwitterContext = createContext({
  user: {
    name: "MP",
    avatar: "https://gravatar.com/avatar/000?d=mp",
  },
  stats: {
    followers: 0,
    following: 0
  },
  changeAvatar: (url) => {console.log(url)
  },
  changeName: (name) => {console.log(name)
  },
});