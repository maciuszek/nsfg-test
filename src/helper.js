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
        || content.includes('camping')) {
            return true;
        }
        return false;
    }
}