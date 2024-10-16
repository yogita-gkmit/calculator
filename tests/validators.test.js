const {validateEmail} = require('../validators/index.js')

test('test email validation', () => {
	expect(validateEmail('acg.com')).toBe("Invalid Email")
})

