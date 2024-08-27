const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import Task from '../..//models/task'

class putJobService {
  public path = '/jobs/:id';
  public type = "put"
  public service = async (request: express.Request, response: express.Response) => {
    const task = await Task.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).json(task);
  }

}

export default putJobService;