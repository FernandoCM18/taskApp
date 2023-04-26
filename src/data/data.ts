import { IProject, User, ITask } from '../interfaces';

export const USERS: User[] = [
  {
    id: '1',
    name: 'Fernando',
    lastName: 'Calderon',
    email: 'fernando@test.com',
    password: '123456',
    avatar: 'https://github.com/fernandocm18.png',
  },
  {
    id: '2',
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@test.com',
    password: '123456',
    avatar: 'https://github.com/juan.png',
  },
  {
    id: '3',
    name: 'Pedro',
    lastName: 'Gomez',
    email: 'pedro@test.com',
    password: '123456',
    avatar: 'https://github.com/pedro.png',
  }
];

export const PROJECTS: IProject[] = [
  {
    id: 'idproject1',
    name: 'Project 1',
    description: 'Description project 1',
    coverImage: 'https://picsum.photos/id/23/200/300',
    adminId: '1',
    completedTasks: 1,
    totalTaks: 2,
    users: [
      USERS[0],
      USERS[1],
    ],
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: 'idproject2',
    name: 'Project 2',
    description: 'Description project 2',
    coverImage: 'https://picsum.photos/id/200/200/300',
    adminId: '1',
    completedTasks: 0,
    totalTaks: 1,
    users: [
      USERS[0],
      USERS[2],
    ],
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: 'idproject3',
    name: 'Project 3',
    description: 'Description project 3',
    coverImage: 'https://picsum.photos/id/237/200/300',
    adminId: '1',
    completedTasks: 1,
    totalTaks: 1,
    users: [
      USERS[0],
      USERS[1],
      USERS[2],
    ],
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
];

export const TASKS: ITask[] = [
  {
    projectId: 'idproject1',
    id: 'idtask1',
    assingnee: [
      {
        id: '1',
        avatar: 'https://github.com/fernandocm18.png'
      },
      {
        id: '2',
        avatar: 'https://github.com/juan.png',
      },
      {
        id: '3',
        avatar: 'https://github.com/pedro.png'
      },
      {
        id: '3',
        avatar: 'https://github.com/pedro.png'
      },
      {
        id: '3',
        avatar: 'https://github.com/pedro.png'
      }
    ],
    title: 'Task 1',
    description: 'Description task 1',
    status: 'completed',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    tags: [
      {
        name: 'important',
        color: 'red',
      },
      {
        name: 'urgent',
        color: 'blue',
      },
      {
        name: 'low',
        color: 'green',
      }
    ]
  },
  {
    projectId: 'idproject1',
    id: 'idtask2',
    title: 'Task 2',
    assingnee: [
      {
        id: '1',
        avatar: 'https://github.com/fernandocm18.png'
      }
    ],
    description: 'Description task 2',
    status: 'in-progress',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    tags: [
      {
        name: 'important',
        color: 'red',
      },
      {
        name: 'urgent',
        color: 'blue',
      }
    ]
  },
  {
    projectId: 'idproject2',
    id: 'idtask3',
    title: 'Task 1 project 2',
    description: 'Description task 1 project 2',
    assingnee: [
      {
        id: '1',
        avatar: 'https://github.com/fernandocm18.png'
      }
    ],
    status: 'in-progress',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    tags: [
      {
        name: 'important',
        color: 'red',
      },
      {
        name: 'urgent',
        color: 'blue',
      }
    ]
  },
  {
    projectId: 'idproject3',
    id: 'idtask4',
    title: 'Task 1 project 3',
    description: 'Description task 1 project 3',
    assingnee: [
      {
        id: '1',
        avatar: 'https://github.com/fernandocm18.png'
      },
      {
        id: '2',
        avatar: 'https://github.com/juan.png',
      },
      {
        id: '3',
        avatar: 'https://github.com/pedro.png',
      }
    ],
    status: 'completed',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    tags: [
      {
        name: 'important',
        color: 'red',
      }
    ]
  }
];