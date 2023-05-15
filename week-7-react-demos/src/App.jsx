import ListItem from "./components/ListItem";

function App() {

  const data = [{
    title: "have lunch",
    description: "lunch",
    time: "now"
  }, {
    title: "Run Learning Squads",
    description: "amazing stuff",
    time: "2pm ET"
  }, {
    title: "Complete exit tickets",
    description: "surveys and stuff",
    time: "5pm ET"
  }];

  return (
    <div>
      <ol>
        {/* <ListItem taskName="have lunch" description="lunch" time="1pm" />
        <ListItem taskName="start work" description="make react demo" time="9am" /> */}
        {
          data.map( (task) => (
            // which component do I want to display?
            <ListItem 
              taskName={task.title}
              description={task.description}
              time={task.time}
            />
           ) )
        }
      </ol>
    </div>
  )
}

export default App
