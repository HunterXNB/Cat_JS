function obj(x) {
    x = x.toString()
    let m = [...new Set([...x])];
    let o = new Object()
    for (let i = 0; i < m.length; i++) {
        let regex = new RegExp(m[i], "ig");
        o[m[i]] = x.match(regex).length

    }
    return o
}