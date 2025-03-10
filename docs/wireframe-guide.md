# Wireframe Creation Guide

## Schema Structure
A wireframe consists of multiple screens, each containing different UI elements. Here's how to structure your wireframe:

```typescript
{
  "screens": [
    {
      "id": "uniqueScreenId",
      "name": "Screen Name",
      "elements": [] // Array of UI elements
    }
  ]
}
```

## Available Elements

### 1. Header
```typescript
{
  "type": "header",
  "id": "uniqueId",
  "title": "Page Title",
  "hasBackButton": true, // optional
  "hasAddButton": true,  // optional
  "backButtonTarget": "screenId", // optional: screen to navigate on back
  "addButtonTarget": "screenId"   // optional: screen to navigate on add
}
```

### 2. Search Bar
```typescript
{
  "type": "searchBar",
  "id": "uniqueId",
  "placeholder": "Search..." // optional
}
```

### 3. Tabs
```typescript
{
  "type": "tabs",
  "id": "uniqueId",
  "tabs": ["Tab 1", "Tab 2"],
  "defaultActiveTab": 0 // optional: default selected tab index
}
```

### 4. List
```typescript
{
  "type": "list",
  "id": "uniqueId",
  "items": [
    {
      "id": "itemId",
      "text": "Item text",
      "rightText": "Optional right text",
      "hasCheckbox": true, // optional
      "checked": false,    // optional
      "target": "screenId" // optional: screen to navigate on click
    }
  ]
}
```

### 5. Form
```typescript
{
  "type": "form",
  "id": "uniqueId",
  "fields": [
    {
      "type": "textInput",
      "id": "fieldId",
      "label": "Field Label",
      "placeholder": "Optional placeholder",
      "required": true // optional
    }
    // More fields...
  ],
  "submitButtonText": "Submit",
  "submitTarget": "screenId" // optional: screen to navigate on submit
}
```

Form Field Types:
- `textInput`: Single line text input
- `textArea`: Multi-line text input
- `select`: Dropdown with options
- `dateInput`: Date picker

### 6. Navigation Bar
```typescript
{
  "type": "navBar",
  "id": "uniqueId",
  "buttons": [
    {
      "label": "Button Text",
      "target": "screenId" // screen to navigate to
    }
  ]
}
```

### 7. Card
```typescript
{
  "type": "card",
  "id": "uniqueId",
  "title": "Card Title",
  "subtitle": "Optional subtitle",
  "content": "Card content text",
  "image": "image-url",
  "direction": "vertical",
  "actions": [
    {
      "type": "button",
      "id": "btn1",
      "text": "Action",
      "target": "screenId"
    }
  ]
}
```

### 8. Image
```typescript
{
  "type": "image",
  "id": "uniqueId",
  "src": "image-url",
  "alt": "Image description",
  "aspectRatio": "16:9",
  "fit": "cover",
  "clickable": true,
  "target": "screenId"
}
```

### 9. Button
```typescript
{
  "type": "button",
  "id": "uniqueId",
  "text": "Click me",
  "variant": "primary",
  "icon": "icon-name",
  "target": "screenId",
  "disabled": false
}
```

### 10. Divider
```typescript
{
  "type": "divider",
  "id": "uniqueId",
  "text": "Optional text",
  "orientation": "horizontal"
}
```

### 11. Text Block
```typescript
{
  "type": "textBlock",
  "id": "uniqueId",
  "content": "Text content",
  "variant": "body",
  "alignment": "left"
}
```

## Screen Layout Configuration
You can configure screen-level layout properties:

```typescript
{
  "id": "screenId",
  "name": "Screen Name",
  "layout": {
    "padding": "16px",
    "gap": "12px",
    "maxWidth": "800px",
    "background": "#f5f5f5"
  },
  "transitions": {
    "enter": "slide-right",
    "exit": "slide-left"
  },
  "elements": []
}
```

## Form Field Validation
Form fields now support validation rules:

```typescript
{
  "type": "textInput",
  "id": "fieldId",
  "label": "Username",
  "validation": {
    "required": true,
    "minLength": 3,
    "maxLength": 20,
    "pattern": "^[a-zA-Z0-9_]+$",
    "customError": "Username must be alphanumeric"
  },
  "defaultValue": "john_doe"
}
```

## Example Usage

Here's a minimal example of a single screen with a header and list:

```typescript
{
  "screens": [
    {
      "id": "home",
      "name": "Home Screen",
      "elements": [
        {
          "type": "header",
          "id": "homeHeader",
          "title": "My App"
        },
        {
          "type": "list",
          "id": "mainList",
          "items": [
            {
              "id": "item1",
              "text": "First Item"
            }
          ]
        }
      ]
    }
  ]
}
```

## Best Practices

1. Always provide unique IDs for screens and elements
2. Use descriptive screen names and IDs
3. Keep navigation logic clear by using proper target IDs
4. Group related screens together
5. Test navigation flows between screens
