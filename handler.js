'use strict';

module.exports.hello = async (event) => {
  return { message: 'Lambda Event!', event };
};
