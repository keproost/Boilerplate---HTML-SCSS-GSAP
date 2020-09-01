module.exports = function (duration) {
    return function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, duration);
        });
    };
};
