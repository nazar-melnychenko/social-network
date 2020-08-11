export const required = (value) => (
	value
		? undefined
		: "Field is required"
)

export const maxLength = (maxLength) => (value) => (
	value && value.length > maxLength
		? `Max length is ${maxLength} symbols`
		: undefined
)

export const email = (value) => (
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined
)