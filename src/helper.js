module.exports = {
    isHermit: function(content) {
        if (content.includes('outside')
        || content.includes('outdoors')
        || content.includes('travel')
        || content.includes('summer')
        || content.includes('vacation')
        || content.includes('covid')
        || content.includes('corona')
        || content.includes('virus')
        || content.includes('park')
        || content.includes('patio')
        || content.includes('bbq')
        || content.includes('party')
        || content.includes('camp')
        || content.includes('walk')
        || content.includes('stroll')
        || content.includes('jog')
        || content.includes('cottage')
        || content.includes('dacha')
        || content.includes('lodge')) {
            return true;
        }
        return false;
    }
}