const Pet = ({name, animal, breed}) => {
    return React.createElement(
        "div",
        {},[
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
        ]);
};

const App = () => {
    return React.createElement("div", { id: "something-important" },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Ziggy", animal: "Dog", breed: "Daucshaund",  }),
            React.createElement(Pet, {name: "Laggy", animal: "Dog", breed: "Buttdog",  }),
            React.createElement(Pet, {name: "Doink", animal: "Cat", breed: "Stray",  })
        ]
    );
};

ReactDOM.render(
    React.createElement(App),   
    document.getElementById("root")
);