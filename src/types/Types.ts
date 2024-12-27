export interface InputProps {
  label?: string; 
  type?: string; 
  value?: string; 
  onChange: (value: string) => void; 
  placeholder?: string; 
  disabled?: boolean; 
  className?: string; 
}


export interface IconProps {
    icon: React.ElementType; // Usando React.ElementType ao invés de TablerIconProps
    className?: string;
  }

 export interface TitleProps {
    children: React.ReactNode;
    className?: string;
  }