function validPath(n, edges, source, destination) {
    let answer = false;
    const adjacent_vertex = [];
    const visited_vertex = [];

    edges.forEach((edge) => {
        for (let vertex of edge)
            adjacent_vertex[vertex] = [];
    })

    //adding adjcent vertex of each vertex
    for (let i = 0; i < edges.length; i++) {
        adjacent_vertex[edges[i][0]].push(edges[i][1]);
        adjacent_vertex[edges[i][1]].push(edges[i][0]);
    }

    dfs(adjacent_vertex, visited_vertex, source, destination);
    return answer;
}


function dfs(adjacent_vertex, visited_vertex, source, destination) {
    if (source == destination) {
        answer = true;
        return;
    }

    visited_vertex[source] = true;

    for (let vertex of adjacent_vertex[source]) {
        if (!visited_vertex[vertex])
            dfs(adjacent_vertex, visited_vertex, vertex, destination);
    }
}

const edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]];
console.log(validPath(3, edges, 0, 5));
