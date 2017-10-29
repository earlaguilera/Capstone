import { Student } from './student.model';
import { Task } from './task.model';

export interface Facilitator {
    id: string;
    students: Student[];
	grades: Grades[];
	tasks: Task[];
}

export interface Grades{
	student: string;
	task_id: string;
	grade: string;
}