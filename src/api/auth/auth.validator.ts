import { Joi, schema } from 'express-validation';
import { values } from 'lodash';

export const signup: schema = {
    body: Joi.object({
        user_name: Joi.string().allow('', null),
        phone: Joi.string().required(),
        password: Joi.string().required().min(8).max(45),
    }),
};