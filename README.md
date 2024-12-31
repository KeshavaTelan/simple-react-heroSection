# React Bootstrap Hero Component

A customizable, responsive hero section component for React applications using Bootstrap 5. This component provides a flexible hero section with customizable content, buttons, and responsive image handling.

## Features

- Fully responsive design
- Customizable background colors using Bootstrap classes
- Optional secondary button
- Mobile-friendly with configurable image visibility
- Bootstrap 5 compatible
- Customizable button styles
- Flexible text content and styling

## Installation

1. First, ensure you have the required peer dependencies:
```bash
npm install react react-dom bootstrap
```

2. Install the hero component:
```bash
npm install react-bootstrap-hero
```

3. Make sure you have Bootstrap CSS imported in your project:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Usage

Basic example:
```jsx
import { HeroSection } from 'react-bootstrap-hero';

function App() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      description="Transform your digital experience with our cutting-edge solutions."
      primaryButton={{
        text: "Get Started",
        onClick: () => console.log("Primary button clicked")
      }}
      imageSrc="/path/to/your/image.svg"
    />
  );
}
```

Advanced example with all props:
```jsx
import { HeroSection } from 'react-bootstrap-hero';

function App() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      description="Transform your digital experience with our cutting-edge solutions."
      primaryButton={{
        text: "Get Started",
        onClick: () => console.log("Primary button clicked")
      }}
      secondaryButton={{
        text: "Learn More",
        onClick: () => console.log("Secondary button clicked")
      }}
      imageSrc="/path/to/your/image.svg"
      imageAlt="Platform illustration"
      showSecondaryButton={true}
      showImageOnMobile={false}
      backgroundColor="bg-primary"
      textColor="text-white"
      primaryButtonClass="btn-light"
      secondaryButtonClass="btn-outline-light"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | required | The main heading text for the hero section |
| `description` | string | required | The descriptive text below the heading |
| `primaryButton` | object | null | Configuration for the primary button |
| `secondaryButton` | object | null | Configuration for the secondary button |
| `imageSrc` | string | null | URL or path to the hero image |
| `imageAlt` | string | "Hero image" | Alt text for the hero image |
| `showSecondaryButton` | boolean | true | Controls visibility of secondary button |
| `showImageOnMobile` | boolean | true | Controls image visibility on mobile devices |
| `backgroundColor` | string | "bg-light" | Bootstrap background class |
| `textColor` | string | "text-dark" | Bootstrap text color class |
| `primaryButtonClass` | string | "btn-primary" | Bootstrap class for primary button |
| `secondaryButtonClass` | string | "btn-secondary" | Bootstrap class for secondary button |

### Button Object Properties

Both `primaryButton` and `secondaryButton` accept objects with the following properties:

```typescript
{
  text: string;    // Button text
  onClick: () => void;  // Click handler function
}
```

## Customization

### Background Colors
You can use any Bootstrap background utility class:
```jsx
<HeroSection backgroundColor="bg-primary" />  // Blue background
<HeroSection backgroundColor="bg-success" />  // Green background
<HeroSection backgroundColor="bg-warning" />  // Yellow background
<HeroSection backgroundColor="bg-danger" />   // Red background
<HeroSection backgroundColor="bg-light" />    // Light background
<HeroSection backgroundColor="bg-dark" />     // Dark background
```

### Text Colors
Match your text color with the background:
```jsx
<HeroSection textColor="text-white" />  // White text
<HeroSection textColor="text-dark" />   // Dark text
```

### Button Styles
Customize buttons using Bootstrap button classes:
```jsx
<HeroSection 
  primaryButtonClass="btn-outline-primary"
  secondaryButtonClass="btn-light"
/>
```

### Mobile Responsiveness
Control image visibility on mobile:
```jsx
<HeroSection showImageOnMobile={false} />  // Hides image on mobile
```

## Examples

### Light Theme Hero
```jsx
<HeroSection
  title="Welcome to Our Platform"
  description="Transform your digital experience with our cutting-edge solutions."
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log("Started")
  }}
  backgroundColor="bg-light"
  textColor="text-dark"
  primaryButtonClass="btn-primary"
/>
```

### Dark Theme Hero
```jsx
<HeroSection
  title="Welcome to Our Platform"
  description="Transform your digital experience with our cutting-edge solutions."
  primaryButton={{
    text: "Get Started",
    onClick: () => console.log("Started")
  }}
  backgroundColor="bg-dark"
  textColor="text-white"
  primaryButtonClass="btn-light"
  secondaryButtonClass="btn-outline-light"
/>
```

## Browser Support

This component supports all browsers that are supported by React 16.8+ and Bootstrap 5.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © keshava silva

## Support

If you encounter any problems or have suggestions, please open an issue on GitHub.