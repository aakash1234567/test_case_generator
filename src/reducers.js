import { changeDataReducer } from "./action";
import Single from "./components/single";
import Range from "./components/range";
import Radio from "./components/radio";
var Data = [
  {
    id: 1,
    t: 10,
    low_n: 0,
    high_n: 10,
    low_ai: 0,
    high_ai: 20,
    ar: false,
    desc: (
      <>
        T <br /> n <br />
        [A<sub>1</sub> A<sub>2</sub> A<sub>3</sub>...A<sub>n</sub> ] <br />
        m <br />
        [A<sub>1</sub> A<sub>2</sub> A<sub>3</sub>...A<sub>m</sub> ]
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 1)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        const n = Math.floor(
          Math.random() * (data.high_n - data.low_n) + data.low_n
        );
        var arr = [];
        for (let j = 0; j < n; j++) {
          arr.push(
            Math.floor(
              Math.random() * (data.high_ai - data.low_ai) + data.low_ai
            )
          );
        }
        ans.push(n);
        ans.push(<br />);
        if (data.ar === "true") {
          ans.push(arr.join(" "));
        } else {
          ans.push("[" + arr.join(",") + "]");
        }
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 1)[0].t}
          case_id={1}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 1)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 1)[0].high_n}
          high_id="high_n"
          case_id={1}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 1)[0].low_ai}
          low_id="low_ai"
          name="A"
          sub="i"
          high_val={state.filter((d) => d.id == 1)[0].high_ai}
          high_id="high_ai"
          case_id={1}
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={1} />
      </div>
    ),
  },
  {
    id: 2,
    t: 10,
    low_n: 0,
    high_n: 10,
    low_m: 0,
    high_m: 20,
    low_ai: 0,
    high_ai: 20,
    ar: false,
    desc: (
      <>
        T <br /> n m <br />
        [A<sub>1</sub> A<sub>2</sub> A<sub>3</sub>...A<sub>n</sub> ] <br />
        n m <br />
        [A<sub>1</sub> A<sub>2</sub> A<sub>3</sub>...A<sub>n</sub> ]
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 2)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        const n = Math.floor(
          Math.random() * (data.high_n - data.low_n) + data.low_n
        );
        const m = Math.floor(
          Math.random() * (data.high_m - data.low_m) + data.low_m
        );
        var arr = [];
        for (let j = 0; j < n; j++) {
          arr.push(
            Math.floor(
              Math.random() * (data.high_ai - data.low_ai) + data.low_ai
            )
          );
        }
        ans.push(n);
        ans.push(" ");
        ans.push(m);
        ans.push(<br />);
        if (data.ar === "true") {
          ans.push(arr.join(" "));
        } else {
          ans.push("[" + arr.join(",") + "]");
        }
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 2)[0].t}
          case_id={2}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 2)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 2)[0].high_n}
          high_id="high_n"
          case_id={2}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 2)[0].low_m}
          low_id="low_m"
          name="m"
          high_val={state.filter((d) => d.id == 2)[0].high_m}
          high_id="high_m"
          case_id={2}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 2)[0].low_ai}
          low_id="low_ai"
          name="A"
          high_val={state.filter((d) => d.id == 2)[0].high_ai}
          high_id="high_ai"
          sub="i"
          case_id={2}
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={2} />
      </div>
    ),
  },
  {
    id: 3,
    t: 10,
    low_bi: 0,
    high_bi: 10,
    low_ai: 0,
    high_ai: 20,
    ar: false,
    desc: (
      <>
        T <br />
        [A<sub>1</sub> B<sub>1</sub>] <br />
        [A<sub>2</sub> B<sub>2</sub>] <br />
        (t rows of)
        <br />
        (A, B pair)
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 3)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        var arr = [];
        var ai = Math.floor(
          Math.random() * (data.high_ai - data.low_ai) + data.low_ai
        );
        var bi = Math.floor(
          Math.random() * (data.high_bi - data.low_bi) + data.low_bi
        );
        arr.push(ai);
        arr.push(bi);
        if (data.ar == "true") {
          ans.push(arr.join(" "));
        } else {
          ans.push("[" + arr.join(",") + "]");
        }
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 3)[0].t}
          case_id={3}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 3)[0].low_ai}
          low_id="low_ai"
          name="A"
          sub="i"
          high_val={state.filter((d) => d.id == 3)[0].high_ai}
          high_id="high_ai"
          case_id={3}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 3)[0].low_bi}
          low_id="low_bi"
          name="B"
          sub="i"
          high_val={state.filter((d) => d.id == 3)[0].high_bi}
          high_id="high_bi"
          case_id={3}
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={3} />
      </div>
    ),
  },
  {
    id: 4,
    t: 10,
    low_n: 0,
    high_n: 10,
    low_m: 0,
    high_m: 20,
    low_ai: 0,
    high_ai: 20,
    low_bi: 0,
    high_bi: 20,
    ar: false,
    desc: (
      <>
        T <br /> n m <br />
        [A<sub>1</sub> A<sub>2</sub> A<sub>3</sub>...A<sub>n</sub> ] <br />
        [B<sub>1</sub> B<sub>2</sub> B<sub>3</sub>...B<sub>m</sub> ] <br />
        ... ...
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 4)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        const n = Math.floor(
          Math.random() * (data.high_n - data.low_n) + data.low_n
        );
        const m = Math.floor(
          Math.random() * (data.high_m - data.low_m) + data.low_m
        );
        var ai = [];
        for (let j = 0; j < n; j++) {
          ai.push(
            Math.floor(
              Math.random() * (data.high_ai - data.low_ai) + data.low_ai
            )
          );
        }
        var bi = [];
        for (let j = 0; j < m; j++) {
          bi.push(
            Math.floor(
              Math.random() * (data.high_bi - data.low_bi) + data.low_bi
            )
          );
        }
        ans.push(n);
        ans.push(" ");
        ans.push(m);
        ans.push(<br />);
        if (data.ar === "true") {
          ans.push(ai.join(" "));
          ans.push(<br />);
          ans.push(bi.join(" "));
        } else {
          ans.push("[" + ai.join(",") + "]");
          ans.push(<br />);
          ans.push("[" + bi.join(",") + "]");
        }
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 4)[0].t}
          case_id={4}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 4)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 4)[0].high_n}
          high_id="high_n"
          case_id={4}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 4)[0].low_m}
          low_id="low_m"
          name="m"
          high_val={state.filter((d) => d.id == 4)[0].high_m}
          high_id="high_m"
          case_id={4}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 4)[0].low_ai}
          low_id="low_ai"
          name="A"
          high_val={state.filter((d) => d.id == 4)[0].high_ai}
          high_id="high_ai"
          case_id={4}
          sub="i"
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 4)[0].low_bi}
          low_id="low_bi"
          name="B"
          high_val={state.filter((d) => d.id == 4)[0].high_bi}
          high_id="high_bi"
          case_id={4}
          sub="i"
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={4} />
      </div>
    ),
  },
  {
    id: 5,
    t: 10,
    low_n: 0,
    high_n: 10,
    low_m: 0,
    high_m: 20,
    low_k: 0,
    high_k: 20,
    ar: false,
    desc: (
      <>
        T <br />
        [n m k] <br />
        [n m k] <br />
        (t rows of)
        <br />
        (n, m, k pair)
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 5)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        var arr = [];
        var n = Math.floor(
          Math.random() * (data.high_n - data.low_n) + data.low_n
        );
        var m = Math.floor(
          Math.random() * (data.high_m - data.low_m) + data.low_m
        );
        var k = Math.floor(
          Math.random() * (data.high_k - data.low_k) + data.low_k
        );
        arr.push(n);
        arr.push(m);
        arr.push(k);
        if (data.ar == "true") {
          ans.push(arr.join(" "));
        } else {
          ans.push("[" + arr.join(",") + "]");
        }
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 5)[0].t}
          case_id={5}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 5)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 5)[0].high_n}
          high_id="high_n"
          case_id={5}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 5)[0].low_m}
          low_id="low_m"
          name="m"
          high_val={state.filter((d) => d.id == 5)[0].high_m}
          high_id="high_m"
          case_id={5}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 5)[0].low_k}
          low_id="low_k"
          name="k"
          high_val={state.filter((d) => d.id == 5)[0].high_k}
          high_id="high_k"
          case_id={5}
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={5} />
      </div>
    ),
  },
  {
    id: 6,
    low_n: 0,
    high_n: 10,
    low_m: 0,
    high_m: 20,
    low_ai: 0,
    high_ai: 20,
    ar: false,
    desc: (
      <>
        n * m (matrix) <br />
        [A<sub>11</sub> A<sub>12</sub> A<sub>13</sub>...A<sub>1m</sub> ] <br />
        [A<sub>21</sub> A<sub>22</sub> A<sub>23</sub>...A<sub>2m</sub> ] <br />
        [A<sub>n1</sub> A<sub>n2</sub> A<sub>n3</sub>...A<sub>nm</sub> ]
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 6)[0];
      const n = Math.floor(
        Math.random() * (data.high_n - data.low_n) + data.low_n
      );
      const m = Math.floor(
        Math.random() * (data.high_m - data.low_m) + data.low_m
      );
      ans.push(n);
      ans.push(" ");
      ans.push(m);
      ans.push(<br />);
      for (let j = 0; j < n; j++) {
        var arr = [];
        for (let k = 0; k < m; k++) {
          arr.push(
            Math.floor(
              Math.random() * (data.high_ai - data.low_ai) + data.low_ai
            )
          );
        }
        if (data.ar === "true") {
          ans.push(arr.join(" "));
        } else {
          ans.push("[" + arr.join(",") + "]");
        }
        ans.push(<br />);
      }
      console.log(ans, "check");
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Range
          low_val={state.filter((d) => d.id == 6)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 6)[0].high_n}
          high_id="high_n"
          case_id={6}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 6)[0].low_m}
          low_id="low_m"
          name="m"
          high_val={state.filter((d) => d.id == 6)[0].high_m}
          high_id="high_m"
          case_id={6}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 6)[0].low_ai}
          low_id="low_ai"
          name="A"
          high_val={state.filter((d) => d.id == 6)[0].high_ai}
          high_id="high_ai"
          sub="i"
          case_id={6}
          dispatch={dispatch}
        />
        <Radio dispatch={dispatch} case_id={6} />
      </div>
    ),
  },
  {
    id: 7,
    t: 10,
    low_n: 0,
    high_n: 10,
    chr: "r a n d o m",
    ar: true,
    desc: (
      <>
        T <br /> n <br />
        Custom String <br />
        (ex: 0 1) <br />
        (ex: +/-) <br />
        (ex: a 2 b c)
      </>
    ),
    Gen: (state) => {
      var ans = [];
      var data = state.filter((d) => d.id == 7)[0];
      ans.push(data.t);
      ans.push(<br />);
      for (let i = 0; i < data.t; i++) {
        const n = Math.floor(
          Math.random() * (data.high_n - data.low_n) + data.low_n
        );
        var arr = data.chr.split(" ");
        var str = "";
        for (let j = 0; j < n; j++) {
          str += arr[Math.floor(Math.random() * arr.length)];
        }
        ans.push(n);
        ans.push(<br />);
        ans.push(str);
        ans.push(<br />);
      }
      return ans;
    },
    content: (state, dispatch) => (
      <div className="container">
        <Single
          id="t"
          val={state.filter((d) => d.id == 7)[0].t}
          case_id={7}
          dispatch={dispatch}
        />
        <Range
          low_val={state.filter((d) => d.id == 7)[0].low_n}
          low_id="low_n"
          name="n"
          high_val={state.filter((d) => d.id == 7)[0].high_n}
          high_id="high_n"
          case_id={7}
          dispatch={dispatch}
        />
        <div className="mb-3 row">
          <label className="col-sm-4 col-form-label" htmlFor="chr">
            Characters:
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              id="chr"
              className="chr form-control"
              value={state.filter((d) => d.id == 7)[0].chr}
              placeholder="Enter space separated characters"
              onChange={(e) => {
                dispatch(changeDataReducer(e, 7));
              }}
            />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    ),
  },
];
const handleChange = (state = Data, payload) => {
  var { e, id } = payload;
  var temp = state.map((d) => {
    if (d.id == id) {
      if (e.target.type === "radio") {
        console.log("check", parseInt(e.target.value), typeof e.target.value);
        return {
          ...d,
          [e.target.name]: e.target.value,
        };
      } else {
        if (e.target.className === "chr") {
          return {
            ...d,
            [e.target.id]: e.target.value,
          };
        } else {
          return {
            ...d,
            [e.target.id]: parseInt(e.target.value),
          };
        }
      }
    } else {
      return d;
    }
  });
  // console.log(temp);
  return temp;
};

const changeData = (state = Data, action) => {
  switch (action.type) {
    case "UPDATE":
      return handleChange(state, action.payload);
    default:
      return state;
  }
};

export default changeData;
