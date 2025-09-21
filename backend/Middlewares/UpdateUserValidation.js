const Joi = require('joi');

const updateUserValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        userType: Joi.string().valid('voter', 'candidate').required(),
        name: Joi.string().min(3).max(100).optional(),
        cnic: Joi.string()
            .pattern(/^[0-9]{5}-[0-9]{7}-[0-9]$/)
            .required(),
        phone: Joi.string()
            .pattern(/^[0-9]{10,15}$/) // Adjust based on your phone number format
            .required(),
        // phone_verified: Joi.boolean().optional(),
        // email_verified: Joi.boolean().optional(),
        registered_district: Joi.string().required(),
        // has_voted: Joi.boolean().optional(),
        // password: Joi.string().min(4).max(100).optional(),

        // Conditional validation for candidate-specific fields
        party: Joi.when('userType', {
            is: 'candidate',
            then: Joi.string().required(),
            otherwise: Joi.forbidden(),
        }),
        district: Joi.when('userType', {
            is: 'candidate',
            then: Joi.string().required(),
            otherwise: Joi.forbidden(),
        }),
        bio: Joi.string().optional(),
        vote_count: Joi.number().integer().min(0).optional(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details.map(err => err.message), // Return detailed errors
        });
    }
    next();
};

module.exports = {
    updateUserValidation,
};
