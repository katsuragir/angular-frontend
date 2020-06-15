// Robots Colors
export type RobotsColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Robots Size
export type RobotsSize = 'M' | 'L' | 'XL';

// Robots Tag
export type RobotsTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Robots
export interface Robots {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  sale?: boolean;
  category?: string;
  colors?: RobotsColor[];
  size?: RobotsTags[];
  tags?: RobotsSize[];
  variants?: any[];
}

// Color Filter
export interface ColorFilter {
  color?: RobotsColor;
}

// Tag Filter
export interface TagFilter {
  tag?: RobotsTags
}