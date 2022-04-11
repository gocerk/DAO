const { getAllMotions, getMotionById, motions } = require('../data/motions.js');

module.exports = {
    getMotions: (req, res) => {
        res.json({'motions': getAllMotions()});
    },
    
    // vote == true means upvote, vote == false means downvote
    postVote: (req, res, next) => {
        const {vote, motionId} = req.body; // vote = bool, motionId = Number
        try {
            const motion = getMotionById(motionId)[0];    
            vote ? motion.upvote += 1 : motion.downvote += 1; 
            res.status(200);
            res.json({status: 'success', upvote: motion.upvote, downvote: motion.downvote});
        } catch(e) {
            next(e);
        }
    }
}