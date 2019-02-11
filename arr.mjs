export var range = (num, f) => {
    var r = [];
    for (var i = 0; i < num; i++) {
        r.push(f(i));
    }
    return r;
};

export var ronge = () => {
  console.log("if you can see this, you're too close");
}