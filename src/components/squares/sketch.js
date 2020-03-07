export default (sketch_container) => p => {
    const NUM = 100,
        EXP_T = 5;

    let vmin = Math.min(
        sketch_container.clientWidth,
        sketch_container.clientHeight
    ),
        vmax = Math.max(
            sketch_container.clientWidth,
            sketch_container.clientHeight
        );

    let x_offset = sketch_container.clientWidth / 5,
        y_offset = sketch_container.clientHeight / 3;

    p.state = {
        objs: [],
        exps: []
    };

    p.setup = () => {
        p.createCanvas(sketch_container.clientWidth, sketch_container.clientHeight);
        for (let i = 0; i < NUM; i++) {
            p.state.objs.push({
                d: Math.random() * vmax,
                r: Math.random() * 2 * Math.PI
            });
        }
    };
    p.draw = () => {


        p.translate(x_offset, y_offset);
        p.colorMode(p.HSB, 1);
        p.rectMode(p.CENTER);

        p.background(0);

        let mx = p.mouseX - x_offset,
            my = p.mouseY - y_offset;

        for (let i in p.state.objs) {
            let d = p.state.objs[i].d,
                r = p.state.objs[i].r;
            let x = d * Math.cos(r),
                y = d * Math.sin(r);
            let a = Math.atan2(
                my - d * Math.sin(r),
                mx - d * Math.cos(r)
            );
            let w = d * 0.1;

            let dc = Math.hypot(x - mx, y - my);

            let nearCursor = dc < vmax / 4,
                touchingCursor = dc < w;

            let c = nearCursor
                ? (dc / vmax) * 4
                : (p.noise(i, p.millis() / 1000) * 2) % 1,
                v = nearCursor ? 0.7 : 0.3;

            p.push();

            p.translate(x, y);
            if (nearCursor) {
                p.rotate(a);
            } else {
                p.rotate(r);
            }

            p.fill(c, v, v, 0.2);
            p.stroke(c, v, v);

            p.rect(0, 0, w, w);
            p.line(0, 0, w / 2, 0);

            p.pop();

            p.stroke(1, 0.2);
            p.line(
                d * 2 * Math.cos(r + Math.PI / 2),
                d * 2 * Math.sin(r + Math.PI / 2),
                (d * 2 + 30) * Math.cos(r + Math.PI / 2),
                (d * 2 + 30) * Math.sin(r + Math.PI / 2)
            );
            p.line(
                d * 2 * Math.cos(r - Math.PI / 2),
                d * 2 * Math.sin(r - Math.PI / 2),
                (d * 2 + 30) * Math.cos(r - Math.PI / 2),
                (d * 2 + 30) * Math.sin(r - Math.PI / 2)
            );

            p.stroke(1, 0.2);
            if (nearCursor) {
                p.line(x, y, mx, my);
            }

            if (d > Math.hypot(p.width, p.height)) {
                p.state.objs[i].d = 0;
            }
            if (touchingCursor) {
                p.state.exps.push([x, y, 0, w]);
                p.state.objs[i].d = 0;
            }

            p.state.objs[i].d += p.noise(i, p.millis() / 1000) * 4;
        }

        for (let e in p.state.exps) {
            let [x, y, t, w] = p.state.exps[e];
            p.state.exps[e][2]++; // t++

            p.stroke(1);
            p.fill(1, 0.2);
            p.circle(x, y, (Math.max(w, 20) * t) / EXP_T);
        }
        p.state.exps = p.state.exps.filter(function (e) {
            return e[2] <= EXP_T;
        });

        p.stroke(1);
        p.strokeWeight(2);
        p.noFill();

        p.beginShape();
        p.vertex(0, 0);
        p.vertex(vmin / 32, vmin / 32);
        p.vertex(vmin / 4, vmin / 32);
        p.endShape();
    };

    p.windowResized = () => {
        vmin = Math.min(
            sketch_container.clientWidth,
            sketch_container.clientHeight
        );
        vmax = Math.max(
            sketch_container.clientWidth,
            sketch_container.clientHeight
        );

        x_offset = sketch_container.clientWidth / 5;
        y_offset = sketch_container.clientHeight / 3;

        p.resizeCanvas(sketch_container.clientWidth, sketch_container.clientHeight);
    };
};