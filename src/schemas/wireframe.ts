export interface WireframeSchema {
  screens: ScreenSchema[];
}

export interface ScreenSchema {
  id: string;
  name: string;
  elements: ElementSchema[];
}

export type ElementSchema =
  | HeaderSchema
  | SearchBarSchema
  | TabsSchema
  | ListSchema
  | FormSchema
  | NavBarSchema;

export interface HeaderSchema {
  type: 'header';
  id: string;
  title: string;
  hasBackButton?: boolean;
  backButtonTarget?: string;
  hasAddButton?: boolean;
  addButtonTarget?: string;
}

export interface SearchBarSchema {
  type: 'searchBar';
  id: string;
  placeholder?: string;
}

export interface TabsSchema {
  type: 'tabs';
  id: string;
  tabs: string[];
  defaultActiveTab?: number;
}

export interface ListSchema {
  type: 'list';
  id: string;
  items: ListItemSchema[];
}

export interface ListItemSchema {
  id: string;
  text: string;
  rightText?: string;
  hasCheckbox?: boolean;
  checked?: boolean;
  target?: string;
}

export interface FormSchema {
  type: 'form';
  id: string;
  fields: FormFieldSchema[];
  submitButtonText: string;
  submitTarget?: string;
}

export type FormFieldSchema =
  | TextInputSchema
  | TextAreaSchema
  | SelectSchema
  | DateInputSchema;

export interface TextInputSchema {
  type: 'textInput';
  id: string;
  label: string;
  placeholder?: string;
}

export interface TextAreaSchema {
  type: 'textArea';
  id: string;
  label: string;
  placeholder?: string;
}

export interface SelectSchema {
  type: 'select';
  id: string;
  label: string;
  options: string[];
}

export interface DateInputSchema {
  type: 'dateInput';
  id: string;
  label: string;
}

export interface NavBarSchema {
  type: 'navBar';
  id: string;
  buttons: NavBarButtonSchema[];
}

export interface NavBarButtonSchema {
  label: string;
  target: string;
}

export const todoAppSchema: WireframeSchema = {
  screens: [
    {
      id: 'home',
      name: 'Home',
      elements: [
        {
          type: 'header',
          id: 'homeHeader',
          title: 'My Tasks',
          hasAddButton: true,
          addButtonTarget: 'addTask'
        },
        {
          type: 'searchBar',
          id: 'homeSearchBar',
          placeholder: 'Search tasks...'
        },
        {
          type: 'list',
          id: 'taskList',
          items: [
            {
              id: 'task1',
              text: 'Grocery Shopping',
              hasCheckbox: true,
              checked: false
            },
            {
              id: 'task2',
              text: 'Book Appointment',
              hasCheckbox: true,
              checked: true
            }
          ]
        },
        {
          type: 'navBar',
          id: 'homeNavBar',
          buttons: [
            { label: 'Home', target: 'home' },
            { label: 'Profile', target: 'profile' }
          ]
        }
      ]
    },
    {
      id: 'addTask',
      name: 'Add Task',
      elements: [
        {
          type: 'header',
          id: 'addTaskHeader',
          title: 'Add New Task',
          hasBackButton: true,
          backButtonTarget: 'home'
        },
        {
          type: 'form',
          id: 'addTaskForm',
          fields: [
            {
              type: 'textInput',
              id: 'taskTitle',
              label: 'Title',
              placeholder: 'Enter task title'
            },
            {
              type: 'textArea',
              id: 'taskDescription',
              label: 'Description',
              placeholder: 'Enter task description'
            },
            {
              type: 'select',
              id: 'taskPriority',
              label: 'Priority',
              options: ['High', 'Medium', 'Low']
            },
            {
              type: 'dateInput',
              id: 'taskDueDate',
              label: 'Due Date'
            }
          ],
          submitButtonText: 'Create Task',
          submitTarget: 'home'
        }
      ]
    },
    {
      id: 'profile',
      name: 'Profile',
      elements: [
        {
          type: 'header',
          id: 'profileHeader',
          title: 'Profile',
          hasBackButton: true,
          backButtonTarget: 'home'
        },
        {
          type: 'form',
          id: 'profileForm',
          fields: [
            {
              type: 'textInput',
              id: 'profileName',
              label: 'Name',
              placeholder: 'Enter your name'
            },
            {
              type: 'textInput',
              id: 'profileEmail',
              label: 'Email',
              placeholder: 'Enter your email'
            }
          ],
          submitButtonText: 'Update Profile',
          submitTarget: 'home'
        },
        {
          type: 'navBar',
          id: 'profileNavBar',
          buttons: [
            { label: 'Home', target: 'home' },
            { label: 'Profile', target: 'profile' }
          ]
        }
      ]
    }
  ]
};
