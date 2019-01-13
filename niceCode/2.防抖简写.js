
//简单版防抖
export function reoperation(fn, wait)
{
    let timeout = null;
    return function() {
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn.bind(null, ...arguments), wait);
    }
}

function fn(){}
let fun=reoperation.bind(null,fn,300);