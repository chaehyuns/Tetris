const BLOCKS = {
    square: [  //네모
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
    ],
    bar: [ //1자

        [
            [2, -1],
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
        ],

        [
            [2, -1],
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
        ],

    ],
    tree: [ //  ㅗ 블록 변경 
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [1, 0],
            [0, 1],
            [1, 1],
            [1, 2]
        ],
        [
            [2, 1],
            [0, 1],
            [1, 1],
            [1, 2]
        ],
        [
            [2, 1],
            [1, 2],
            [1, 1],
            [1, 0]
        ],
    ],
    zee: [ //z모양
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1]
        ],
        [
            [0, 1],
            [1, 0],
            [1, 1],
            [0, 2]
        ],
        [
            [0, 1],
            [1, 1],
            [1, 2],
            [2, 2]
        ],
        [
            [2, 0],
            [2, 1],
            [1, 1],
            [1, 2]
        ],
    ],
    elLeft: [ //ㄱ자 왼쪽
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 2]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
        [
            [1, 0],
            [2, 0],
            [1, 1],
            [1, 2]
        ],

    ],
    elRight: [ //ㄱ자 오른쪽
        [
            [1, 0],
            [2, 0],
            [1, 1],
            [1, 2]
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [2, 2]
        ],
    ]
}

export default BLOCKS;