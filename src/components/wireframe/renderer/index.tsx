import React, { useState } from 'react';
import WireframeContainer from '../container';
import {
  Header,
  SearchBar,
  Tabs,
  ListItem,
  NavBar,
  FormInput,
  FormTextArea,
  FormSelect,
  Button,
    // Add this import
} from '../elements/index';
import { TextBlock } from '../elements/TextBlock';
import {
  WireframeSchema,
  ElementSchema,
  HeaderSchema,
  SearchBarSchema,
  TabsSchema,
  ListSchema,
  FormSchema,
  NavBarSchema,
  FormFieldSchema,
  ButtonSchema,    // Add these new imports
  TextBlockSchema,
  CardSchema,
  ImageSchema,
  DividerSchema
} from '../../../schemas/WireframeSchema';

interface WireframeRendererProps {
  schema: WireframeSchema;
  initialScreenId?: string;
}

const WireframeRenderer: React.FC<WireframeRendererProps> = ({
  schema,
  initialScreenId
}) => {
  const [currentScreenId, setCurrentScreenId] = useState(initialScreenId || schema.screens[0].id);
  const [activeTabIndices, setActiveTabIndices] = useState<Record<string, number>>({});

  const currentScreen = schema.screens.find(screen => screen.id === currentScreenId);
  
  if (!currentScreen) {
    return <div>Screen not found</div>;
  }

  const handleNavigation = (screenId: string) => {
    setCurrentScreenId(screenId);
  };

  const handleTabChange = (tabsId: string, tabIndex: number) => {
    setActiveTabIndices(prev => ({
      ...prev,
      [tabsId]: tabIndex
    }));
  };

  const renderElement = (element: ElementSchema) => {
    switch (element.type) {
      case 'header':
        return renderHeader(element as HeaderSchema);
      case 'searchBar':
        return renderSearchBar(element as SearchBarSchema);
      case 'tabs':
        return renderTabs(element as TabsSchema);
      case 'list':
        return renderList(element as ListSchema);
      case 'form':
        return renderForm(element as FormSchema);
      case 'navBar':
        return renderNavBar(element as NavBarSchema);
      case 'textBlock':
        return renderTextBlock(element as TextBlockSchema);
      case 'button':
        return renderButton(element as ButtonSchema);
      case 'card':
        return renderCard(element as CardSchema);
      case 'image':
        return renderImage(element as ImageSchema);
      case 'divider':
        return renderDivider(element as DividerSchema);
      default:
        return null;
    }
  };

  const renderHeader = (header: HeaderSchema) => {
    return (
      <Header
        key={header.id}
        title={header.title}
        hasBackButton={header.hasBackButton}
        hasAddButton={header.hasAddButton}
        onBackClick={header.backButtonTarget ? () => handleNavigation(header.backButtonTarget!) : undefined}
        onAddClick={header.addButtonTarget ? () => handleNavigation(header.addButtonTarget!) : undefined}
      />
    );
  };

  const renderSearchBar = (searchBar: SearchBarSchema) => {
    return (
      <SearchBar
        key={searchBar.id}
        placeholder={searchBar.placeholder}
      />
    );
  };

  const renderTabs = (tabs: TabsSchema) => {
    const activeTabIndex = activeTabIndices[tabs.id] !== undefined 
      ? activeTabIndices[tabs.id] 
      : (tabs.defaultActiveTab || 0);
    
    return (
      <Tabs
        key={tabs.id}
        tabs={tabs.tabs}
        activeTab={activeTabIndex}
        onTabChange={(index) => handleTabChange(tabs.id, index)}
      />
    );
  };

  const renderList = (list: ListSchema) => {
    return (
      <div className="mx-4 my-4" key={list.id}>
        {list.items.map(item => (
          <ListItem
            key={item.id}
            text={item.text}
            rightText={item.rightText}
            hasCheckbox={item.hasCheckbox}
            checked={item.checked}
            onClick={item.target ? () => handleNavigation(item.target!) : undefined}
          />
        ))}
      </div>
    );
  };

  const renderFormField = (field: FormFieldSchema) => {
    switch (field.type) {
      case 'textInput':
        return (
          <FormInput
            key={field.id}
            label={field.label}
            placeholder={field.placeholder}
          />
        );
      case 'textArea':
        return (
          <FormTextArea
            key={field.id}
            label={field.label}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <FormSelect
            key={field.id}
            label={field.label}
            options={field.options || []}
          />
        );
      case 'dateInput':
        return (
          <FormInput
            key={field.id}
            label={field.label}
            type="date"
          />
        );
      default:
        return null;
    }
  };

  const renderForm = (form: FormSchema) => {
    return (
      <div className="mx-4 my-4" key={form.id}>
        {form.fields.map(field => renderFormField(field))}
        <Button 
          text={form.submitButtonText} 
          onClick={form.submitTarget ? () => handleNavigation(form.submitTarget!) : undefined}
        />
      </div>
    );
  };

  const renderNavBar = (navBar: NavBarSchema) => {
    const buttons = navBar.buttons.map(button => ({
      label: button.label,
      active: button.target === currentScreenId,
      onClick: () => handleNavigation(button.target)
    }));

    return (
      <NavBar
        key={navBar.id}
        buttons={buttons}
      />
    );
  };

  const renderTextBlock = (textBlock: TextBlockSchema) => {
    return (
      <TextBlock
        key={textBlock.id}
        content={textBlock.content}
        variant={textBlock.variant}
        alignment={textBlock.alignment}
      />
    );
  };

  const renderButton = (button: ButtonSchema) => {
    return (
      <Button
        key={button.id}
        text={button.text}
        onClick={button.target ? () => handleNavigation(button.target!) : undefined}
      />
    );
  };

  const renderCard = (card: CardSchema) => {
    // Implement card rendering
    return null;
  };

  const renderImage = (image: ImageSchema) => {
    // Implement image rendering
    return null;
  };

  const renderDivider = (divider: DividerSchema) => {
    // Implement divider rendering
    return null;
  };

  return (
    <WireframeContainer>
      {currentScreen && currentScreen.elements.map(element => renderElement(element))}
    </WireframeContainer>
  );
};

export default WireframeRenderer;