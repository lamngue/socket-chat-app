var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage', () => {
	it('should generate the correct message obj', () => {
		//store res in variable
		var from = 'Jen';
		var text = 'dmm';
		var message = generateMessage(from,text);
		expect(message.createdAt).toBe('number');
		expect(message).toInclude({
			from,
			text
		});
		//assert from match

		//assert text match

		//assert createdAt is number
	});
});