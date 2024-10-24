import { Response, ResponseSingle } from "./response.d";

export interface UserData {
  id: string;
  role?: string;
  email?: string | null;
  phone_number?: number | null;
  full_name?: string | null;
  profile_picture?: string | null;
  date_of_birth?: string | null;
  gender?: string | null;
  address?: string | null;
  oauth_provider?: string | null;
  date_joined?: string | null;
  is_active?: boolean | null;
  is_verified?: boolean;
  is_superuser?: boolean;
  is_staff?: boolean | null;
  country?: Country;
  user_information?: UserInformation;
  province?: Province;
  city?: City;
  teacher_information?: string;
}

export interface UserInformation {
  full_name?: string;
  profile_picture?: any;
  about_me?: string;
  gender?: string;
  date_of_birth?: string;
  country?: Country;
  province?: Province;
  city?: City;
  address?: string;
  phone_number?: string;
}

export interface Country {
  id?: string | number;
  country_short?: string | null;
  country_long?: string | null;
}

export interface City {
  id?: number;
  city_name?: string;
}

export interface Province {
  id?: number | string;
  city_name?: string;
  province_name?: string | null;
}

export interface UserState {
  loading: boolean;
  data?: ResponseSingle<UserData> | null;
  users?: Response<UserData> | null;
  error: string | null;
  success: boolean;
  isAuthenticated?: boolean;
  isDeleting?: boolean;
  isUpdated?: boolean;
}
