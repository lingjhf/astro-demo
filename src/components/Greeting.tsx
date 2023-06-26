import { createSignal } from 'solid-js'

interface Props {
  messages: string[]
}

export default function Greeting(props: Props) {

  const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];

  const [greeting, setGreeting] = createSignal(props.messages[0]);

  return (
    <div>
      <h3>{greeting()}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}