const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import Task from '../..//models/task'

class getJobService {
    public path = '/jobs';
    public type = "get"
    public service = async (request: express.Request, response: express.Response) => {

        if (request.query.id!) {
            const tasks = await Task.findById(request.query.id!);
            response.status(200).json(tasks);
        } else {
            const tasks = await Task.find();
            response.status(200).json(tasks);
            
        }
    }

}

export default getJobService;