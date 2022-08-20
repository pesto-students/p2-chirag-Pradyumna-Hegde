let v, adjacent_vertices_list;

function Graph(vertices) {
    adjacent_vertices_list = new Array(vertices);

    for (let i = 0; i < v; i++) {
        adjacent_vertices_list[i] = [];
    }
}

function addEdge(source, v) {
    adjacent_vertices_list[source].push(v);
}

function print_all_paths(source, target) {
    let isVisited = new Array(v);
    for (let i = 0; i < v; i++)
        isVisited[i] = false;

    let path_list = [];
    path_list.push(source);
    store_all_path(source, target, isVisited, path_list);
}


function store_all_path(source, target, isVisited, local_path_list) {
    if (source == target) {
        console.log(local_path_list);
        return;
    }
    // Mark the current node as true.
    isVisited[source] = true;

    for (let i = 0; i < adjacent_vertices_list[source].length; i++) {
        if (!isVisited[adjacent_vertices_list[source][i]]) {
            local_path_list.push(adjacent_vertices_list[source][i]); //storing the current node in the local_path_list.

            store_all_path(adjacent_vertices_list[source][i], target, isVisited, local_path_list);
            // remove current node
            // in path[]
            local_path_list.splice(local_path_list.indexOf(adjacent_vertices_list[source][i]), 1);
        }
    }

    isVisited[source] = false;
}