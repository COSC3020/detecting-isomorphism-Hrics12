[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NYae883E)
# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The time complexity of the function is $\Theta(n!)$. The function uses a brute force approach to check all possible permutations of the vertices in graph2 to see if any of them make its adjacency matrix equal to the adjacency matrix of graph1.
The number of permutations of a set of size $n$ is $n!$. The time complexity of generating and checking all permutations is $\Theta(n!)$.
The function also computes the adjacency matrix of each graph, which takes $\Theta(n^2)$ time and checks if two matrices are equal which also takes $\Theta(n^2)$ time. But these operations are dominated by the permutation checking so the overall time complexity of the function is $\Theta(n!)$.

This is super bad for large graphs
