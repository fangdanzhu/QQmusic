

//取出数组第一项id的值
export const get = (p, o) =>
    p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);

let ary=[{id:'a',value:'b'},{id:'b',value:'c'},{id:'d',value:'e'}];
let value=get(['0','id'],ary);