import {
  Feedback,
  Exit,
  AnotherType,
  Generate,
  Home,
  Copy,
  ReGenerate,
  CngConst,
} from "./buttons";
import Cases from "./cases";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const [isScreen, setIsScreen] = useState(1);
  const [showContent, setShowContent] = useState([]);
  const [showOutput, setShowOutput] = useState([]);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const ShowContent = (id) => {
    setIsScreen(2);
    setShowContent(store.filter((data) => data.id == id)[0]);
  };
  const Generator = () => {
    var arr = showContent.Gen(store);
    setShowOutput(arr);
    console.log(arr);
    setIsScreen(3);
  };
  const ReGen = () => {
    var arr = showContent.Gen(store);
    setShowOutput(arr);
  };
  const Cpy = () => {
    var copyText = document.getElementById("output");
    console.log(copyText.innerHTML);
    var cnt = copyText.innerHTML;
    cnt = cnt.replaceAll("<br>", "\n");
    console.log(cnt);
    navigator.clipboard.writeText(cnt);
  };
  return (
    <>
      <h1 id="head">Test Case Generator</h1>
      {isScreen === 1 ? (
        <div className="container" id="content">
          <div className="row">
            <div className="col">
              <Cases handleClick={(id) => ShowContent(id)} />
            </div>
            <div className="col-4">
              <div className="col" id="buttons">
                <AnotherType />
              </div>
              <div className="col" id="buttons">
                <Feedback />
              </div>
              <div className="col" id="buttons">
                <Exit />
              </div>
            </div>
          </div>
        </div>
      ) : isScreen == 3 ? (
        <div className="container" id="content">
          <div className="row">
            <div
              className="col"
              id="output"
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "400px",
              }}
            >
              {showOutput}
            </div>
            <div className="col-4">
              <div className="col" id="buttons">
                <Copy handleCopy={() => Cpy()} />
              </div>
              <div className="col" id="buttons">
                <ReGenerate handleReGen={() => ReGen()} />
              </div>
              <div className="col" id="buttons">
                <CngConst
                  handleCngConst={() => {
                    setIsScreen(2);
                  }}
                />
              </div>
              <div className="col" id="buttons">
                <Home
                  handleHome={() => {
                    setIsScreen(1);
                  }}
                />
              </div>
              <div className="col" id="buttons">
                <Exit />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container" id="content">
          <div className="row">
            <div className="col">{showContent.content(store, dispatch)}</div>
            <div className="col-4">
              <div className="col" id="buttons">
                <Home
                  handleHome={() => {
                    setIsScreen(1);
                  }}
                />
              </div>
              <div className="col" id="buttons">
                <Generate handleGen={() => Generator()} />
              </div>
              <div className="col" id="buttons">
                <Exit />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
