export interface BundledEditorProps {
  initialValue?: string;
  apiKey?: string;
  onInit?: (_evt: unknown, editor: null) => null;
  init?: {
    toolbar: string;
    menubar: boolean;
    content_style: string;
    plugins: string[];
    height: number;
  };
}

export interface TinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
  active?: string | number;
}

export type MenuOption = "Sign out" | "Your profile";
