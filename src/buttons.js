const Feedback = () => <button>Feedback</button>;

const Exit = () => <button>Exit</button>;

const AnotherType = () => <button>Another Type of test case</button>;

const Home = (props) => <button onClick={props.handleHome}>Home</button>;

const Generate = (props) => <button onClick={props.handleGen}>Generate</button>;

const Copy = (props) => <button onClick={props.handleCopy}>Copy</button>;

const ReGenerate = (props) => (
  <button onClick={props.handleReGen}>ReGenerate</button>
);

const CngConst = (props) => (
  <button onClick={props.handleCngConst}>Change Constraint</button>
);

export {
  Feedback,
  Exit,
  AnotherType,
  Home,
  Generate,
  Copy,
  ReGenerate,
  CngConst,
};
