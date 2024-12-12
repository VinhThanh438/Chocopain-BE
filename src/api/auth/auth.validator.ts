import { Joi, schema } from 'express-validation';
import { values } from 'lodash';

export const signup: schema = {
    body: Joi.object({
        user_name: Joi.string().allow('', null),
        phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password: Joi.string().required().min(8).max(45),
    }),
};