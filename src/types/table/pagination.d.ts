export interface PaginationProps {
    totalItems: number | undefined;
    itemsPerPage: number;
    maxVisiblePages?: number;
    onSubmit: (page: number) => void;
}