
import {
    admin_activity_Data,
    due_job_Data,
    job_changes_Data, press_schedule_Data,
    recent_estimate_Data,
    recent_order_Data, recent_pdf_proof_Data,
    Todo_list_Data
} from "@/types/dashboard";
import Thumbnail from "@/assets/product-1.png";

export const DASHBOARD_TODO_DATA:Todo_list_Data[] = [
    {
        id: 1,
        reference: 'Job#158845-01',
        followers: 'Jeremy,Isaac,Jae',
        details: 'Check status and update customer with estimates finish',
        due_date: '6/7/24 2pm',
        status: 'Pending',
    }, {
        id: 2,
        reference: 'Job#158845-01',
        followers: 'Jeremy,Isaac,Jae',
        details: 'Check status and update customer with estimates finish',
        due_date: '6/7/24 2pm',
        status: 'Pending',
    }, {
        id: 3,
        reference: 'Job#158845-01',
        followers: 'Jeremy,Isaac,Jae',
        details: 'Check status and update customer with estimates finish',
        due_date: '6/7/24 2pm',
        status: 'Pending',
    },
]

export const DASHBOARD_DUE_TODAY_DATA:due_job_Data[] = [
    {
        id: 1,
        job_id: '1578202-01',
        product: 'Outdoor Banners',
        size: '18’ X 30’',
        qty: 5,
        due_date: '08/20//2024',
        status: 'Ready',
    },  {
        id: 1,
        job_id: '1578202-01',
        product: 'Outdoor Banners',
        size: '18’ X 30’',
        qty: 5,
        due_date: '08/20//2024',
        status: 'Ready',
    },  {
        id: 1,
        job_id: '1578202-01',
        product: 'Outdoor Banners',
        size: '18’ X 30’',
        qty: 5,
        due_date: '08/20//2024',
        status: 'Ready',
    },
]

export const DASHBOARD_RECENT_ORDER_DATA:recent_order_Data[] = [
    {
        id: 1,
        job_id: '1578529-01',
        order_id: '#1578529',
        product: 'Business card',
        product_thumbnail: Thumbnail,
        date_time: '6/7/2024 @2pm',
        amount: '$147.85',
    },
    {
        id: 2,
        job_id: '1578529-01',
        order_id: '#1578529',
        product: 'Business card',
        product_thumbnail: Thumbnail,
        date_time: '6/7/2024 @2pm',
        amount: '$147.85',
    },
    {
        id: 3,
        job_id: '1578529-01',
        order_id: '#1578529',
        product: 'Business card',
        product_thumbnail: Thumbnail,
        date_time: '6/7/2024 @2pm',
        amount: '$147.85',
    },
]

export const DASHBOARD_JOB_CHANGES_DATA:job_changes_Data[] = [
    {
        id: 1,
        job_id: '1578202-01',
        name: 'Customer',
        amount: '$5.00',
        point: '$3.00',
        requested_on: '3/12/2024 12:49:21 PM',
        memo: 'Shipping Change',
    },
    {
        id: 1,
        job_id: '1578202-01',
        name: 'Customer',
        amount: '$5.00',
        point: '$3.00',
        requested_on: '3/12/2024 12:49:21 PM',
        memo: 'Shipping Change',
    },
    {
        id: 1,
        job_id: '1578202-01',
        name: 'Customer',
        amount: '$5.00',
        point: '$3.00',
        requested_on: '3/12/2024 12:49:21 PM',
        memo: 'Shipping Change',
    },
]

export const DASHBOARD_ESTIMATE_DATA:recent_estimate_Data[] = [
    {
        id: 167101,
        email: 'chunjad@gmail.com',
        product: 'Flyers/Brochures',
        estimated: '6/7/24 @2pm',
        estimator: 'Jae',
        requested: '6/7/24 @2pm',
        status: 'Pending',
    }, {
        id: 167101,
        email: 'chunjad@gmail.com',
        product: 'Flyers/Brochures',
        estimated: '6/7/24 @2pm',
        estimator: 'Jae',
        requested: '6/7/24 @2pm',
        status: 'Pending',
    }, {
        id: 167101,
        email: 'chunjad@gmail.com',
        product: 'Flyers/Brochures',
        estimated: '6/7/24 @2pm',
        estimator: 'Jae',
        requested: '6/7/24 @2pm',
        status: 'Pending',
    },
]

export const DASHBOARD_PDF_PROOF_DATA:recent_pdf_proof_Data[] = [
    {
        job_id: '1578202-01',
        order_date_time: '3/12/2024 12:49:21 PM',
        due_date_time: '3/12/2024 12:49:21 PM',
        status: 'Sent PDF proof on 3/12/2024   15:12:21 PM',
    },
    {
        job_id: '1578203',
        order_date_time: '3/12/2024 12:49:21 PM',
        due_date_time: '3/12/2024 12:49:21 PM',
        status: 'Sent PDF proof on 3/12/2024   15:12:21 PM',
    },
    {
        job_id: '1578204',
        order_date_time: '3/12/2024 12:49:21 PM',
        due_date_time: '3/12/2024 12:49:21 PM',
        status: 'Sent PDF proof on 3/12/2024   15:12:21 PM',
    },
]

export const DASHBOARD_PRESS_SCHEDULE_DATA:press_schedule_Data[] = [
    {
        id: 1,
        job_id: "J53814-sig 1",
        job_name: 'Gang Run Flyer',
        qty: 1000,
        press_method: 'Sheetwise',
        size: '40 X 28',
        due_date: '8/7/24',
        status: 'Ready for Pending',
    },
    {
        id: 2,
        job_id: "J53814-sig 1",
        job_name: 'Gang Run Flyer',
        qty: 1000,
        press_method: 'Sheetwise',
        size: '40 X 28',
        due_date: '8/7/24',
        status: 'Ready for Pending',
    },
    {
        id: 3,
        job_id: "J53814-sig 1",
        job_name: 'Gang Run Flyer',
        qty: 1000,
        press_method: 'Sheetwise',
        size: '40 X 28',
        due_date: '8/7/24',
        status: 'Ready for Pending',
    },
]

export const DASHBOARD_ADMIN_ACTIVITY_DATA:admin_activity_Data[] = [
    {
        job_id: '1578202-01',
        date_time: '3/12/2024 12:49:21 PM',
        user: 'Clare',
        status: 'Sent PDF proof on ',
    },
    {
        job_id: '1578203',
        date_time: '3/12/2024 12:49:21 PM',
        user: 'Clare',
        status: 'Sent PDF proof on ',
    },
    {
        job_id: '1578204',
        date_time: '3/12/2024 12:49:21 PM',
        user: 'Clare',
        status: 'Sent PDF proof on ',
    },
]