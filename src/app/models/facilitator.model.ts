import { Student } from './student.model';
import { Task } from './task.model';
import { Gradde } from './grade.model';

export interface Facilitator {
    id: string;
    students: Student[];
	grades: Grades[];
	tasks: Task[];
}
