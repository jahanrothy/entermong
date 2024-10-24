
export interface MemberData {
    id: string;
    email: string;
    name?: string;
    company?: string;
    phone?: string;
}

export interface DeferredPaymentData {
    id: string;
    member_id: string;
    email: string;
    name?: string;
    phone?: string;
    label?: string;
    applied_date?: string;
}

export interface SingleDetailsMember {
    first_name: string;
    last_name: string;
    email_name: string;
    password: string;
    company_name: string;
    note: string;
    points: string;
    select: string;
    trade_id: string;
    asi: string;
    address: string;
    address_2:  string;
    city: string;
    state: string;
    zip_code: string;
    date_registered: string;
    subscription: string;
    ca_reseller: string;
    vip: string;
    approved: string;
}

export interface MemberFormInput {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    company_name: string;
    note: string;
    points: string;
    select: string;
    trade_id: string;
    asi: string;
    address: string;
    address_2:  string;
    city: string;
    state: string;
    zip_code: string;
    date_registered: string;
    subscription: string;
    ca_reseller: string;
    vip: string;
    approved: string;
}