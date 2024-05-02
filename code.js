are_isomorphic(graph1, graph2) {
    if (graph1.vertices.length !== graph2.vertices.length || graph1.edges.length !== graph2.edges.length) {
    return false;
}

for (let vertex of graph1.vertices) {
    let degree1 = graph1.degree(vertex);
    let found = false;
    for (let vertex2 of graph2.vertices) {
        if (graph2.degree(vertex2) === degree1) {
            found = true;
            break;
        }
    }
    if (!found) {
        return false;
    }
}
return true;
  
}
