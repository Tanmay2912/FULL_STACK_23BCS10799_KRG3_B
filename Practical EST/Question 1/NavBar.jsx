export default function NavBar({ username }) {
  return (
    <nav>
      <p>Navigation Bar</p>

      {/* Passing username further to UserProfile */}
      <UserProfile username={username} />
    </nav>
  );
}

import UserProfile from "./UserProfile";

