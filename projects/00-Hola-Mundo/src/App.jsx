import "./App.css";
import { TwitterFollowCArd } from "./TwwiterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    initialIsFollowing: true,
  },
  {
    userName: "hector_giraldo",
    name: "Hector Fabio Giraldo",
    initialIsFollowing: true,
  },
  {
    userName: "fherrera",
    name: "Fernando Herrera",
    initialIsFollowing: false,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    initialIsFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCArd
          userName={userName}
          initialIsFollowing={initialIsFollowing}
          key={userName}
        >
          {name}
        </TwitterFollowCArd>
      ))}
    </section>
  );
}
