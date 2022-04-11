class Motion {
    // motionid is the id of the motion that the vote is for
    constructor(name, motionId) {
        this.name = name;
        this.motionId = motionId;
        this.upvote = 0;
        this.downvote = 0;
    }  

    getRates() {
        return { upvote: this.upvote, downvote: this.downvote };
    }
}

module.exports = Motion;