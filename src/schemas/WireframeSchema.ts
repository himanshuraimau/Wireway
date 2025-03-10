// Define types for wireframe components
export interface WireframeSchema {
  screens: ScreenSchema[];
}

export interface ScreenSchema {
  id: string;
  name: string;
  elements: ElementSchema[];
  layout?: {
    padding?: string;
    gap?: string;
    maxWidth?: string;
    background?: string;
  };
  transitions?: {
    enter?: string;
    exit?: string;
  };
}

export type ElementSchema =
  | HeaderSchema
  | SearchBarSchema
  | TabsSchema
  | ListSchema
  | FormSchema
  | NavBarSchema
  | CardSchema        // New
  | ImageSchema       // New
  | ButtonSchema      // New
  | DividerSchema     // New
  | TextBlockSchema;  // New

export interface BaseElementSchema {
  type: string;
  id: string;
}

export interface HeaderSchema extends BaseElementSchema {
  type: 'header';
  title: string;
  hasBackButton?: boolean;
  hasAddButton?: boolean;
  backButtonTarget?: string; // Screen ID to navigate to
  addButtonTarget?: string; // Screen ID to navigate to
  actions?: ButtonSchema[];
  subtitle?: string;
  fixed?: boolean;
}

export interface SearchBarSchema extends BaseElementSchema {
  type: 'searchBar';
  placeholder?: string;
}

export interface TabsSchema extends BaseElementSchema {
  type: 'tabs';
  tabs: string[];
  defaultActiveTab?: number;
}

export interface ListSchema extends BaseElementSchema {
  type: 'list';
  items: ListItemSchema[];
}

export interface ListItemSchema {
  id: string;
  text: string;
  rightText?: string;
  hasCheckbox?: boolean;
  checked?: boolean;
  target?: string; // Screen ID to navigate to when clicked
  icon?: string;
  badge?: {
    text: string;
    color?: string;
  };
  subtitle?: string;
  image?: string;
}

export interface FormSchema extends BaseElementSchema {
  type: 'form';
  fields: FormFieldSchema[];
  submitButtonText: string;
  submitTarget?: string; // Screen ID to navigate to on submit
}

export interface FormFieldSchema {
  type: 'textInput' | 'textArea' | 'select' | 'dateInput';
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    customError?: string;
  };
  disabled?: boolean;
  defaultValue?: string | number | boolean;
  options?: string[]; // Add this line
}

export interface NavBarSchema extends BaseElementSchema {
  type: 'navBar';
  buttons: NavButtonSchema[];
}

export interface NavButtonSchema {
  label: string;
  target: string; // Screen ID to navigate to
}

export interface CardSchema extends BaseElementSchema {
  type: 'card';
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  actions?: ButtonSchema[];
  direction?: 'horizontal' | 'vertical';
  target?: string;
}

export interface ImageSchema extends BaseElementSchema {
  type: 'image';
  src: string;
  alt?: string;
  aspectRatio?: string;
  fit?: 'cover' | 'contain';
  clickable?: boolean;
  target?: string;
}

export interface ButtonSchema extends BaseElementSchema {
  type: 'button';
  text: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  icon?: string;
  target?: string;
  disabled?: boolean;
}

export interface DividerSchema extends BaseElementSchema {
  type: 'divider';
  text?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface TextBlockSchema extends BaseElementSchema {
  type: 'textBlock';
  content: string;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  alignment?: 'left' | 'center' | 'right';
}

// Example schema for a Todo app
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
          id: 'searchBar',
          placeholder: 'Search tasks...'
        },
        {
          type: 'tabs',
          id: 'filterTabs',
          tabs: ['All', 'Today', 'Upcoming'],
          defaultActiveTab: 0
        },
        {
          type: 'list',
          id: 'todoList',
          items: [
            {
              id: 'task1',
              text: 'Task 1',
              rightText: 'Today',
              hasCheckbox: true,
              checked: false,
              target: 'taskDetail'
            },
            {
              id: 'task2',
              text: 'Task 2',
              rightText: 'Tomorrow',
              hasCheckbox: true,
              checked: false
            }
          ]
        },
        {
          type: 'navBar',
          id: 'navBar',
          buttons: [
            {
              label: 'Home',
              target: 'home'
            },
            {
              label: 'Categories',
              target: 'categories'
            },
            {
              label: 'Settings',
              target: 'settings'
            }
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
          title: 'Add Task',
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
              required: true
            },
            {
              type: 'textArea',
              id: 'taskDescription',
              label: 'Description'
            },
            {
              type: 'dateInput',
              id: 'dueDate',
              label: 'Due Date'
            },
            {
              type: 'select',
              id: 'category',
              label: 'Category',
              options: ['Work', 'Personal', 'Shopping', 'Health']
            }
          ],
          submitButtonText: 'Add Task',
          submitTarget: 'home'
        }
      ]
    },
    {
      id: 'categories',
      name: 'Categories',
      elements: [
        {
          type: 'header',
          id: 'categoriesHeader',
          title: 'Categories',
          hasAddButton: true
        },
        {
          type: 'list',
          id: 'categoriesList',
          items: [
            {
              id: 'category1',
              text: 'Work',
              rightText: '5'
            },
            {
              id: 'category2',
              text: 'Personal',
              rightText: '3'
            }
          ]
        },
        {
          type: 'navBar',
          id: 'navBar',
          buttons: [
            {
              label: 'Home',
              target: 'home'
            },
            {
              label: 'Categories',
              target: 'categories'
            },
            {
              label: 'Settings',
              target: 'settings'
            }
          ]
        }
      ]
    },
    {
      id: 'settings',
      name: 'Settings',
      elements: [
        {
          type: 'header',
          id: 'settingsHeader',
          title: 'Settings'
        },
        {
          type: 'list',
          id: 'settingsList',
          items: [
            {
              id: 'setting1',
              text: 'Dark Mode'
            },
            {
              id: 'setting2',
              text: 'Notifications'
            }
          ]
        },
        {
          type: 'navBar',
          id: 'navBar',
          buttons: [
            {
              label: 'Home',
              target: 'home'
            },
            {
              label: 'Categories',
              target: 'categories'
            },
            {
              label: 'Settings',
              target: 'settings'
            }
          ]
        }
      ]
    }
  ]
};

export {
  socialAppSchema,
  ecommerceAppSchema,
  newsAppSchema,
  weatherAppSchema
} from './mockApps';