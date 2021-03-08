module.exports = function towelSort(matrix = []) {
    let arr = []
    let arrTowel = []
    for (let i = 0; i < matrix.length; i++) {
        i % 2 ? arr.push(matrix[i].reverse()) : arr.push(matrix[i])
    }
    arr.map(item => item.map(subItem => arrTowel.push(subItem)))
    console.log(arrTowel)
    return arrTowel
}
