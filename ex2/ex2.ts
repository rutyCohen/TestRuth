interface INode {
    name: string;
    children: INode[];
}

let iNode: INode[] = [
    {
        name: "One", children: [
            { name: "two", children: [{ name: "five", children: [] }] }
            , { name: "three", children: [{ name: "six", children: [] }] }
            , { name: "four", children: [] }
        ]
    }
];

let printINodeRecursion = (iNode: INode[]) => {
    return iNode.forEach(
        (node: INode): void => {
            if (node.children.length>0) {
                console.log("node: "+ node.name + " " + ", my children: " )
                node.children.forEach((child)=>console.log(child.name + " ")
                )
                return printINodeRecursion(node.children);
            }
            else console.log("node: "+ node.name + " " + ", no children: " )
        },
    );
}

//Advantages: short and clear code
//Disadvantages: high runtime complexity

printINodeRecursion(iNode);


let printINode = (iNode: INode) => {
    let temp: INode[] = []; 
    let bool: boolean = false;
    let current: INode | undefined = iNode;
    debugger
    while (current || bool === false) {
    console.log( "node: "+ current?.name + " "  )
    if ( current?.children.length){
        console.log( "my children: " )
        current?.children.forEach((child)=>{
            console.log(child.name + " "),
            temp.push(child)})
    }
    else{
        console.log( "no children" )
    }
    bool = true;
    current = temp.pop();
    
}
}

printINode(iNode[0])

//Advantages: better runtime complexity than recursion
//Disadvantages: longer code