module.exports = {
  apps: {
    wasm: {
      'bubble-sort': {
        description:
          "Convert image to ascii on the browser. This tool allows image to be converted in to text without in file upload to the server. It uses WebAssembly to run native code on the browser to convert image to ascii characters.",
        title: 'Image to Ascii Converter',
        image: 'image-to-ascii.png',
        url: '/app/wasm/image-to-ascii',
      },
      home: {
        description:
          'Explore different application made using Web Assembly.',
        title: 'WebAssembly',
        url: '/app/wasm/',
      },
    },
    sorting: {
      'bubble-sort': {
        description:
          "Bubble Sort is one of the simplest Algorithms. Learn how bubble sort works and visualize it. It's complexity is O(n). It works by repeatedly swapping the adjacent elements if they are in wrong order.",
        title: 'Bubble Sort',
        image: 'bubble.png',
        url: '/app/sorting/bubble-sort',
      },
      'merge-sort': {
        description:
          "Merge Sort is a Divide and Conquer Algorithm like Quick Sort. Learn how Merge sort works and visualize it. It's complexity is O(n logn). It divides input array in two halves, calls itself for the two halves and then merges the two sorted arrays.",
        title: 'Merge Sort',
        image: 'merge.png',
        url: '/app/sorting/merge-sort',
      },
      'quick-sort': {
        description:
          "Quick Sort is a Divide and Conquer Algorithm like Merge Sort. Learn how Quick sort works and visualize it. It's complexity is O(n logn). It picks an element as pivot and partitions the given array around the picked pivot.",
        title: 'Quick Sort',
        image: 'quick.png',
        url: '/app/sorting/quick-sort',
      },
      'heap-sort': {
        description:
          "Heap sort sorts by building a heap tree. Learn how Heap sort works and visualize it. It's complexity is O(n logn). A heap is a partially sorted binary tree that is stored inside an array.",
        title: 'Heap Sort',
        image: 'heap.png',
        url: '/app/sorting/heap-sort',
      },
      'selection-sort': {
        description:
          "Selection sort like its name suggests selects the smallest element at every pass, meaning in every pass an item is placed in order. Learn how Selection sort works and visualize it. It's complexity is O(n^2). Selection ",
        title: 'Selection Sort',
        image: 'selection-sort.png',
        url: '/app/sorting/selection-sort',
      },
      home: {
        description:
          'Learn about different types of Sorting Algorithms following different paradigms. Calculate Complexity, visualize, get programming code and implement it yourself.',
        title: 'Sorting Algorithms',
        url: '/app/sorting/',
      },
    },
    games: {
      home: {
        description:
          'Play games online made using javascript, html and css. View the tutorial to make you own game.',
        title: 'Games',
        url: '/app/games/',
      },
      'snake-game': {
        description:
          'Play snake game online. Made using HTML CSS and javascript.',
        title: 'Snake Game',
        image: 'snake-game.png',
        url: '/app/games/snake-game',
      },
    },
    'graph-search': {
      bfs: {
        description:
          'Breadth First Search (BFS) algorithm traverses a graph in a breadth ward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration. Learn and visualize BFS',
        title: 'Breadth First Search (BFS)',
        image: 'bfs.png',
        url: '/app/graph-search/bfs',
      },
      dfs: {
        description:
          'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Learn Visualize DFS',
        title: 'Depth First Search (DFS)',
        image: 'dfs.png',
        url: '/app/graph-search/dfs',
      },
      'a-star': {
        description:
          "A* is the most popular choice for pathfinding, because it's fairly flexible and can be used in a wide range of contexts. A* is like Dijkstra's Algorithm in that it can be used to find a shortest path. Learn and Visualize A star.",
        title: 'A Star (A*)',
        image: 'a-star.png',
        url: '/app/graph-search/a-star',
      },
      dijkstras: {
        description:
          "One algorithm for finding the shortest path from a starting node to a target node in a weighted graph is Dijkstra's algorithm.  Learn and Visualize Dijkstras",
        title: 'Dijkstras',
        image: 'dijkstras.png',
        url: '/app/graph-search/dijkstras',
      },
      home: {
        description:
          'Learn about different types of Searching Algorithms following different paradigms. Calculate Complexity, visualize, get programming code and implement it yourself.Prims Algorithm,  a star search, dijkstras search, dfs search,bfs search...',
        title: 'Searching Algorithms',
        url: '/app/graph-search/',
      },
    },
    'drawable-graph': {
      bfs: {
        description:
          'Draw and Visualize Graph Algorithms. Breadth First Search (BFS) algorithm traverses a graph in a breadthward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration. Learn and visualize BFS',
        title: 'Breadth First Search (BFS)',
        image: 'bfs-draw.png',
        url: '/app/drawable-graph/bfs',
      },
      dfs: {
        description:
          'Draw and Visualize Graph Algorithms. Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Learn Visualize DFS',
        title: 'Depth First Search (DFS)',
        image: 'dfs-draw.png',
        url: '/app/drawable-graph/dfs',
      },
      'a-star': {
        description:
          "Draw and Visualize Graph Algorithms. A* is the most popular choice for pathfinding, because it's fairly flexible and can be used in a wide range of contexts. A* is like Dijkstra's Algorithm in that it can be used to find a shortest path. Learn and Visualize A star.",
        title: 'A Star (A*)',
        image: 'a-star-draw.png',
        url: '/app/drawable-graph/a-star',
      },
      dijkstras: {
        description:
          "Draw and Visualize Graph Algorithms. One algorithm for finding the shortest path from a starting node to a target node in a weighted graph is Dijkstra's algorithm.  Learn and Visualize Dijkstras",
        title: 'Dijkstras Sort',
        image: 'dijkstras-draw.png',
        url: '/app/drawable-graph/dijkstras',
      },
      home: {
        description:
          'Draw and Visualize Graph Algorithms. Learn about different types of Graph Algorithms following different paradigms. Calculate Complexity, visualize, get programming code and implement it yourself. a star search, dijkstras search, dfs search,bfs search...',
        title: 'Graph Algorithms',
        url: '/app/drawable-graph/',
      },
    },
    'nepali-date': [],
    app: {
      home: {
        description:
          'Explore different interactive and applications made by me. Visualize algorithms, play games and use productivity tools. This apps are all free and available for anyone and made using HTML, CSS and Javascript.',
        title: 'Apps',
        url: '/app/',
      },
    },
  },
}
