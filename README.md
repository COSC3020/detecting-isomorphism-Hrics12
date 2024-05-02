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

The worst case time complexity for the are_isomorphic function is $\Theta(n^2)$. $n$ represents the number of vertices in the graphs. This is because the function iterates over each vertex in the first graph and for each of these vertices, it iterates over all vertices in the second graph to check if there is a vertex with the same degree. The pair of nested loops perform a comparison operation and results in a quadratic time complexity. The other operations in the function like checking the number of vertices and edges and returning the result are performed in constant time and don't really impact the overall time complexity. So the dominant factor in the time complexity is the quadratic term and a worst-case time complexity of $\Theta(n^2)$.
