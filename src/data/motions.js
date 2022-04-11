const Motion = require('../models/Motion');

const motions = [new Motion('Test Motion 1', 1), new Motion('Test Motion 2', 2)];

module.exports = {
    motions,
    getAllMotions: () => motions,
    getMotionById: (id) => motions.filter(motion => motion.motionId === id),
}