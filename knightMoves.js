const Node = (pos = null, path = []) => {
    return {pos, path};
}

function knightMoves(start, end) {
    const possibleMoves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
    const seen = new Map();


    const rootNode = Node(start);
    rootNode.path.push(start);

    let queue = [rootNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode.pos[0] === end[0] && currentNode.pos[1] === end[1]) {
            return currentNode.path;
        }

        for (const move of possibleMoves) {
            const nextMove = [currentNode.pos[0] + move[0], currentNode.pos[1] + move[1]];
            const node = Node(nextMove, currentNode.path.concat([nextMove]));

            if (!seen.has(nextMove)) {
                queue.push(node);
                seen.set(nextMove);
            }
        }

    }

}

const path = knightMoves([0,0], [7,7]);

path.forEach(pos => {
    console.log(pos);
});