# Belajar DTO (Data Transfer Object)

DTO di dalam Nest JS adalah berupa Class yang berisi type data yang bisa digunakan sebagai **INTERFACE** atau object dari data yang dikirim oleh client.

Implementasi nya penggunaan DTO adalah  di dalam Controller.

Pertama, buat **Body** di dalam controller <= implement dari createTask DTO.

Kedua, buat di dalam **Service** nama harus sama dengan di controller.

Ketiga buat folder DTO, lalu bikin file dengan nama :

"create-task.dto.ts"

Keempat, export class DTO bikin attribute nya, lalu import ke dalam **Controller**.

Kelima bikin @Body body:CreateTaskDTO, dan si body nya ini masukan sebagai parameter di dalam createTask Function yang ada di dalam service.

```
return await this.taskService.createTask(body);
```

Keenam, hasil error karena kita belum menambahkan parameter nya di dalam service, maka kita buat parameter nya di dalam service.

```
async createTask(data:CreateTaskDTO){...}
```
Notes : CreateTaskDTO adalah implement nya.


Ketujuh, coba testing menampilkan data yang dikirim dari sisi client 

```
export class TaskService {
    async createTask(data:CreateTaskDTO){
        return data.task_name; // karena pakai DTO
    }
}
```

Lalu tinggal coba test di postman.

Testing :

Method : Post

http://localhost:3000/task

Body(JSON) :

```
{
  "task_name": "Testing DTO",
  "task_description" : "Lagi Belajar DTO Nest JS  "
}
```

Sesuai dari data create-tast.dto.ts di dalam folder dto.

Kesembilan, di service kita coba men-return sebagai JSON.

```
    async createTask(data:CreateTaskDTO){
        return {
            statusCode: 200,
            data,
        };
    }

```

Terus test lagi di Postman.

Intinya DTO adalah data yang di kirim ke sisi server.

---

### Buat Mockup Data untuk GetAllData

Untuk getAllTask() kita coba pakai Mockup data

Bikin folder baru di dalam folder task dengan nama data, lalu bikin tasks.ts

didalamnya akan berisi mockup untuk sementara data nya, 

Contoh :

```
// bikin mockup data

export interface Task{
    task_id: number;
    task_name: string;
    task_description: string;
}

export const tasks:Task[] = [
    {
        task_id: 1,
        task_name: 'Task 1',
        task_description: 'Task 1 Deskripsi dari Ayana'
    },
        {
        task_id: 2,
        task_name: 'Task 2',
        task_description: 'Task 2 Deskripsi dari Mona'
    },
        {
        task_id: 3,
        task_name: 'Task 3',
        task_description: 'Task 3 Deskripsi dari Neno'
    },
];
```

Baru kita tambahkan ke getAllTask yang ada di task.service

```
    async getAllTask(){
        return {
            statusCode: 200,
            data: tasks
        }
    }
```

Lalu di hit lagi ke postman.

---

Get Task By ID

Ambil data task berdasarkan ID Task, kita buat di service fungsi untuk getTaskById nya.

```
    async getTaskById(task_id:number){
        return {
            statusCode: 200,
                                    // panggil si task_id
            data: tasks.find((task)=> task.task_id == task_id)
        }  
    }
// sesuai sama data mockup task_id

```

Lalu kita panggil di Controller.

```
    @Get('/:task_id')
    async getTaskById(@Param('task_id') task_id){
        return await this.taskService.getTaskById(task_id);
    }
```

Lalu tinggal hit aja di Postman, misalkan mau hit Id yg nomor 1 tinggal method GET lalu http://localhost:3000/task/1 lalu Send.

---

### Membuat Update API

Membuat Fungsi Update untuk merubah task berdasarkan ID.

Untuk membuat nya mirip mirip hanya penamaan nya saja dan di poles sedikit.

nama nya jadi updateTaskId di task.service, lalu di task.controller nya di parameter nya kita membuat DTO lagi.


Kita membuat DTO di folder DTO, kita bisa save as atau copy menjadi update-task.id.ts & jangan lupa untuk mengganti sedikit nama class nya.

Berhubung atribute nya isi nya sama yang di update-task dengan yang create-task, jadi kita buat Parameter nya sama.


Kemudian dari controller kita buat fungsi yang sama, tapi Method nya adalah @Patch biasa nya ada PUT (mengganti semua data) dan Patch (mengganti sebagian data) lalu endpoint nya juga saya samakan di ('/:task_id').


Jangan lupa bikin di task.service nya seperti ini (sama dengan yang diatas cuma beda di data saja):

```
    async updateTaskById(task_id:number, data:UpdateTaskDTO){
            return {
            statusCode: 200,
                // disini karena belum ada database, maka saya isi data:data dulu saja.
            data: data,
        }   
    }
```

Lalu kita bisa Hit lagi ke Postman, lalu method patch ke ​http://localhost:3000/task/1 
jika isi nya kosong, itu karena kita belum mengisi data untuk di update nya.

Jadi bisa coba update data body di json postman sesuai task_name atau yang lain nya yang ada di atribut DTO untuk sisi Client.

contoh :

```
PATCH - > ​http://localhost:3000/task/1 -> Body -> JSON -> isi seperti ini :

{
  "task_name" : "Vega Rismawati",
  "task_description" : "Seorang Gitaris"
}

```

Lalu Send dan lihat hasilnya.

---

### Delete Task

Ada 1 endpoint lagi yaitu Delete data beserta ID yang dikirim oleh Clent.