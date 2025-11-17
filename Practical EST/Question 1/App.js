export default function App() {
  const username = "Tanmay";

  return (
    <div>
      <h1>Prop Drilling Demo</h1>
      
      {/* Passing username to Header */}
      <Header username={username} />
    </div>
  );
}
