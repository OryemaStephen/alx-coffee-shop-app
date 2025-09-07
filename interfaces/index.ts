export interface ButtonProps {
  onPress: () => void;
  title?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  backgroundColor?: string;
  textColor?: string;
  paddingX?: string;
  paddingY?: string;
  rounded?: string;
  textStyle?: string;
  containerStyle?: string;
  disabled?: boolean;
}

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  rating: number;
};

export interface CategoryProps{
  id: string;
  name: string;
};