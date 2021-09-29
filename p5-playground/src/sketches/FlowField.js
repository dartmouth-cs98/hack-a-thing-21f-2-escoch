export default function FlowField(p5) {
    var points = [];
    var mult = 0.001;

    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        p5.background(10);
        p5.angleMode(p5.DEGREES);
        p5.noiseDetail(1);
        var density = 20;
        var space = p5.width / density;

        for (let x = 0; x < p5.width; x += space) {
            for (let y = 0; y < p5.height; y += space) {
                var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10));
                points.push(p)
            }
        }
    }


    p5.draw = () => {
        p5.noStroke();
        p5.fill(255)

        for (let index = 0; index < points.length; index++) {
            var r = p5.map(points[index].x, 0, p5.width, 50, 255);
            var g = p5.map(points[index].y, 0, p5.width, 50, 255);
            var b = p5.map(points[index].x, 0, p5.width, 255, 50);

            p5.fill(r, g, b);
            var angle = p5.map(p5.noise(points[index].x * mult, points[index].y * mult), 0, 1, 0, 720);
            points[index].add(p5.createVector(p5.cos(angle), p5.sin(angle)));
            p5.ellipse(points[index].x, points[index].y, 1);

        }
    }
}

