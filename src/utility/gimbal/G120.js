import Gimbal from '../gimbal';

export default class G120 extends Gimbal {
    constructor() {
        super(0.175 * 6, 0.16);
    }
}