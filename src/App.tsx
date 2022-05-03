import { Widget } from "./components/Widget";

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="button">{props.text ?? 'Default'}</button>;
}

function App(){
  return (
    <Widget />
  )
}

export default App;