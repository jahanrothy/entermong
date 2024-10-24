export interface MessageProps {
    title: string;
    error?: string | null;
    success?: boolean;
    loading?: boolean;
    isUpdate?: boolean;
}