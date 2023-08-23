import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { tasks } from './data/tasks';
import { UpdateTaskDTO } from './dto/update-task.id';

@Injectable()
export class TaskService {
    async createTask(data:CreateTaskDTO){
        return {
            statusCode: 200,
            data,
        };
    }

    async getAllTask(){
        return {
            statusCode: 200,
            data: tasks
        }
    }

    async getTaskById(task_id:number){
        return {
            statusCode: 200,
                // panggil si task_id
            data: tasks.find((task)=> task.task_id == task_id)
        }  
    }

    async updateTaskById(task_id:number, data:UpdateTaskDTO){
        return {
            statusCode: 200,
                // disini karena belum ada database, maka saya isi data:data dulu saja.
            data: data,
        }   
    }

    // fungsi delete ini hanya contoh saja karena belum ada database nya.
    async deleteTaskById(task_id:number){
        return {
            statusCode: 200,
            data: tasks.find((task)=> task.task_id == task_id),
            message: "Success delete data..."
        }
    }

}
