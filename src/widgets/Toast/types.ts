export const types = {
  SUCCESS: "success",
  SUCCESS2: "success2",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
};

export type Types = typeof types[keyof typeof types];

export interface ToastAction {
  text: string;
  url: string;
}

export interface Toast {
  id: string;
  type: Types;
  title: string;
  description?: string;
  action?: ToastAction;
}

export interface ToastContainerProps {
  toasts: Toast[];
  stackSpacing?: number;
  ttl?: number;
  onRemove: (id: string) => void;
}

export interface ToastProps {
  toast: Toast;
  onRemove: ToastContainerProps["onRemove"];
  ttl: number;
  style: Partial<CSSStyleDeclaration>;
}
