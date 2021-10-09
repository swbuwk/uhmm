let r = Math.round(Math.random()*200),
    g = Math.round(Math.random()*200),
    b = Math.round(Math.random()*200),
    r1 = Math.round(Math.random()*200),
    g1 = Math.round(Math.random()*200),
    b1 = Math.round(Math.random()*200),
    deg = Math.round(Math.random()*100),
    h = 50
    d = {
        r: 1,
        g: 1,
        b: 1,
        r1: 1,
        g1: 1,
        b1: 1,
        deg: 1,
        h: 0.3,
    }

function change(x, xs, max, min) {
    if (x>=max || x<min || Math.random()<0.01) d[xs]=-d[xs]
    return x+=d[xs]
}

setInterval(() => {
    document.documentElement.style.setProperty('--red', r)
    document.documentElement.style.setProperty('--green', g)
    document.documentElement.style.setProperty('--blue', b)
    document.documentElement.style.setProperty('--red1', r1)
    document.documentElement.style.setProperty('--green1', g1)
    document.documentElement.style.setProperty('--blue1', b1)
    document.documentElement.style.setProperty('--deg', `${deg}deg`)
    document.documentElement.style.setProperty('--hint', `${h}%`)

    

    r = change(r, 'r', 255, 0)
    g = change(g, 'g', 255, 0)
    b = change(b, 'b', 255, 0)
    r1 = change(r1, 'r1', 255, 0)
    g1 = change(g1, 'g1', 255, 0)
    b1 = change(b1, 'b1', 255, 0)
    deg = change(deg, 'deg', 360, 0)
    h = change(h, 'h', 75, 25)

}, 1)