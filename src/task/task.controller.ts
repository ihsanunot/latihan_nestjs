import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.id';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    // Post Sebuah Task
    @Post()
    async createTask(@Body() body: CreateTaskDTO){
        return await this.taskService.createTask(body);
    }
    

    // Panggil Semua Task
    @Get()
    async getAllTask(){
        return await this.taskService.getAllTask();
    }

    // Panggil by Id
    @Get('/:task_id')
    async getTaskById(@Param('task_id') task_id){
        return await this.taskService.getTaskById(task_id);
    }

    // Update Task
    @Patch('/:task_id')
    async updateTaskById(@Param('task_id') task_id, @Body() body:UpdateTaskDTO){
        return await this.taskService.updateTaskById(task_id, body);
    }

    //Delete Task
    @Delete('/:task_id')
    async deleteTaskById(@Param('task_id') task_id){
        return await this.taskService.deleteTaskById(task_id);
    }

}
