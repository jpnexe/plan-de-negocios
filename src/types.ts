
import type React from 'react';

export interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}