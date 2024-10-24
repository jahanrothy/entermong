
export interface Todo_list_Data {
    id?: number;
    reference: string;
    followers: string;
    details: string;
    due_date: string;
    status: string;
}

export interface due_job_Data {
    id: number;
    job_id: string;
    product: string;
    size: string;
    qty: number;
    due_date: string;
    status: string;
}

export interface recent_order_Data {
    id: number;
    product: string;
    product_thumbnail: string;
    order_id: string;
    job_id: string;
    date_time: string;
    amount: string;
}

export interface job_changes_Data {
    id: number;
    job_id: string;
    requested_on: string;
    name: string;
    amount: string;
    point: string;
    memo: string;
}

export interface recent_estimate_Data {
    id: number;
    email: string;
    product: string;
    requested: string;
    estimated: string;
    estimator: string;
    status: string;
}

export interface recent_pdf_proof_Data {
    job_id: string;
    order_date_time: string;
    due_date_time: string;
    status: string;
}

export interface press_schedule_Data {
    id: number;
    job_id: string;
    job_name: string;
    qty: number;
    press_method: string;
    size: string;
    due_date: string;
    status: string;
}

export interface admin_activity_Data {
    job_id: string;
    date_time: string;
    user: string;
    status: string;
}