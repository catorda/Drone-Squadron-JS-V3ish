import canvas from '../service/canvas';
import DisplayData from './display-data';

export default class DisplayParticleData extends DisplayData {
    constructor(x, y, colour) {
        super(x, y + 25, colour, 'left', 10);
    }

    draw() {
        this.textStyle();
        this.lines.map((line, index) => {
            canvas.ctx.fillText(
                line,
                25,
                (index + 1 - this.lines.length / 2) * 10,
            );
        });
    }
}
