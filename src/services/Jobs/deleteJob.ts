const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';
import Task from '../..//models/task'

class deleteJobService {
  public path = '/jobs/:id';
  public type = "delete"
  public service = async (request: express.Request, response: express.Response) => {
    try {
      await Task.findByIdAndDelete(request.params.id);
      response.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      response.status(400).json({ message: "Could Not Delete" });
    }
  }

}

export default deleteJobService;