const Feedback = () => (
  <a
    className="btn btn-primary"
    href="https://github.com/aakash1234567/test_case_generator/issues/new/choose"
    target="_blank"
  >
    Feedback
  </a>
);

const AnotherType = () => (
  <a
    className="btn btn-primary"
    href="https://github.com/aakash1234567/test_case_generator/issues/new?assignees=&labels=&template=suggest-test-case.md&title=Suggest+Test+Case"
    target="_blank"
  >
    Another Type of test case
  </a>
);

const Home = (props) => (
  <button className="btn btn-primary" onClick={props.handleHome}>
    Home
  </button>
);

const Generate = (props) => (
  <button className="btn btn-primary" onClick={props.handleGen}>
    Generate
  </button>
);

const Copy = (props) => (
  <button className="btn btn-primary" id="btncopy" onClick={props.handleCopy}>
    Copy{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      fill="currentColor"
      class="bi bi-check2"
      viewBox="0 0 16 16"
      id="svgcopy"
    >
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </svg>
  </button>
);

const ReGenerate = (props) => (
  <button className="btn btn-primary" onClick={props.handleReGen}>
    ReGenerate
  </button>
);

const CngConst = (props) => (
  <button className="btn btn-primary" onClick={props.handleCngConst}>
    Change Constraint
  </button>
);

export { Feedback, AnotherType, Home, Generate, Copy, ReGenerate, CngConst };
