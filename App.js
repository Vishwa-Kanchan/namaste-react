// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello world from react!"
// );
// console.log(heading);// object

{/* <div id="parent">
    <div id="child">
        <h1>I am racchu</h1>
        <h2>Hi Racchu, Sangeeta here</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div", { id: "parent" }, React.createElement(
    "div", { id: "child" }, [React.createElement(
    "h1", {}, "I am Vishwa"), React.createElement("h2", {}, "I stay in Bangalore")]));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);