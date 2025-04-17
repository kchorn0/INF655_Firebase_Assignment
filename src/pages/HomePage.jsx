import Tasks from "../components/Task/Tasks";
import AddTask from "../components/Task/AddTask";

export default function HomePage() {
  return (
    <div className="container">
      <div>
  <h2 style={{ color: "Orange" }}>
    Welcome, Here are your tasks!
  </h2>
</div>
      <AddTask />
      <Tasks />
    </div>
  );
}
