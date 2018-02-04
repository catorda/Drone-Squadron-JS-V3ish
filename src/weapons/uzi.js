import Weapon from './weapon';
import NineMM from '../ammo/nine-mm';
import { context } from '../constants';

export default class Uzi extends Weapon {
    constructor(x, y, angle, gimbal) {
        const fireRate = 1;
        const round = NineMM;
        super(x, y, angle, gimbal, round, fireRate);
    }

    draw() {
        context.translate(this.position.x, this.position.y);
        context.rotate(this.gimbal.vector.getAngle() + this.droneAngle);
        context.beginPath();
        context.lineTo(10, -1);
        context.lineTo(10, 1);
        context.lineTo(5, 1);
        context.lineTo(5, -1);
        context.strokeStyle = '#000';
        context.stroke();
        context.fillStyle = '#000';
        context.fill();
        context.resetTransform();
    }

}