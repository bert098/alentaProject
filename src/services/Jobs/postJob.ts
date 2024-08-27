const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';
import Task from '../..//models/task'

class postJobService {
  public path = '/jobs';
  public type = "post"
  public service = async (request: express.Request, response: express.Response) => {
    console.log(request.body)
    const task = new Task(request.body);
    await task.save();
    response.status(201).json(task);
  }

}

export default postJobService;