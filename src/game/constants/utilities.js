import T20 from '../utility/thruster/T20';
import T18 from '../utility/thruster/T18';
import T15 from '../utility/thruster/T15';
import T12 from '../utility/thruster/T12';
import T10 from '../utility/thruster/T10';
import S15 from '../utility/steering/S15';
import S12 from '../utility/steering/S12';
import S10 from '../utility/steering/S10';
import S8 from '../utility/steering/S8';
import S6 from '../utility/steering/S6';
import S4 from '../utility/steering/S4';
import G360 from '../utility/gimbal/G360';
import G240 from '../utility/gimbal/G240';
import G180 from '../utility/gimbal/G180';
import G120 from '../utility/gimbal/G120';
import G90 from '../utility/gimbal/G90';
import G60 from '../utility/gimbal/G60';
import G40 from '../utility/gimbal/G40';
import SC900 from '../utility/scanner/SC900';
import SC800 from '../utility/scanner/SC800';
import SC700 from '../utility/scanner/SC700';
import SC600 from '../utility/scanner/SC600';
import SC500 from '../utility/scanner/SC500';
import SC400 from '../utility/scanner/SC400';
import SC300 from '../utility/scanner/SC300';
import SC200 from '../utility/scanner/SC200';

export const gimbals = {
    'G40': G40,
    'G60': G60,
    'G90': G90,
    'G120': G120,
    'G180': G180,
    'G240': G240,
    'G360': G360,
};

export const scanners = {
    'SC200': SC200,
    'SC300': SC300,
    'SC400': SC400,
    'SC500': SC500,
    'SC600': SC600,
    'SC700': SC700,
    'SC800': SC800,
    'SC900': SC900,
};

export const steering = {
    'S4': S4,
    'S6': S6,
    'S8': S8,
    'S10': S10,
    'S12': S12,
    'S15': S15,
};

export const thrusters = {
    'T10': T10,
    'T12': T12,
    'T15': T15,
    'T18': T18,
    'T20': T20,
};
