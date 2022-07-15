import { Message } from "./components/Message";

function App() {
  return (
    <Message
      avatarBackgroundColor="green"
      avatarText="BD"
      displayName="Bogdanka Dimitrijević"
      time="20:50"
    >
      Ready for the trip? I'm so excited I couldn't sleep!
    </Message>
  );
}

export default App;