export interface IUser {
  id: string;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export interface IProject {
  adminId?: string;
  id?: string;
  name?: string;
  description?: string;
  coverImage?: string;
  totalTaks?: number;
  completedTasks?: number;
  users?: IUser[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ITask {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  tags: ITag[];
  assingnee: IUser[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ITag {
  name: string;
  color: string;
}

type TaskStatus = 'to-do' | 'in-progress' | 'completed';