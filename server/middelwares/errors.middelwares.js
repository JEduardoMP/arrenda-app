exports.globalErrorHandler = (err, req, res, next) => {
	res.status(404).send({
		message : err.errors ? 'firstname and phone is required' : err.message
	})
};
