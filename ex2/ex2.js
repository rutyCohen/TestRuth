var iNode = [
    {
        name: "One", children: [
            { name: "two", children: [{ name: "five", children: [] }] },
            { name: "three", children: [{ name: "six", children: [] }] },
            { name: "four", children: [] }
        ]
    }
];
var printINodeRecursion = function (iNode) {
    return iNode.forEach(function (node) {
        if (node.children.length > 0) {
            console.log("node: " + node.name + " " + ", my children: ");
            node.children.forEach(function (child) { return console.log(child.name + " "); });
            return printINodeRecursion(node.children);
        }
        else
            console.log("node: " + node.name + " " + ", no children: ");
    });
};
printINodeRecursion(iNode);
var printINode = function (iNode) {
    var temp = [];
    var bool = false;
    var current = iNode;
    debugger;
    while (current || bool === false) {
        console.log("node: " + (current === null || current === void 0 ? void 0 : current.name) + " ");
        if (current === null || current === void 0 ? void 0 : current.children.length) {
            console.log("my children: ");
            current === null || current === void 0 ? void 0 : current.children.forEach(function (child) {
                console.log(child.name + " "),
                    temp.push(child);
            });
        }
        else {
            console.log("no children");
        }
        bool = true;
        current = temp.pop();
    }
};
printINode(iNode[0]);
