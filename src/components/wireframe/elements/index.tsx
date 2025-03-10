import React from 'react';

// Header component
interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  hasAddButton?: boolean;
  onBackClick?: () => void;
  onAddClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  hasBackButton = false,
  hasAddButton = false,
  onBackClick,
  onAddClick
}) => {
  return (
    <div className="border-b-2 border-[#1b1b1b] p-4 text-center relative">
      {hasBackButton && (
        <div 
          className="absolute left-4 top-4 border-2 border-[#1b1b1b] p-1 px-2 cursor-pointer"
          onClick={onBackClick}
        >
          Back
        </div>
      )}
      <h1 className="m-0 text-lg">{title}</h1>
      {hasAddButton && (
        <div 
          className="absolute right-4 top-4 border-2 border-[#1b1b1b] p-1 px-2 cursor-pointer"
          onClick={onAddClick}
        >
          +
        </div>
      )}
    </div>
  );
};

// Search bar component
interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onChange
}) => {
  return (
    <div className="mx-4 my-4 p-2 border-2 border-[#1b1b1b]">
      <input 
        className="w-full p-1 border border-[#1b1b1b] bg-white font-inherit"
        placeholder={placeholder} 
        onChange={(e) => onChange && onChange(e.target.value)} 
      />
    </div>
  );
};

// Tabs component
interface TabsProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="flex border-b-2 border-[#1b1b1b]">
      {tabs.map((tab, index) => (
        <div 
          key={index} 
          className={`flex-1 text-center p-2 cursor-pointer border-r-2 border-[#1b1b1b] last:border-r-0 ${index === activeTab ? 'bg-[#f8f9fa]' : 'bg-white'}`}
          onClick={() => onTabChange(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

// List item component
interface ListItemProps {
  text: string;
  rightText?: string;
  hasCheckbox?: boolean;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  onClick?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  text,
  rightText,
  hasCheckbox = false,
  checked = false,
  onCheckChange,
  onClick
}) => {
  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCheckChange && onCheckChange(!checked);
  };

  return (
    <div 
      className="p-2 border-2 border-[#1b1b1b] mb-2 flex items-center bg-white cursor-pointer"
      onClick={onClick}
    >
      {hasCheckbox && (
        <div 
          className="w-5 h-5 border-2 border-[#1b1b1b] mr-2 relative"
          onClick={handleCheckboxClick}
        >
          {checked && (
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              ✓
            </span>
          )}
        </div>
      )}
      <div className="flex-1">{text}</div>
      {rightText && <div className="text-gray-500 text-sm">{rightText}</div>}
    </div>
  );
};

// Navigation bar component
interface NavButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface NavBarProps {
  buttons: NavButtonProps[];
}

export const NavBar: React.FC<NavBarProps> = ({ buttons }) => {
  return (
    <div className="absolute bottom-0 w-full flex border-t-2 border-[#1b1b1b]">
      {buttons.map((button, index) => (
        <div 
          key={index} 
          className={`flex-1 text-center p-4 cursor-pointer border-r-2 border-[#1b1b1b] last:border-r-0 ${button.active ? 'bg-[#f8f9fa]' : 'bg-white'}`}
          onClick={button.onClick}
        >
          {button.label}
        </div>
      ))}
    </div>
  );
};

// Form components
interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const FormInput: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input 
        className="w-full p-2 border-2 border-[#1b1b1b] bg-white font-inherit"
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const FormTextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder = '',
  value = '',
  onChange
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <textarea 
        className="w-full p-2 border-2 border-[#1b1b1b] bg-white font-inherit min-h-[100px]"
        placeholder={placeholder} 
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

interface SelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const FormSelect: React.FC<SelectProps> = ({
  label,
  options,
  value = '',
  onChange
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <select 
        className="w-full p-2 border-2 border-[#1b1b1b] bg-white font-inherit"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <button 
      className="w-full p-2 border-2 border-[#1b1b1b] bg-white cursor-pointer font-inherit hover:bg-[#f8f9fa]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};