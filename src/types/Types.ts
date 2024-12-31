export interface InputProps {
  label?: string; 
  type?: string; 
  value?: string; 
  onChange: (value: string) => void; 
  placeholder?: string; 
  disabled?: boolean; 
  className?: string; 
  name?: string;
}


export interface IconProps {
    icon: React.ElementType; 
    className?: string;
  }

 export interface TitleProps {
    children: React.ReactNode;
    className?: string;
  }